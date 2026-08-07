<script setup lang="ts">
import MaxWidthWrapper from "~/wrappers/MaxWidthWrapper.vue";

useSeoMeta({
  title: "Thanka Digital - Projects",
  description:
    "See projects we have done. We have worked with clients from various industries.",
});

const { data: projects } = await useFetch<IProjectScheme[]>("/api/projects");

// Cycles through a zig-zag 7/5 split so the grid never falls into a flat,
// uniform layout as more projects are added.
const pattern = [
  { col: "lg:col-span-7", aspect: "aspect-[4/3]" },
  { col: "lg:col-span-5", aspect: "aspect-square" },
  { col: "lg:col-span-5", aspect: "aspect-square" },
  { col: "lg:col-span-7", aspect: "aspect-[4/3]" },
];

const getLayout = (index: number) => pattern[index % pattern.length];
</script>

<template>
  <main class="min-h-screen pt-28 md:pt-36 pb-24 relative overflow-hidden">
    <MaxWidthWrapper>
      <div
        class="absolute -top-24 -right-24 w-95 h-95 rounded-full bg-primary-blue/10 blur-3xl pointer-events-none"
      ></div>
      <div
        class="absolute top-96 -left-24 w-70 h-70 rounded-full bg-primary-red/10 blur-3xl pointer-events-none"
      ></div>

      <section class="relative z-10">
        <div class="mb-4">
          <div
            class="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-primary-blue/5 border border-primary-blue/10"
          >
            <span class="w-2 h-2 rounded-full bg-primary-red"></span>
            <span
              class="text-xs font-semibold uppercase tracking-wide text-primary-blue"
            >
              Project Gallery
            </span>
          </div>
          <h1 class="text-4xl md:text-6xl font-bold leading-[1.05] text-black">
            The Matrix
            <span class="text-primary-red">.</span>
          </h1>
        </div>

        <!-- Empty state -->
        <div
          v-if="projects?.length === 0"
          class="text-center py-24 rounded-2xl bg-black/2 border border-dashed border-black/10"
        >
          <p class="text-base text-black/50 mb-3">No projects to show yet.</p>
          <p
            class="text-xs font-semibold uppercase tracking-widest text-primary-blue"
          >
            New builds coming soon
          </p>
        </div>

        <!-- Project grid -->
        <div v-else class="grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-10">
          <div
            v-for="(project, index) in projects"
            :key="project.slug"
            :class="[getLayout(index)?.col, getLayout(index)?.aspect]"
          >
            <ProjectCard
              :slug="project.slug"
              :name="project.name"
              :image="project.thumbnail"
              :type="project.tags?.[0]"
            />
          </div>
        </div>
      </section>
    </MaxWidthWrapper>
  </main>
</template>
