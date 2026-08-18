<script setup lang="ts">
import { ref, computed } from "vue";
import ListWrapper from "~/components/wrappers/ListWrapper.vue";
import type { IProjectDocument } from "~~/server/models/project.model";

definePageMeta({
  layout: false,
});

useSeoMeta({
  title: "Dashboard - Projects",
});

const search = ref("");

const {
  data: projects,
  pending,
  refresh,
} = await useFetch<IProjectDocument[]>("/api/projects", { default: () => [] });

const filtered = computed(() =>
  projects.value.filter((p) =>
    p.name.toLowerCase().includes(search.value.toLowerCase()),
  ),
);

const deleteTarget = ref<IProjectDocument | null>(null);

const resolveDeleteUrl = (project: Record<string, any>) =>
  `/api/projects/${project.slug}/delete`;

const handleDeleted = (deleted: Record<string, any>) => {
  projects.value = projects.value.filter((p) => p.slug !== deleted.slug);
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
    with-delete
    v-model:delete-target="deleteTarget"
    :resolve-delete-url="resolveDeleteUrl"
    delete-name-key="name"
    @deleted="handleDeleted"
  >
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
              'bg-primary-red/10 text-primary-red':
                project.status === 'archieved',
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
          @click="deleteTarget = project"
          class="px-3.5 py-2 rounded-full text-xs font-semibold text-primary-red hover:bg-primary-red/5 transition-all duration-300 cursor-pointer"
        >
          Delete
        </button>
      </div>
    </div>
  </ListWrapper>
</template>
