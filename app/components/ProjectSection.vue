<script setup lang="ts">
interface Props {
  projects: IProjectScheme[];
}

defineProps<Props>();
</script>

<template>
  <section class="py-8">
    <div class="px-8 mx-auto">
      <div class="py-8 columns-1 md:columns-2 lg:columns-3">
        <div
          v-for="project in projects"
          :key="project.slug"
          :class="[
            'group break-inside-avoid mb-4 relative overflow-hidden rounded-2xl transition-all duration-300 cursor-pointer',
          ]"
        >
          <!-- Project Image with Full Coverage -->
          <img
            :src="project.thumbnail"
            :alt="project.name"
            class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />

          <!-- Dark Overlay on Hover -->
          <div
            class="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />

          <!-- Project Title and Action Buttons - Appear on Hover -->
          <div
            class="absolute inset-0 flex flex-col justify-end items-center gap-4 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <!-- Project Name -->
            <h3
              class="text-xl sm:text-2xl md:text-3xl font-bold text-white text-center"
            >
              {{ project.name }}
            </h3>

            <!-- Action Buttons -->
            <div class="flex flex-wrap justify-center gap-3 w-full">
              <a
                v-if="project.liveLink"
                :href="project.liveLink"
                target="_blank"
                rel="noopener noreferrer"
                class="px-4 sm:px-6 py-2 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors duration-200 text-xs sm:text-sm"
              >
                View Live
              </a>
              <a
                v-if="project.githubLink"
                :href="project.githubLink"
                target="_blank"
                rel="noopener noreferrer"
                class="px-4 sm:px-6 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-500 transition-colors duration-200 text-xs sm:text-sm"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div v-if="projects.length === 0" class="text-center py-32">
        <p class="text-lg text-gray-400">No projects available yet</p>
      </div>
    </div>
  </section>
</template>
