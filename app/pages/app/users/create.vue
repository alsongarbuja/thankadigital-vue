<script setup lang="ts">
import { ref } from "vue";
import FormWrapper from "~/components/wrappers/FormWrapper.vue";
import type { IUserScheme } from "~~/types/user";
import UserFormFields from "./_components/UserFormFields.vue";

definePageMeta({
  layout: false,
});

useSeoMeta({
  title: "Dashboard - New User",
});

const form = ref<IUserScheme>({
  name: "",
  email: "",
  avatarUrl: "",
  isLoggable: false,
  passPin: 0,
  teamId: "",
});

const isSubmitting = ref(false);
const submitError = ref("");

const handleSubmit = async () => {
  isSubmitting.value = true;
  submitError.value = "";

  try {
    await $fetch("/api/users/create", {
      method: "POST",
      body: form.value,
    });
    navigateTo("/app/users");
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
    resource-label="User"
    :is-editing="false"
    back-to="/app/users"
    description="Details shown on the public users page and its case study."
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

    <UserFormFields v-model="form" />
  </FormWrapper>
</template>
