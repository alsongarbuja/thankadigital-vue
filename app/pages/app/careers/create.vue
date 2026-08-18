<script setup lang="ts">
import { ref } from "vue";
import FormWrapper from "~/components/wrappers/FormWrapper.vue";
import type { ICareerScheme } from "~~/types/career";
import CareerFormFields from "./_components/CareerFormFields.vue";

definePageMeta({
  layout: false,
});

useSeoMeta({
  title: "Dashboard - New Career",
});

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

const isSubmitting = ref(false);
const submitError = ref("");

const handleSubmit = async () => {
  isSubmitting.value = true;
  submitError.value = "";

  try {
    await $fetch("/api/careers/create", {
      method: "POST",
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
    :is-editing="false"
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
