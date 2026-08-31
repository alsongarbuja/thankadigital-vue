<script setup lang="ts">
import { ref } from "vue";
import FormWrapper from "~/components/wrappers/FormWrapper.vue";
import type { IUserScheme } from "~~/types/user";
import UserFormFields from "../_components/UserFormFields.vue";

definePageMeta({
  layout: false,
});

useSeoMeta({
  title: "Dashboard - Edit User",
});

const route = useRoute();
const id = computed(() => route.params.id);

const {
  data: existingUser,
  pending,
  refresh,
} = await useFetch<IUserScheme>(`/api/users/${id.value}`);

const form = ref<IUserScheme>({
  name: "",
  avatarUrl: "",
  email: "",
  passPin: 0,
  isLoggable: false,
  teamId: "",
});

watch(
  existingUser,
  (user) => {
    if (user) {
      form.value = {
        ...user,
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
    await $fetch(`/api/users/${id.value}/edit`, {
      method: "PATCH",
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
    :is-editing="true"
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
