<script setup lang="ts">
interface Props {
  projects: IProjectScheme[] | undefined;
}

defineProps<Props>();
</script>

<style>
.grain-effect::after {
  content: "";
  position: absolute;
  inset: 0;
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAUVBMVEWFhYWDg4N3d3dtbW17e3t1dXWBgYGHh4d5eXlzc3OLi4ubm5uVlZWPj4+NjY1jY2NDQ0N4eHh0dHR2dnZubm5vbm5nZ2dycnJzc3N4eHh0dHR2dnZ6uPjUAAAAB3RSTlMAAQIDBAUGBwgICAn3elYAAAAJcEhZcwAACxMAAAsTAQCanBgAAAGbSURBVDjHnZZRi8MgEEbjS9S0xpWq7v//ofdrAnu9Xm8v96BwnvE6Mw56v/+p9f0fGvP7f6Xp9Xp9v99v7/f7+329Xm/v9/v7/f59vV5v7/f7+329Xm/v9/v7/f59vV5v7/f7+329Xm/v9/v7/f59vV5v7/f7+329Xm/v9/v7/f59vV5v7/f7+329Xm/v9/v7/f59vV5v7/f7+329Xm/v9/v7/f59vV5v7/f7+329Xm/v9/v7/f59vV5v7/f7+329Xm/v9/v7/f59vV5v7/f7+329Xm/v9/v7/f59vV5v7/f7+329Xm/v9/v7/f59vV5v7/f7+329Xm/v9/v7/f59vV5v7/f7+329Xm/v9/v7/f59vV5v7/f7+329Xm/v9/v7/f59vV5v7/f7+329Xm/v9/v7/f59vV5v7/f7+329Xm/v9/v7/f59vV5v7/f7+329Xm/v9/v7/f59vV5v7/f7+329Xm/v9/v7/f59vV5v7/f7+329Xm/v9/v7/f59vV5v7/f7+329Xm/v9/v7/f59vV5v7/f7+329Xm/v9/v7/f6fXq/X6/X693v/A5iM8yN4N99uAAAAAElFTkSuQmCC");
  background-repeat: repeat;
  opacity: 0.25;
  pointer-events: none;
  z-index: 20;
  transition: opacity 0.3s ease;
}

.group:hover .grain-effect::after {
  opacity: 0;
}
</style>

<template>
  <section class="mx-auto">
    <h3 class="font-bold uppercase">Success Stories</h3>
    <p>Some solutions we have delivered</p>
    <div>
      <div class="py-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2">
        <div
          v-for="project in projects"
          :key="project.slug"
          class="group relative h-100 cursor-pointer"
        >
          <div
            class="relative w-full h-full aspect-4/5 overflow-hidden grain-effect bg-white"
          >
            <NuxtImg
              :src="project.thumbnail"
              :alt="project.name"
              height="200"
              class="w-full h-full object-cover grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"
            />
          </div>

          <p
            class="absolute z-20 mt-3 opacity-0 text-sm uppercase tracking-widest font-semibold text-gray-500 group-hover:text-black group-hover:opacity-100 group-hover:mt-2 transition-all duration-300"
          >
            {{ project.name }}
          </p>
        </div>
      </div>
      <!-- <div class="py-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2">
        <div
          v-for="project in projects"
          :key="project.slug"
          class="group relative transition-all duration-300 cursor-pointer h-100"
        >
          <div class="w-full h-full overflow-hidden grain-overlay realtive">
            <NuxtImg
              :src="project.thumbnail"
              :alt="project.name"
              class="w-full h-full z-10 object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
          </div>

          <p
            class="absolute opacity-0 group-hover:opacity-100 z-20 uppercase font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
          >
            {{ project.name }}
          </p>
        </div>
      </div> -->

      <div v-if="projects && projects.length === 0" class="text-center py-32">
        <p class="text-xl text-gray-400">No projects to show yet</p>
      </div>
    </div>
  </section>
</template>
