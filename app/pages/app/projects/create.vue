<script setup lang="ts">
import { ref } from "vue";
import FormWrapper from "~/components/wrappers/FormWrapper.vue";
import type { IProjectScheme } from "~~/types/project";
import ProjectFormFields from "./_components/ProjectFormFields.vue";

definePageMeta({
  layout: false,
});

useSeoMeta({
  title: "Dashboard - New Project",
});

const form = ref<IProjectScheme>({
  name: "",
  slug: "",
  thumbnail: "",
  liveLink: "",
  githubLink: "",
  details: "",
  tags: [],
  summary: "",
  status: "draft",
  isShowcase: false,
});

const isSubmitting = ref(false);
const submitError = ref("");

const handleSubmit = async () => {
  isSubmitting.value = true;
  submitError.value = "";

  try {
    await $fetch("/api/projects/create", {
      method: "POST",
      body: form.value,
    });
    navigateTo("/app/projects");
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
    resource-label="Project"
    :is-editing="false"
    back-to="/app/projects"
    description="Details shown on the public projects page and its case study."
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

    <ProjectFormFields v-model="form" />
  </FormWrapper>
</template>
