<script setup lang="ts">
import MaxWidthWrapper from "~/wrappers/MaxWidthWrapper.vue";

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
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <div
          v-for="(project, index) in projects"
          :key="project.slug"
          class="group relative rounded-3xl bg-white shadow-md shadow-black/5 border border-black/5 overflow-hidden hover:shadow-2xl hover:shadow-primary-blue/10 hover:-translate-y-1.5 transition-all duration-500 cursor-pointer"
          :class="index === 0 ? 'sm:col-span-2 lg:col-span-2' : ''"
        >
          <!-- Glow ring on hover -->
          <div
            class="absolute -inset-px rounded-3xl bg-linear-to-br from-primary-blue/0 via-primary-blue/0 to-primary-red/0 group-hover:from-primary-blue/20 group-hover:to-primary-red/20 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none -z-10"
          ></div>

          <div
            class="relative w-full overflow-hidden bg-black/5"
            :class="index === 0 ? 'aspect-video' : 'aspect-4/3'"
          >
            <NuxtImg
              :src="project.thumbnail"
              :alt="project.name"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            />

            <!-- Gradient wash for legibility + hover depth -->
            <div
              class="absolute inset-0 bg-linear-to-t from-black/50 via-black/0 to-black/0 group-hover:from-primary-blue/70 group-hover:via-primary-blue/10 transition-all duration-500"
            ></div>

            <!-- Floating index badge -->
            <span
              class="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[11px] font-bold text-primary-blue shadow-sm"
            >
              {{ String(index + 1).padStart(2, "0") }}
            </span>

            <!-- Centered glass CTA, revealed on hover -->
            <div
              class="absolute inset-0 flex items-center justify-center opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500"
            >
              <div
                class="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/90 backdrop-blur-md shadow-lg"
              >
                <span class="text-xs font-semibold text-primary-blue">
                  View Project
                </span>
                <span
                  class="w-6 h-6 rounded-full bg-primary-blue text-white flex items-center justify-center text-[10px]"
                >
                  &rarr;
                </span>
              </div>
            </div>
          </div>

          <div class="p-6 flex items-center justify-between gap-4">
            <div>
              <span
                class="inline-block mb-2 px-2.5 py-1 rounded-full bg-primary-red/10 text-primary-red text-[10px] font-semibold uppercase tracking-wide"
              >
                {{ index === 0 ? "Featured" : "Case Study" }}
              </span>
              <p
                class="font-bold text-black leading-snug"
                :class="index === 0 ? 'text-2xl md:text-3xl' : 'text-xl'"
              >
                {{ project.name }}
              </p>
            </div>
            <div
              class="w-10 h-10 rounded-full bg-primary-blue/5 flex items-center justify-center text-primary-blue shrink-0 group-hover:bg-primary-blue group-hover:text-white group-hover:-rotate-45 transition-all duration-300"
            >
              <span class="text-sm">&rarr;</span>
            </div>
          </div>
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
        <button
          class="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-black/10 bg-white shadow-sm hover:shadow-md hover:border-primary-blue/30 transition-all duration-300 cursor-pointer"
        >
          <span class="text-sm font-semibold text-black">
            View All Projects
          </span>
          <span class="text-sm text-primary-red">&rarr;</span>
        </button>
      </div>
    </section>
  </MaxWidthWrapper>
</template>
