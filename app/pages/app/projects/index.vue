<script setup lang="ts">
import { ref, computed } from "vue";
import ListWrapper from "~/components/wrappers/ListWrapper.vue";

definePageMeta({
  layout: false,
});

const search = ref("");
const projects = ref([
  { id: 1, name: "Adversary AI", status: "Live" },
  { id: 2, name: "Resort Sync", status: "Draft" },
]);

const filtered = computed(() =>
  projects.value.filter((p) => p.name.toLowerCase().includes(search.value.toLowerCase()))
);
</script>

<template>
  <ListWrapper
    title="Projects"
    resource-label="Project"
    description="Every project shown on the public site."
    create-to="/app/projects/new"
    :item-count="projects.length"
    v-model:search="search"
    :is-empty="filtered.length === 0"
  >
    <div
      v-for="project in filtered"
      :key="project.id"
      class="flex items-center justify-between px-6 py-4 border-b border-black/5 last:border-0"
    >
      <span class="text-sm font-bold text-black">{{ project.name }}</span>
      <span class="text-xs text-black/40">{{ project.status }}</span>
    </div>
  </ListWrapper>
</template>
