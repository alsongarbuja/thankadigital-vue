<script setup lang="ts">
import { ref } from "vue";
import FormWrapper from "~/components/wrappers/FormWrapper.vue";
import type { ICareerScheme } from "~~/types/career";
import CareerFormFields from "../_components/CareerFormFields.vue";

definePageMeta({
  layout: false,
});

useSeoMeta({
  title: "Dashboard - Edit Career",
});

const route = useRoute();
const id = computed(() => route.params.id);

const {
  data: existingCareer,
  pending,
  refresh,
} = await useFetch<ICareerScheme>(`/api/careers/${id.value}`);

const form = ref<ICareerScheme>({
  title: "",
  experience: "",
  requirements: [],
  responsibilities: [],
  salary_max: 0,
  salary_min: 0,
  type: "on-site",
  status: "draft",
});

watch(
  existingCareer,
  (career) => {
    if (career) {
      form.value = {
        ...career,
        responsibilities: [...career.responsibilities],
        requirements: [...career.requirements],
      };
    }
  },
  { immediate: true },
);

const isSubmitting = ref(false);
const submitError = ref("");

const handleSubmit = async () => {
  isSubmitting.value = true;
  submitError.value = "";

  try {
    await $fetch(`/api/careers/${id.value}/edit`, {
      method: "PATCH",
      body: form.value,
    });
    navigateTo("/app/careers");
  } catch (err: any) {
    submitError.value =
      err?.data?.statusMessage ?? "Something went wrong. Please try again.";
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<template>
  <FormWrapper
    resource-label="Career"
    :is-editing="true"
    back-to="/app/careers"
    description="Details shown on the public careers page and its case study."
    full-width
    :is-submitting="isSubmitting"
    @submit="handleSubmit"
  >
    <p
      v-if="submitError"
      class="text-sm text-primary-red bg-primary-red/5 rounded-xl px-4 py-3"
    >
      {{ submitError }}
    </p>

    <CareerFormFields v-model="form" />
  </FormWrapper>
</template>
