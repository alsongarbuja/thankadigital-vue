<script setup lang="ts">
import { ref } from "vue";

useSeoMeta({
  title: "Thanka Digital - Admin Login",
});

definePageMeta({
  layout: false,
});

const userId = ref("");
const password = ref("");
const isLoading = ref(false);
const error = ref("");

const handleLogin = async () => {
  error.value = "";

  if (!userId.value || !password.value) {
    error.value = "Please fill in both fields.";
    return;
  }

  isLoading.value = true;

  // TODO: wire this up to the real auth endpoint.
  await new Promise((resolve) => setTimeout(resolve, 900));

  isLoading.value = false;
  navigateTo("/app/admin");
};
</script>

<template>
  <main
    class="min-h-screen relative flex items-center justify-center px-4 py-8 overflow-hidden"
  >
    <div
      class="absolute -top-24 -right-24 w-95 h-95 rounded-full bg-primary-blue/10 blur-3xl pointer-events-none"
    ></div>
    <div
      class="absolute -bottom-24 -left-24 w-70 h-70 rounded-full bg-primary-red/10 blur-3xl pointer-events-none"
    ></div>

    <NuxtLink
      to="/"
      class="group absolute top-6 left-4 sm:top-8 sm:left-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/3 hover:bg-primary-blue/5 text-xs font-semibold uppercase tracking-wide text-black/60 hover:text-primary-blue transition-all duration-300"
    >
      <span class="group-hover:-translate-x-1 transition-transform duration-300">
        &larr;
      </span>
      Back to Site
    </NuxtLink>

    <div class="relative z-10 w-full max-w-md">
      <div class="flex flex-col items-center text-center mb-2">
        <div class="w-12 h-12 flex items-center justify-center mb-2">
          <NuxtImg src="icons/thanka_logo.svg" class="h-6 w-6" />
        </div>
        <div
          class="inline-flex items-center gap-2 mb-5 px-4 py-2 rounded-full bg-primary-blue/5 border border-primary-blue/10"
        >
          <span class="w-2 h-2 rounded-full bg-primary-red"></span>
          <span class="text-xs font-semibold uppercase tracking-wide text-primary-blue">
            Admin Access
          </span>
        </div>
        <h4 class="text-3xl sm:text-4xl font-bold text-black">
          Welcome Back
          <span class="text-primary-red">.</span>
        </h4>
      </div>

      <div
        class="rounded-3xl bg-white shadow-xl shadow-black/5 border border-black/5 p-8 sm:p-10"
      >
        <form @submit.prevent="handleLogin" class="flex flex-col gap-4">
          <InputField
            v-model="userId"
            label="User ID"
            placeholder="Your user id"
            autocomplete="username"
            name="userid"
          />

          <InputField
            v-model="password"
            label="PIN"
            type="password"
            placeholder="Enter your PIN"
            inputmode="numeric"
            autocomplete="current-password"
            name="pin"
          />

          <p v-if="error" class="text-xs text-primary-red px-1">
            {{ error }}
          </p>

          <label
            class="flex mt-1 items-center gap-2 text-xs text-black/50 cursor-pointer select-none"
          >
            <input type="checkbox" class="accent-primary-blue w-3.5 h-3.5" />
            Remember me
          </label>

          <button
            type="submit"
            :disabled="isLoading"
            class="group mt-2 inline-flex items-center justify-center gap-2 py-3.5 rounded-full bg-primary-blue text-white text-sm font-semibold uppercase tracking-wide shadow-sm shadow-primary-blue/20 hover:bg-primary-red hover:shadow-md hover:shadow-primary-red/20 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
          >
            <span
              v-if="isLoading"
              class="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin"
            ></span>
            <template v-else>
              Sign In
              <span class="group-hover:translate-x-0.5 transition-transform duration-300">
                &rarr;
              </span>
            </template>
          </button>
        </form>
      </div>

      <p class="mt-8 text-center text-xs text-black/30">
        &copy; 2026 Thanka Digital. Internal use only.
      </p>
    </div>
  </main>
</template>
