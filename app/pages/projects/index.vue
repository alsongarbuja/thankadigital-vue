<script setup lang="ts">
useSeoMeta({
  title: "Thanka Digital - Projects",
  description:
    "See projects we have done. We have worked with clients from various industries.",
});

import { ref } from "vue";

const projects = [
  {
    id: 1,
    slug: "adversary-ai",
    title: "Adversary AI",
    image: "/project-ai.jpg",
    tags: ["Machine Learning", "Python"],
  },
  {
    id: 2,
    slug: "resort-sync",
    title: "Resort Sync",
    image: "/project-resort.jpg",
    tags: ["Full Stack", "Nuxt 3"],
  },
  {
    id: 3,
    slug: "secret-share",
    title: "Secret Share",
    image: "/project-crypto.jpg",
    tags: ["Security", "C"],
  },
  {
    id: 4,
    slug: "badminton-portal",
    title: "Redhawk Club",
    image: "/project-badminton.jpg",
    tags: ["Community", "Web"],
  },
];
</script>
<template>
  <main
    class="bg-[#F9F9F7] min-h-screen pt-32 pb-24 px-6 md:px-16 overflow-hidden relative"
  >
    <div
      class="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
      style="
        background-image:
          linear-gradient(#000 1px, transparent 1px),
          linear-gradient(90deg, #000 1px, transparent 1px);
        background-size: 80px 80px;
      "
    ></div>

    <section class="relative z-10">
      <div class="mb-16 border-b border-black/10 pb-12">
        <span
          class="font-mono text-[10px] uppercase tracking-[0.4em] text-gray-400 mb-6 block"
        >
          05 // Project Gallery
        </span>
        <h1
          class="text-[10vw] font-black uppercase tracking-tighter leading-[0.8] text-black"
        >
          The
          <br />
          Matrix.
        </h1>
      </div>

      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-px bg-black/10 border border-black/10"
      >
        <article
          v-for="project in projects"
          :key="project.id"
          class="group relative bg-[#F9F9F7] overflow-hidden aspect-[4/3] lg:aspect-[16/10]"
        >
          <NuxtLink
            :to="`/projects/${project.slug}`"
            class="block w-full h-full"
          >
            <div class="relative w-full h-full overflow-hidden">
              <div
                class="absolute inset-0 z-20 opacity-20 grain-overlay pointer-events-none"
              ></div>

              <div
                class="absolute inset-0 z-10 bg-black/5 group-hover:bg-transparent transition-colors duration-500"
              ></div>

              <NuxtImg
                :src="project.image"
                class="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-1000 ease-out"
              />
            </div>

            <div
              class="absolute bottom-0 left-0 w-full z-30 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500"
            >
              <div class="flex justify-between items-end">
                <div>
                  <span
                    class="font-mono text-[9px] uppercase tracking-[0.3em] text-gray-400 group-hover:text-red-600 transition-colors"
                  >
                    {{ project.tags[0] }} // 2026
                  </span>
                  <h2
                    class="text-3xl md:text-5xl font-black uppercase tracking-tighter text-black mt-2"
                  >
                    {{ project.title }}
                  </h2>
                </div>
                <div class="hidden md:block">
                  <span
                    class="text-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    →
                  </span>
                </div>
              </div>
            </div>

            <div class="absolute top-6 left-6 z-30">
              <span
                class="font-mono text-[10px] border border-black/20 px-2 py-1 group-hover:border-black transition-colors"
              >
                ID:0{{ project.id }}
              </span>
            </div>
          </NuxtLink>
        </article>
      </div>
    </section>
  </main>
</template>

<style scoped>
.grain-overlay {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAUVBMVEWFhYWDg4N3d3dtbW17e3t1dXWBgYGHh4d5eXlzc3OLi4ubm5uVlZWPj4+NjY1jY2NDQ0N4eHh0dHR2dnZubm5vbm5nZ2dycnJzc3N4eHh0dHR2dnZ6uPjUAAAAB3RSTlMAAQIDBAUGBwgICAn3elYAAAAJcEhZcwAACxMAAAsTAQCanBgAAAGbSURBVDjHnZZRi8MgEEbjS9S0xpWq7v//ofdrAnu9Xm8v96BwnvE6Mw56v/+p9f0fGvP7f6Xp9Xp9v99v7/f7+329Xm/v9/v7/f59vV5v7/f7+329Xm/v9/v7/f59vV5v7/f7+329Xm/v9/v7/f59vV5v7/f7+329Xm/v9/v7/f59vV5v7/f7+329Xm/v9/v7/f59vV5v7/f7+329Xm/v9/v7/f59vV5v7/f7+329Xm/v9/v7/f59vV5v7/f7+329Xm/v9/v7/f59vV5v7/f7+329Xm/v9/v7/f59vV5v7/f7+329Xm/v9/v7/f59vV5v7/f7+329Xm/v9/v7/f59vV5v7/f7+329Xm/v9/v7/f59vV5v7/f7+329Xm/v9/v7/f6fXq/X6/X693v/A5iM8yN4N99uAAAAAElFTkSuQmCC");
  background-repeat: repeat;
}
</style>
