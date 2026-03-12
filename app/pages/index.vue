<script setup lang="ts">
import HeroSection from "~/components/home/HeroSection.vue";
import ProjectsSection from "~/components/ProjectSection.vue";

const { data: projects } = await useFetch<IProjectScheme[]>("/api/projects");

useSeoMeta({
  title: "Thanka Digital",
  description:
    "IT company based in Nepal. We provide businesses and individuals with robust and scalable products that will help them move to the next level of their business growth. We also provide other services including but not limited to digital marketing, SEO, Content writing, and much more.",
});
</script>

<template>
  <main>
    <HeroSection />

    <ProjectsSection :projects="projects" />
  </main>
</template>
