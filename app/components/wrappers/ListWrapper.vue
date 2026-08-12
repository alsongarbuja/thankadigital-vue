<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title: string;
    resourceLabel?: string;
    description?: string;
    createTo?: string;
    itemCount?: number;
    search?: string;
    searchPlaceholder?: string;
    showSearch?: boolean;
    isEmpty?: boolean;
    emptyTitle?: string;
    emptyHint?: string;
  }>(),
  {
    resourceLabel: "",
    description: "",
    createTo: "",
    itemCount: undefined,
    search: "",
    searchPlaceholder: "Search...",
    showSearch: true,
    isEmpty: false,
    emptyTitle: "Nothing here yet",
    emptyHint: "New entries will show up here once added.",
  }
);

const emit = defineEmits<{
  "update:search": [value: string];
  create: [];
}>();
</script>

<template>
  <NuxtLayout name="admin">
    <div class="flex flex-col gap-8">
      <!-- Header -->
      <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-5">
        <div class="min-w-0">
          <div class="flex items-center gap-3">
            <h1 class="text-3xl md:text-4xl font-bold text-black">
              {{ title }}
            </h1>
            <span
              v-if="itemCount !== undefined"
              class="px-2.5 py-1 rounded-full bg-black/4 text-xs font-bold text-black/50 shrink-0"
            >
              {{ itemCount }}
            </span>
          </div>

          <p v-if="description" class="mt-2 text-sm text-black/50 max-w-md">
            {{ description }}
          </p>
        </div>

        <div class="flex items-center gap-3 shrink-0">
          <slot name="actions" />

          <NuxtLink
            v-if="createTo"
            :to="createTo"
            class="group inline-flex items-center gap-2 pl-5 pr-2 py-2 rounded-full bg-primary-blue text-white shadow-sm shadow-primary-blue/20 hover:bg-primary-red hover:shadow-md hover:shadow-primary-red/20 transition-all duration-300"
          >
            <span class="text-sm font-semibold whitespace-nowrap">
              New {{ resourceLabel || title }}
            </span>
            <span
              class="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-xs group-hover:rotate-90 transition-transform duration-300"
            >
              +
            </span>
          </NuxtLink>

          <button
            v-else
            type="button"
            @click="emit('create')"
            class="group inline-flex items-center gap-2 pl-5 pr-2 py-2 rounded-full bg-primary-blue text-white shadow-sm shadow-primary-blue/20 hover:bg-primary-red hover:shadow-md hover:shadow-primary-red/20 transition-all duration-300 cursor-pointer"
          >
            <span class="text-sm font-semibold whitespace-nowrap">
              New {{ resourceLabel || title }}
            </span>
            <span
              class="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-xs group-hover:rotate-90 transition-transform duration-300"
            >
              +
            </span>
          </button>
        </div>
      </div>

      <!-- Toolbar: search + resource-specific filters -->
      <div
        v-if="showSearch || $slots.toolbar"
        class="flex flex-col sm:flex-row sm:items-center gap-3"
      >
        <div
          v-if="showSearch"
          class="flex items-center gap-2 w-full sm:max-w-xs px-4 py-2.5 rounded-full bg-white border border-black/5 shadow-sm shadow-black/5"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="w-4 h-4 text-black/40 shrink-0"
          >
            <circle cx="10" cy="10" r="6.5" />
            <line x1="14.7" y1="14.7" x2="20.5" y2="20.5" />
          </svg>
          <input
            :value="search"
            @input="
              emit('update:search', ($event.target as HTMLInputElement).value)
            "
            type="text"
            :placeholder="searchPlaceholder"
            class="bg-transparent text-sm outline-none placeholder:text-black/30 w-full min-w-0"
          />
        </div>

        <slot name="toolbar" />
      </div>

      <!-- Resource-specific list content -->
      <div
        class="rounded-2xl bg-white border border-black/5 shadow-sm shadow-black/5 overflow-hidden"
      >
        <div v-if="isEmpty" class="text-center py-24 px-6">
          <p class="text-base text-black/50 mb-2">{{ emptyTitle }}</p>
          <p class="text-xs text-black/30">{{ emptyHint }}</p>
        </div>
        <slot v-else />
      </div>
    </div>
  </NuxtLayout>
</template>
