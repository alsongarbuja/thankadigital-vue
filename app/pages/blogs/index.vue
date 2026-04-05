<script setup lang="ts">
useSeoMeta({
  title: "Thanka Digital - Blogs",
  description: "Read interesting blogs related to tech industry",
});

import { ref } from "vue";

const blogs = ref([
  {
    id: 1,
    slug: "adaptive-ai-in-gaming",
    title: "Adaptive Adversaries",
    summary:
      "Exploring the intersection of Deep Neural Networks and imperfect information games within large scale environments.",
    image: "/blog-1.jpg",
    tags: ["AI", "Research", "Python"],
  },
  {
    id: 2,
    slug: "the-nuxt-3-ecosystem",
    title: "System Architecture",
    summary:
      "A deep dive into why we utilize Nuxt 3 for high-performance, SEO-critical digital interfaces.",
    image: "/blog-2.jpg",
    tags: ["Development", "Nuxt 3", "Web"],
  },
]);
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
      <div class="mb-20">
        <h1
          class="text-[10vw] font-black uppercase tracking-tighter leading-[0.8] text-black"
        >
          The
          <br />
          Archive.
        </h1>
      </div>

      <div
        v-if="blogs.length === 0"
        class="border-t border-black/10 pt-40 flex flex-col items-center justify-center relative min-h-[40vh]"
      >
        <h2
          class="text-4xl md:text-7xl font-black uppercase tracking-tighter text-black/10 absolute top-1/2 -translate-y-1/2 select-none"
        >
          Archive Empty
        </h2>
        <p class="font-mono text-sm uppercase tracking-[0.5em] text-gray-400">
          System awaiting new data inputs
        </p>
      </div>

      <div v-else class="flex flex-col gap-32">
        <article
          v-for="(blog, index) in blogs"
          :key="blog.id"
          class="group grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-t border-black/10 pt-16"
        >
          <div
            class="lg:col-span-5 relative aspect-16/10 overflow-hidden border border-black/5"
          >
            <div
              class="absolute inset-0 z-20 opacity-20 grain-overlay pointer-events-none"
            ></div>
            <NuxtImg
              :src="blog.image"
              class="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
            />
          </div>

          <div class="lg:col-span-7 flex flex-col justify-between h-full">
            <div>
              <div class="flex flex-wrap gap-3 mb-6">
                <span
                  v-for="tag in blog.tags"
                  :key="tag"
                  class="font-mono text-[9px] uppercase tracking-widest border border-black/10 px-3 py-1 rounded-full group-hover:border-red-600 transition-colors"
                >
                  {{ tag }}
                </span>
              </div>

              <h2
                class="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-6 group-hover:text-red-600 transition-colors"
              >
                {{ blog.title }}
              </h2>

              <p
                class="text-xl md:text-2xl font-light italic text-gray-500 leading-relaxed mb-10 max-w-2xl"
              >
                {{ blog.summary }}
              </p>
            </div>

            <NuxtLink
              :to="`/blogs/${blog.slug}`"
              class="inline-flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.4em] text-black group-hover:translate-x-2 transition-transform"
            >
              Read Entry
              <span class="text-lg">→</span>
            </NuxtLink>
          </div>
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
