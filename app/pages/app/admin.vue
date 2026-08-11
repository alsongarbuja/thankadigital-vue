<script setup lang="ts">
definePageMeta({
  layout: "admin",
});

useSeoMeta({
  title: "Thanka Digital - Admin Dashboard",
});
</script>

<template>
  <div>
    <div
      class="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-primary-blue/5 border border-primary-blue/10"
    >
      <span class="w-2 h-2 rounded-full bg-primary-red"></span>
      <span class="text-xs font-semibold uppercase tracking-wide text-primary-blue">
        Dashboard
      </span>
    </div>

    <h1 class="text-3xl md:text-4xl font-bold text-black mb-2">
      Welcome back
      <span class="text-primary-red">.</span>
    </h1>
    <p class="text-sm text-black/50 max-w-md">
      This is your admin control panel. Pick a section from the sidebar to get started.
    </p>
  </div>
</template>
