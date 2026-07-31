<script setup lang="ts">
import MaxWidthWrapper from "~/wrappers/MaxWidthWrapper.vue";

useSeoMeta({
  title: "Thanka Digital - Projects",
  description:
    "See projects we have done. We have worked with clients from various industries.",
});

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

const pattern = [
  {
    col: "lg:col-span-7",
    aspect: "aspect-[4/3]",
    title: "text-2xl md:text-3xl",
  },
  { col: "lg:col-span-5", aspect: "aspect-square", title: "text-xl" },
  { col: "lg:col-span-5", aspect: "aspect-square", title: "text-xl" },
  {
    col: "lg:col-span-7",
    aspect: "aspect-[4/3]",
    title: "text-2xl md:text-3xl",
  },
];

const getLayout = (index: number) => pattern[index % pattern.length];
</script>

<template>
  <main class="min-h-screen pt-28 md:pt-36 pb-24 relative overflow-hidden">
    <MaxWidthWrapper>
      <div
        class="absolute -top-24 -right-24 w-[380px] h-[380px] rounded-full bg-[#333D79]/10 blur-3xl pointer-events-none"
      ></div>
      <div
        class="absolute top-96 -left-24 w-[280px] h-[280px] rounded-full bg-[#E8343E]/10 blur-3xl pointer-events-none"
      ></div>

      <section class="relative z-10">
        <div
          class="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14"
        >
          <div>
            <div
              class="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-[#333D79]/5 border border-[#333D79]/10"
            >
              <span class="w-2 h-2 rounded-full bg-[#E8343E]"></span>
              <span
                class="text-xs font-semibold uppercase tracking-wide text-[#333D79]"
              >
                Project Gallery
              </span>
            </div>
            <h1
              class="text-4xl md:text-6xl font-bold leading-[1.05] text-black"
            >
              The Matrix
              <span class="text-[#E8343E]">.</span>
            </h1>
          </div>
          <p
            class="max-w-sm text-sm md:text-base text-black/60 leading-relaxed"
          >
            A working record of the products, platforms, and tools we've shipped
            for clients across industries.
          </p>
        </div>

        <!-- Empty state -->
        <div
          v-if="projects.length === 0"
          class="text-center py-24 rounded-2xl bg-black/[0.02] border border-dashed border-black/10"
        >
          <p class="text-base text-black/50 mb-3">No projects to show yet.</p>
          <p
            class="text-xs font-semibold uppercase tracking-widest text-[#333D79]"
          >
            New builds coming soon
          </p>
        </div>

        <!-- Project grid -->
        <div v-else class="grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-16">
          <NuxtLink
            v-for="(project, index) in projects"
            :key="project.id"
            :to="`/projects/${project.slug}`"
            class="group"
            :class="getLayout(index)?.col"
          >
            <div
              class="relative w-full overflow-hidden rounded-2xl bg-black/5"
              :class="getLayout(index)?.aspect"
            >
              <NuxtImg
                :src="project.image"
                :alt="project.title"
                class="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              ></div>
              <div
                class="absolute top-4 left-4 flex flex-wrap gap-2 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500"
              >
                <span
                  v-for="tag in project.tags"
                  :key="tag"
                  class="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[10px] font-semibold uppercase tracking-wide text-[#333D79]"
                >
                  {{ tag }}
                </span>
              </div>
            </div>

            <div class="pt-5 flex items-center justify-between gap-4">
              <h2
                class="font-bold text-black leading-tight group-hover:text-[#E8343E] transition-colors duration-300"
                :class="getLayout(index)?.title"
              >
                {{ project.title }}
              </h2>
              <span
                class="text-sm group-hover:translate-x-1 transition-transform duration-300 shrink-0"
              >
                &rarr;
              </span>
            </div>
          </NuxtLink>
        </div>
      </section>
    </MaxWidthWrapper>
  </main>
</template>
