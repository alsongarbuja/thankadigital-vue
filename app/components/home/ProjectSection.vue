<script setup lang="ts">
import MaxWidthWrapper from "~/wrappers/MaxWidthWrapper.vue";
import type { IProjectScheme } from "~~/types/project";

interface Props {
  projects: IProjectScheme[] | undefined;
}

defineProps<Props>();
</script>

<template>
  <MaxWidthWrapper>
    <section class="py-20 md:py-28">
      <div
        class="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14"
      >
        <div>
          <div
            class="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-primary-blue/5 border border-primary-blue/10"
          >
            <span class="w-2 h-2 rounded-full bg-primary-red"></span>
            <span
              class="text-xs font-semibold uppercase tracking-wide text-primary-blue"
            >
              Selected Work
            </span>
          </div>
          <h2 class="text-4xl md:text-5xl font-bold text-black">Projects</h2>
        </div>
        <p class="max-w-sm text-sm md:text-base text-black/60 leading-relaxed">
          A few of the products we've helped design, build, and launch.
        </p>
      </div>

      <div
        v-if="projects && projects.length > 0"
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <div
          v-for="(project, index) in projects"
          :key="project.slug"
          class="w-full"
          :class="
            index === 0
              ? 'sm:col-span-2 lg:col-span-2 aspect-video'
              : 'aspect-4/3'
          "
        >
          <ProjectCard
            :slug="project.slug"
            :name="project.name"
            :image="project.thumbnail"
            :type="(project as any).category ?? (project as any).tags?.[0]"
          />
        </div>
      </div>

      <div
        v-else
        class="text-center py-24 rounded-2xl bg-black/2 border border-dashed border-black/10"
      >
        <p class="text-sm uppercase tracking-wide text-black/40">
          No projects to show yet
        </p>
      </div>

      <div class="mt-14 flex justify-center">
        <NuxtLink
          to="/projects"
          class="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-black/10 bg-white shadow-sm hover:shadow-md hover:border-primary-blue/30 transition-all duration-300 cursor-pointer"
        >
          <span class="text-sm font-semibold text-black">
            View All Projects
          </span>
          <span class="text-sm text-primary-red">&rarr;</span>
        </NuxtLink>
      </div>
    </section>
  </MaxWidthWrapper>
</template>
