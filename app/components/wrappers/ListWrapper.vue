<script setup lang="ts">
import { ref } from "vue";

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
    // Delete modal (optional — off unless withDelete is set)
    withDelete?: boolean;
    deleteTarget?: Record<string, any> | null;
    resolveDeleteUrl?: (item: Record<string, any>) => string;
    deleteNameKey?: string;
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
    withDelete: false,
    deleteTarget: null,
    resolveDeleteUrl: undefined,
    deleteNameKey: "name",
  },
);

const emit = defineEmits<{
  "update:search": [value: string];
  "update:deleteTarget": [item: Record<string, any> | null];
  create: [];
  deleted: [item: Record<string, any>];
}>();

const isDeleting = ref(false);
const deleteError = ref("");

const closeDeleteModal = () => {
  if (isDeleting.value) return;
  deleteError.value = "";
  emit("update:deleteTarget", null);
};

const confirmDelete = async () => {
  if (!props.deleteTarget || !props.resolveDeleteUrl) return;

  isDeleting.value = true;
  deleteError.value = "";

  try {
    const url = props.resolveDeleteUrl(props.deleteTarget);
    await $fetch(url, { method: "DELETE" });
    emit("deleted", props.deleteTarget);
    emit("update:deleteTarget", null);
  } catch (err: any) {
    deleteError.value =
      err?.data?.statusMessage ?? "Something went wrong. Please try again.";
  } finally {
    isDeleting.value = false;
  }
};
</script>

<template>
  <NuxtLayout name="admin">
    <div class="flex flex-col gap-8">
      <!-- Header -->
      <div
        class="flex flex-col md:flex-row md:items-end md:justify-between gap-5"
      >
        <div class="min-w-0">
          <div
            class="inline-flex items-center gap-2 mb-3 px-4 py-2 rounded-full bg-primary-blue/5 border border-primary-blue/10"
          >
            <span class="w-2 h-2 rounded-full bg-primary-red"></span>
            <span
              class="text-xs font-semibold uppercase tracking-wide text-primary-blue"
            >
              Manage
            </span>
          </div>

          <div class="flex items-center gap-3">
            <h1 class="text-3xl md:text-4xl font-bold text-black">
              {{ title }}
            </h1>
            <span
              v-if="itemCount !== undefined"
              class="px-2.5 py-1 rounded-full bg-black/[0.04] text-xs font-bold text-black/50 shrink-0"
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

  <!-- Delete confirmation modal (opt-in via withDelete) -->
  <Transition
    enter-active-class="transition-all duration-300 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-all duration-200 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="withDelete && deleteTarget"
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

          <h2 class="text-xl font-bold text-black mb-2">
            Delete {{ resourceLabel || title }}
          </h2>
          <p class="text-sm text-black/50 leading-relaxed mb-1">
            Are you sure you want to delete
            <span class="font-semibold text-black">
              {{ deleteTarget?.[deleteNameKey] }}
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
              class="flex-1 py-3 rounded-full text-sm font-semibold text-black/60 bg-black/[0.04] hover:bg-black/[0.06] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
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
