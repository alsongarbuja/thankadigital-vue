<script setup lang="ts">
import { ref } from "vue";
import MaxWidthWrapper from "~/wrappers/MaxWidthWrapper.vue";

useSeoMeta({
  title: "Thanka Digital - Blogs",
  description: "Read interesting blogs related to tech industry",
});

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
  <main class="min-h-screen pt-28 pb-24">
    <div
      class="absolute -top-24 -z-10 -right-24 w-95 h-95 rounded-full bg-primary-blue/10 blur-3xl pointer-events-none"
    ></div>
    <div
      class="absolute top-96 -z-10 -left-24 w-70 h-70 rounded-full bg-primary-red/10 blur-3xl pointer-events-none"
    ></div>
    <MaxWidthWrapper>
      <section class="relative z-10">
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
                Insights
              </span>
            </div>
            <h1
              class="text-4xl md:text-6xl font-bold leading-[1.05] text-black"
            >
              The Archive
              <span class="text-primary-red">.</span>
            </h1>
          </div>
          <p
            class="max-w-sm text-sm md:text-base text-black/60 leading-relaxed"
          >
            Notes on engineering, design, and the tech shaping how we build.
          </p>
        </div>

        <!-- Empty state -->
        <div
          v-if="blogs.length === 0"
          class="text-center py-24 rounded-2xl bg-black/2 border border-dashed border-black/10"
        >
          <p class="text-base text-black/50 mb-3">Archive is empty for now.</p>
          <p
            class="text-xs font-semibold uppercase tracking-widest text-primary-blue"
          >
            New entries coming soon
          </p>
        </div>

        <!-- Blog grid -->
        <div v-else class="grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-16">
          <NuxtLink
            v-for="(blog, index) in blogs"
            :key="blog.id"
            :to="`/blogs/${blog.slug}`"
            class="group"
            :class="getLayout(index)?.col"
          >
            <div
              class="relative w-full overflow-hidden rounded-2xl bg-black/5"
              :class="getLayout(index)?.aspect"
            >
              <NuxtImg
                :src="blog.image"
                :alt="blog.title"
                class="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out"
              />
              <div
                class="absolute inset-0 bg-linear-to-t from-black/50 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              ></div>
              <div
                class="absolute top-4 left-4 flex flex-wrap gap-2 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500"
              >
                <span
                  v-for="tag in blog.tags"
                  :key="tag"
                  class="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[10px] font-semibold uppercase tracking-wide text-primary-blue"
                >
                  {{ tag }}
                </span>
              </div>
            </div>

            <div class="pt-5">
              <h2
                class="font-bold text-black leading-tight mb-2 group-hover:text-primary-red transition-colors duration-300"
                :class="getLayout(index)?.title"
              >
                {{ blog.title }}
              </h2>

              <p class="text-sm text-black/50 leading-relaxed mb-4 max-w-lg">
                {{ blog.summary }}
              </p>

              <span
                class="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-black/70"
              >
                Read Entry
                <span
                  class="group-hover:translate-x-1 transition-transform duration-300"
                >
                  &rarr;
                </span>
              </span>
            </div>
          </NuxtLink>
        </div>
      </section>
    </MaxWidthWrapper>
  </main>
</template>
