<script setup lang="ts">
import { ref, computed } from "vue";
import ListWrapper from "~/components/wrappers/ListWrapper.vue";
import type { IProjectScheme } from "~~/types/project";

definePageMeta({
  layout: false,
});

useSeoMeta({
  title: "Dashboard - Projects",
});

const search = ref("");

const { data: projects, pending, refresh } = await useFetch<IProjectScheme[]>(
  "/api/projects",
  { default: () => [] }
);

const filtered = computed(() =>
  projects.value.filter((p) => p.name.toLowerCase().includes(search.value.toLowerCase()))
);

const deleteTarget = ref<IProjectScheme | null>(null);
const isDeleting = ref(false);
const deleteError = ref("");

const openDeleteModal = (project: IProjectScheme) => {
  deleteTarget.value = project;
  deleteError.value = "";
};

const closeDeleteModal = () => {
  if (isDeleting.value) return;
  deleteTarget.value = null;
};

const confirmDelete = async () => {
  if (!deleteTarget.value) return;

  isDeleting.value = true;
  deleteError.value = "";

  try {
    await $fetch(`/api/projects/${deleteTarget.value.slug}/delete`, {
      method: "DELETE",
    });
    projects.value = projects.value.filter((p) => p.slug !== deleteTarget.value?.slug);
    deleteTarget.value = null;
  } catch (err) {
    deleteError.value = "Something went wrong. Please try again.";
  } finally {
    isDeleting.value = false;
  }
};
</script>

<template>
  <ListWrapper
    title="Projects"
    resource-label="Project"
    description="Every project shown on the public site."
    create-to="/app/projects/create"
    :item-count="projects.length"
    v-model:search="search"
    :is-empty="!pending && filtered.length === 0"
  >
    <!-- Loading skeleton -->
    <div v-if="pending" class="flex flex-col">
      <div
        v-for="n in 4"
        :key="n"
        class="flex items-center justify-between px-6 py-4 border-b border-black/5 last:border-0 animate-pulse"
      >
        <div class="flex flex-col gap-2">
          <div class="h-3.5 w-32 rounded-full bg-black/10"></div>
          <div class="h-2.5 w-24 rounded-full bg-black/5"></div>
        </div>
        <div class="h-3 w-16 rounded-full bg-black/5"></div>
      </div>
    </div>

    <!-- Rows -->
    <div
      v-for="project in filtered"
      :key="project.slug"
      class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-6 py-4 border-b border-black/5 last:border-0"
    >
      <div class="min-w-0 flex-1">
        <div class="flex items-center gap-3 flex-wrap">
          <span class="text-sm font-bold text-black truncate">
            {{ project.name }}
          </span>
          <span
            class="px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wide shrink-0"
            :class="{
              'bg-green-500/10 text-green-600': project.status === 'published',
              'bg-black/5 text-black/40': project.status === 'draft',
              'bg-primary-red/10 text-primary-red': project.status === 'archieved',
            }"
          >
            {{ project.status }}
          </span>
        </div>

        <div v-if="project.tags?.length" class="flex flex-wrap gap-1.5 mt-2">
          <span
            v-for="tag in project.tags"
            :key="tag"
            class="px-2.5 py-1 rounded-full bg-primary-blue/5 text-[10px] font-semibold text-primary-blue"
          >
            {{ tag }}
          </span>
        </div>
      </div>

      <div class="flex items-center gap-1 shrink-0">
        <NuxtLink
          :to="`/app/projects/edit/${project.slug}`"
          class="px-3.5 py-2 rounded-full text-xs font-semibold text-black/60 hover:text-primary-blue hover:bg-primary-blue/5 transition-all duration-300"
        >
          Edit
        </NuxtLink>
        <button
          type="button"
          @click="openDeleteModal(project)"
          class="px-3.5 py-2 rounded-full text-xs font-semibold text-primary-red hover:bg-primary-red/5 transition-all duration-300 cursor-pointer"
        >
          Delete
        </button>
      </div>
    </div>
  </ListWrapper>

  <!-- Delete confirmation modal -->
  <Transition
    enter-active-class="transition-all duration-300 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-all duration-200 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="deleteTarget"
      class="fixed inset-0 z-100 flex items-center justify-center p-4"
    >
      <div
        class="absolute inset-0 bg-black/50 backdrop-blur-sm"
        @click="closeDeleteModal"
      ></div>

      <Transition
        appear
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 scale-95 translate-y-2"
        enter-to-class="opacity-100 scale-100 translate-y-0"
      >
        <div
          class="relative bg-white w-full max-w-sm rounded-3xl shadow-2xl shadow-black/20 border border-black/5 p-8"
        >
          <div
            class="w-12 h-12 rounded-full bg-primary-red/10 flex items-center justify-center mb-5"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="w-5 h-5 text-primary-red"
            >
              <path d="M4 7h16" />
              <path d="M6 7l1 13a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-13" />
              <path d="M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3" />
              <line x1="10" y1="11" x2="10" y2="17" />
              <line x1="14" y1="11" x2="14" y2="17" />
            </svg>
          </div>

          <h4 class="font-bold text-black mb-2">Delete Project</h4>
          <p class="text-sm text-black/50 leading-relaxed mb-1">
            Are you sure you want to delete
            <span class="font-semibold text-black">
              {{ deleteTarget?.name }}
            </span>
            ? This action cannot be undone.
          </p>
          <p v-if="deleteError" class="text-xs text-primary-red mt-3">
            {{ deleteError }}
          </p>

          <div class="flex items-center gap-3 mt-7">
            <button
              type="button"
              :disabled="isDeleting"
              @click="closeDeleteModal"
              class="flex-1 py-3 rounded-full text-sm font-semibold text-black/60 bg-black/4 hover:bg-black/6 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="button"
              :disabled="isDeleting"
              @click="confirmDelete"
              class="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-full text-sm font-semibold text-white bg-primary-red hover:bg-primary-red/90 transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
            >
              <span
                v-if="isDeleting"
                class="w-3.5 h-3.5 border-2 border-white/40 border-t-white rounded-full animate-spin"
              ></span>
              {{ isDeleting ? "Deleting..." : "Delete" }}
            </button>
          </div>
        </div>
      </Transition>
    </div>
  </Transition>
</template>
