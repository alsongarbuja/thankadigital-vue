<script setup lang="ts">
import ConnectSection from "~/components/home/ConnectSection.vue";
import HeroSection from "~/components/home/HeroSection.vue";
import ProjectsSection from "~/components/home/ProjectSection.vue";
import ServiceSection from "~/components/home/ServiceSection.vue";
import TechSection from "~/components/home/TechSection.vue";

const { data: projects } = await useFetch<IProjectScheme[]>("/api/projects");

useSeoMeta({
  title: "Thanka Digital",
  description:
    "IT company based in Nepal. We provide businesses and individuals with robust and scalable products that will help them move to the next level of their business growth. We also provide other services including but not limited to digital marketing, SEO, Content writing, and much more.",
});
</script>

<template>
  <HeroSection />
  <ProjectsSection :projects="projects" />
  <ServiceSection />
  <TechSection />
  <ConnectSection />
</template>
