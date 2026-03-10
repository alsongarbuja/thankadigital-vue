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
    <section class="relative min-h-[70vh] flex flex-col bg-[#fafafa] px-8">
      <div
        class="absolute inset-0 opacity-[0.03] pointer-events-none grain-overlay"
      ></div>

      <div class="container mx-auto px-4 z-10">
        <h1 class="">Why Limit?</h1>

        <div class="border-t border-black/10 pt-2">
          <h2 class="text-sm uppercase tracking-widest text-gray-500">
            When you can go beyond with us.
          </h2>
        </div>
      </div>

      <button
        class="absolute bottom-20 right-10 md:right-32 group flex items-center gap-4"
      >
        <div
          class="w-16 h-16 border border-black rounded-full flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-500"
        >
          <span class="text-xl">→</span>
        </div>
        <span class="uppercase tracking-widest text-xs font-bold">
          Start Journey
        </span>
      </button>
    </section>

    <ProjectsSection :projects="projects" />
  </main>
</template>
