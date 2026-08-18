<script setup lang="ts">
import { ref, computed } from "vue";
import ListWrapper from "~/components/wrappers/ListWrapper.vue";
import type { ICareerDocument } from "~~/server/models/career.model";

definePageMeta({
  layout: false,
});

useSeoMeta({
  title: "Dashboard - Careers",
});

const search = ref("");

const {
  data: careers,
  pending,
  refresh,
} = await useFetch<ICareerDocument[]>("/api/careers", { default: () => [] });

const filtered = computed(() =>
  careers.value.filter((c) =>
    c.title.toLowerCase().includes(search.value.toLowerCase()),
  ),
);

const deleteTarget = ref<ICareerDocument | null>(null);

const resolveDeleteUrl = (career: Record<string, any>) =>
  `/api/careers/${career._id}/delete`;

const handleDeleted = (deleted: Record<string, any>) => {
  careers.value = careers.value.filter((c) => c._id !== deleted._id);
};
</script>

<template>
  <ListWrapper
    title="Careers"
    resource-label="Career"
    description="Every career shown on the public site."
    create-to="/app/careers/create"
    :item-count="careers.length"
    v-model:search="search"
    :is-empty="!pending && filtered.length === 0"
    with-delete
    v-model:delete-target="deleteTarget"
    :resolve-delete-url="resolveDeleteUrl"
    delete-name-key="title"
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
      v-for="career in filtered"
      :key="career._id.toString()"
      class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-6 py-4 border-b border-black/5 last:border-0"
    >
      <div class="min-w-0 flex-1">
        <div class="flex items-center gap-3 flex-wrap">
          <span class="text-sm font-bold text-black truncate">
            {{ career.title }}
          </span>
          <span
            class="px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wide shrink-0"
            :class="{
              'bg-green-500/10 text-green-600': career.status === 'published',
              'bg-black/5 text-black/40': career.status === 'draft',
              'bg-primary-red/10 text-primary-red':
                career.status === 'archieved',
            }"
          >
            {{ career.status }}
          </span>
        </div>
      </div>

      <div class="flex items-center gap-1 shrink-0">
        <NuxtLink
          :to="`/app/careers/edit/${career._id}`"
          class="px-3.5 py-2 rounded-full text-xs font-semibold text-black/60 hover:text-primary-blue hover:bg-primary-blue/5 transition-all duration-300"
        >
          Edit
        </NuxtLink>
        <button
          type="button"
          @click="deleteTarget = career"
          class="px-3.5 py-2 rounded-full text-xs font-semibold text-primary-red hover:bg-primary-red/5 transition-all duration-300 cursor-pointer"
        >
          Delete
        </button>
      </div>
    </div>
  </ListWrapper>
</template>
