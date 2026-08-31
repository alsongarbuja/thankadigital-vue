<script setup lang="ts">
import { ref, computed } from "vue";
import ListWrapper from "~/components/wrappers/ListWrapper.vue";
import type { ITeamDocument } from "~~/server/models/team.model";

definePageMeta({
  layout: false,
});

useSeoMeta({
  title: "Dashboard - Teams",
});

const search = ref("");

const {
  data: teams,
  pending,
  refresh,
} = await useFetch<ITeamDocument[]>("/api/teams", {
  default: () => [],
});

const filtered = computed(() =>
  teams.value.filter((c) =>
    c.name.toLowerCase().includes(search.value.toLowerCase()),
  ),
);

const deleteTarget = ref<ITeamDocument | null>(null);

const resolveDeleteUrl = (team: Record<string, any>) =>
  `/api/teams/${team._id}/delete`;

const handleDeleted = (deleted: Record<string, any>) => {
  teams.value = teams.value.filter((c) => c._id !== deleted._id);
};
</script>

<template>
  <ListWrapper
    title="Teams"
    resource-label="Team"
    description="Every team shown on the public site."
    create-to="/app/teams/create"
    :item-count="teams.length"
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
      v-for="team in filtered"
      :key="team._id.toString()"
      class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-6 py-4 border-b border-black/5 last:border-0"
    >
      <div class="min-w-0 flex-1">
        <div class="flex items-center gap-3 flex-wrap">
          <span class="text-sm font-bold text-black truncate">
            {{ team.name }}
          </span>
        </div>
      </div>

      <div class="flex items-center gap-1 shrink-0">
        <NuxtLink
          :to="`/app/teams/edit/${team._id}`"
          class="px-3.5 py-2 rounded-full text-xs font-semibold text-black/60 hover:text-primary-blue hover:bg-primary-blue/5 transition-all duration-300"
        >
          Edit
        </NuxtLink>
        <button
          type="button"
          @click="deleteTarget = team"
          class="px-3.5 py-2 rounded-full text-xs font-semibold text-primary-red hover:bg-primary-red/5 transition-all duration-300 cursor-pointer"
        >
          Delete
        </button>
      </div>
    </div>
  </ListWrapper>
</template>
