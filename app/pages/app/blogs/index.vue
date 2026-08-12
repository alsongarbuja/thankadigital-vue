<script setup lang="ts">
import { ref, computed } from "vue";
import ListWrapper from "~/components/wrappers/ListWrapper.vue";

definePageMeta({
  layout: false,
});

const search = ref("");
const blogs = ref([
  { id: 1, name: "Adversary AI", status: "Live" },
  { id: 2, name: "Resort Sync", status: "Draft" },
]);

const filtered = computed(() =>
  blogs.value.filter((p) => p.name.toLowerCase().includes(search.value.toLowerCase()))
);
</script>

<template>
  <ListWrapper
    title="Blogs"
    resource-label="Blog"
    description="Every blog shown on the public site."
    create-to="/app/blogs/new"
    :item-count="blogs.length"
    v-model:search="search"
    :is-empty="filtered.length === 0"
  >
    <div
      v-for="blog in filtered"
      :key="blog.id"
      class="flex items-center justify-between px-6 py-4 border-b border-black/5 last:border-0"
    >
      <span class="text-sm font-bold text-black">{{ blog.name }}</span>
      <span class="text-xs text-black/40">{{ blog.status }}</span>
    </div>
  </ListWrapper>
</template>
