<script setup lang="ts">
import { ref, computed } from "vue";
import ListWrapper from "~/components/wrappers/ListWrapper.vue";

definePageMeta({
  layout: false,
});

const search = ref("");
const careers = ref([
  { id: 1, name: "Adversary AI", status: "Live" },
  { id: 2, name: "Resort Sync", status: "Draft" },
]);

const filtered = computed(() =>
  careers.value.filter((p) => p.name.toLowerCase().includes(search.value.toLowerCase()))
);
</script>

<template>
  <ListWrapper
    title="Careers"
    resource-label="Career"
    description="Every career shown on the public site."
    create-to="/app/careers/new"
    :item-count="careers.length"
    v-model:search="search"
    :is-empty="filtered.length === 0"
  >
    <div
      v-for="career in filtered"
      :key="career.id"
      class="flex items-center justify-between px-6 py-4 border-b border-black/5 last:border-0"
    >
      <span class="text-sm font-bold text-black">{{ career.name }}</span>
      <span class="text-xs text-black/40">{{ career.status }}</span>
    </div>
  </ListWrapper>
</template>
