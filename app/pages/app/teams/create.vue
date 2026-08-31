<script setup lang="ts">
import { ref } from "vue";
import FormWrapper from "~/components/wrappers/FormWrapper.vue";
import type { ITeamScheme } from "~~/types/team";
import TeamFormFields from "./_components/TeamFormFields.vue";

definePageMeta({
  layout: false,
});

useSeoMeta({
  title: "Dashboard - New Team",
});

const form = ref<ITeamScheme>({
  name: "",
  description: "",
});

const isSubmitting = ref(false);
const submitError = ref("");

const handleSubmit = async () => {
  isSubmitting.value = true;
  submitError.value = "";

  try {
    await $fetch("/api/teams/create", {
      method: "POST",
      body: form.value,
    });
    navigateTo("/app/teams");
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
    resource-label="Team"
    :is-editing="false"
    back-to="/app/teams"
    description="Details shown on the public teams page and its case study."
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

    <TeamFormFields v-model="form" />
  </FormWrapper>
</template>
