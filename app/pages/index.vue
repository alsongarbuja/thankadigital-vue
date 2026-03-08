<script setup lang="ts">
import { projects } from "~/utils/datas/projects";
import ProjectsSection from "~/components/ProjectSection.vue";

useSeoMeta({
  title: "Thanka Digital",
  description:
    "IT company based in Nepal. We provide businesses and individuals with robust and scalable products that will help them move to the next level of their business growth. We also provide other services including but not limited to digital marketing, SEO, Content writing, and much more.",
});
</script>

<template>
  <main>
    <section class="flex flex-col items-center justify-center h-[70dvh]">
      <h1>Why Limit?</h1>
      <h2>When you can go beyond with us.</h2>
    </section>

    <ProjectsSection :projects="projects" />
  </main>
</template>
