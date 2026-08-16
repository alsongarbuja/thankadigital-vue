<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    resourceLabel: string;
    isEditing?: boolean;
    backTo: string;
    description?: string;
    isSubmitting?: boolean;
    showDelete?: boolean;
    fullWidth?: boolean;
  }>(),
  {
    isEditing: false,
    description: "",
    isSubmitting: false,
    showDelete: false,
    isDeleting: false,
    fullWidth: false,
  },
);

const emit = defineEmits<{
  submit: [];
}>();
</script>

<template>
  <NuxtLayout name="admin">
    <div
      class="flex flex-col gap-8"
      :class="fullWidth ? 'max-w-none' : 'max-w-3xl'"
    >
      <!-- Header -->
      <div class="flex flex-col gap-5">
        <div class="flex items-center justify-between gap-4">
          <NuxtLink
            :to="backTo"
            class="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/[0.03] hover:bg-primary-blue/5 text-xs font-semibold uppercase tracking-wide text-black/60 hover:text-primary-blue transition-all duration-300"
          >
            <span
              class="group-hover:-translate-x-1 transition-transform duration-300"
            >
              &larr;
            </span>
            Back to {{ resourceLabel }}s
          </NuxtLink>
        </div>

        <div>
          <h4 class="text-3xl md:text-4xl font-bold text-black">
            {{ isEditing ? "Edit" : "Add" }} {{ resourceLabel }}
            <span class="text-primary-red">.</span>
          </h4>
          <p v-if="description" class="mt-2 text-sm text-black/50 max-w-md">
            {{ description }}
          </p>
        </div>
      </div>

      <form
        @submit.prevent="emit('submit')"
        class="rounded-2xl bg-white border border-black/5 shadow-sm shadow-black/5 p-6 sm:p-8 flex flex-col gap-6"
      >
        <slot />

        <div
          class="flex items-center justify-end gap-3 pt-4 border-t border-black/5"
        >
          <NuxtLink
            :to="backTo"
            class="px-5 py-3 rounded-full text-sm font-semibold text-black/50 hover:text-black hover:bg-black/[0.03] transition-all duration-300"
          >
            Cancel
          </NuxtLink>

          <slot name="footer-actions" />

          <button
            type="submit"
            :disabled="isSubmitting"
            class="group inline-flex items-center gap-2 pl-6 pr-3 py-3 rounded-full bg-primary-blue text-white text-sm font-semibold shadow-sm shadow-primary-blue/20 hover:bg-primary-red hover:shadow-md hover:shadow-primary-red/20 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
          >
            <span
              v-if="isSubmitting"
              class="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin"
            ></span>
            <template v-else>
              {{ isEditing ? "Save Changes" : `Create ${resourceLabel}` }}
              <span
                class="group-hover:translate-x-0.5 transition-transform duration-300"
              >
                &rarr;
              </span>
            </template>
          </button>
        </div>
      </form>
    </div>
  </NuxtLayout>
</template>
