<script setup lang="ts">
import { ref, computed } from "vue";

const props = withDefaults(
  defineProps<{
    modelValue: string;
    label: string;
    type?: string;
    placeholder?: string;
    error?: string;
    autocomplete?: string;
    inputmode?:
      | "text"
      | "numeric"
      | "email"
      | "tel"
      | "search"
      | "none"
      | "decimal"
      | "url";
    id?: string;
    name: string;
  }>(),
  {
    type: "text",
    placeholder: "",
    error: "",
    autocomplete: "off",
    inputmode: "text",
    id: undefined,
  }
);

const emit = defineEmits<{
  "update:modelValue": [value: string];
}>();

const showValue = ref(false);
const isPasswordField = computed(() => props.type === "password");
const resolvedType = computed(() =>
  isPasswordField.value ? (showValue.value ? "text" : "password") : props.type
);

const fieldId = computed(
  () => props.id ?? `field-${props.label.toLowerCase().replace(/\s+/g, "-")}`
);
</script>

<template>
  <div class="flex flex-col gap-1.5">
    <label
      :for="fieldId"
      class="text-xs font-semibold uppercase tracking-wide text-black/40 px-1"
    >
      {{ label }}
    </label>

    <div class="relative">
      <input
        :id="fieldId"
        :value="modelValue"
        @input="
          emit('update:modelValue', ($event.target as HTMLInputElement).value)
        "
        :type="resolvedType"
        :placeholder="placeholder"
        :autocomplete="autocomplete"
        :inputmode="inputmode"
        class="w-full bg-black/3 rounded-xl px-4 py-3.5 text-sm outline-none focus:bg-primary-blue/5 focus:ring-2 focus:ring-primary-blue/20 transition-all duration-300"
        :class="[
          isPasswordField ? 'pr-12 tracking-widest' : '',
          error ? 'ring-2 ring-primary-red/30 bg-primary-red/5' : '',
        ]"
      />

      <button
        v-if="isPasswordField"
        type="button"
        @click="showValue = !showValue"
        class="absolute right-1.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-lg flex items-center justify-center text-black/40 hover:text-primary-blue hover:bg-primary-blue/5 transition-colors duration-300 cursor-pointer"
        :aria-label="showValue ? 'Hide value' : 'Show value'"
      >
        <svg
          v-if="showValue"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="w-4 h-4"
        >
          <path d="M3 3l18 18" />
          <path d="M10.6 10.6a2 2 0 0 0 2.8 2.8" />
          <path
            d="M9.4 5.5A9.8 9.8 0 0 1 12 5c5 0 9 4 10 7a13 13 0 0 1-3.1 4.2M6.2 6.9A13 13 0 0 0 2 12c1 3 5 7 10 7 1.3 0 2.5-.2 3.6-.6"
          />
        </svg>
        <svg
          v-else
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="w-4 h-4"
        >
          <path d="M2 12c1-3 5-7 10-7s9 4 10 7c-1 3-5 7-10 7s-9-4-10-7Z" />
          <circle cx="12" cy="12" r="2.5" />
        </svg>
      </button>
    </div>

    <p v-if="error" class="text-xs text-primary-red px-1">
      {{ error }}
    </p>
  </div>
</template>
