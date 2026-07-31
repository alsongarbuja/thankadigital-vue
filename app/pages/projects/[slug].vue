<script setup>
// import { computed } from "vue";
import MaxWidthWrapper from "~/wrappers/MaxWidthWrapper.vue";

const route = useRoute();

const project = {
  slug: route.params.slug,
  title: "Adversary AI",
  category: "Machine Learning",
  year: "2026",
  client: "Internal R&D",
  role: "Full Product Build",
  liveUrl: "#",
  image: "/project-ai.jpg",
  tags: ["Machine Learning", "Python", "PyTorch"],
  // Dynamic content blocks — same pattern as the blog article renderer, so
  // paragraphs, quotes, and stats can be freely interleaved.
  blocks: [
    {
      type: "paragraph",
      text: "Adversary AI is a research-driven engine that trains adaptive, human-like opponents for large-scale imperfect-information games — built to replace static, easily-exploited bot logic.",
    },
    {
      type: "heading",
      text: "The Challenge",
    },
    {
      type: "paragraph",
      text: "Traditional game AI relies on fixed decision trees that players learn to exploit within hours. The client needed opponents that felt genuinely unpredictable, without sacrificing performance at scale.",
    },
    {
      type: "quote",
      text: "It doesn't just react anymore — it adapts mid-match, the way a real opponent would.",
    },
    {
      type: "paragraph",
      text: "We built a training pipeline around counterfactual regret minimization paired with depth-limited search, letting the model generalize to opponent strategies it had never explicitly seen.",
    },
  ],
  // Multiple in-project images for the dynamic gallery showcase.
  gallery: [
    {
      src: "/project-ai-1.jpg",
      caption: "Training dashboard, live episode tracking",
    },
    { src: "/project-ai-2.jpg", caption: "Decision tree visualization" },
    { src: "/project-ai-3.jpg", caption: "Match replay viewer" },
    { src: "/project-ai-4.jpg", caption: "Opponent policy comparison" },
  ],
};

const nextProject = {
  title: "Resort Sync",
  slug: "resort-sync",
};

// Cycles through a zig-zag 7/5 split so the gallery reads as a considered
// composition rather than a flat uniform grid.
const galleryPattern = [
  { col: "lg:col-span-7", aspect: "aspect-[4/3]" },
  { col: "lg:col-span-5", aspect: "aspect-square" },
  { col: "lg:col-span-5", aspect: "aspect-square" },
  { col: "lg:col-span-7", aspect: "aspect-[4/3]" },
];
const getGalleryLayout = (index) =>
  galleryPattern[index % galleryPattern.length];
</script>

<template>
  <main class="min-h-screen relative overflow-hidden pb-24">
    <div
      class="absolute top-40 -right-24 w-95 h-95 rounded-full bg-primary-blue/10 blur-3xl pointer-events-none"
    ></div>
    <div
      class="absolute top-[70vh] -left-24 w-70 h-70 rounded-full bg-primary-red/10 blur-3xl pointer-events-none"
    ></div>

    <MaxWidthWrapper>
      <!-- Header -->
      <header class="relative z-10 pt-28 md:pt-36 pb-14">
        <NuxtLink
          to="/projects"
          class="group inline-flex items-center gap-2 mb-12 px-4 py-2 rounded-full bg-black/3 hover:bg-primary-blue/5 text-xs font-semibold uppercase tracking-wide text-black/60 hover:text-primary-blue transition-all duration-300"
        >
          <span
            class="group-hover:-translate-x-1 transition-transform duration-300"
          >
            &larr;
          </span>
          Back to Matrix
        </NuxtLink>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div class="lg:col-span-8">
            <div class="flex items-center gap-3 mb-6">
              <span
                class="px-3 py-1.5 rounded-full bg-primary-red/10 text-primary-red text-[10px] font-semibold uppercase tracking-wide"
              >
                {{ project.category }}
              </span>
              <span class="text-xs text-black/40">{{ project.year }}</span>
            </div>
            <h1
              class="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] text-black"
            >
              {{ project.title }}
            </h1>
          </div>

          <div class="lg:col-span-4 flex lg:justify-end">
            <a
              :href="project.liveUrl"
              target="_blank"
              class="group inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full bg-primary-blue shadow-sm shadow-primary-blue/20 hover:shadow-md hover:shadow-primary-blue/30 transition-all duration-300 shrink-0"
            >
              <span class="text-sm font-semibold text-white">
                Visit Live Site
              </span>
              <span
                class="w-9 h-9 rounded-full bg-white text-primary-blue flex items-center justify-center text-xs group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-300"
              >
                &#8599;
              </span>
            </a>
          </div>
        </div>
      </header>

      <!-- Hero image -->
      <section
        class="relative z-10 w-full aspect-21/9 rounded-3xl overflow-hidden border border-black/5 mb-16"
      >
        <NuxtImg
          :src="project.image"
          :alt="project.title"
          class="w-full h-full object-cover"
        />
      </section>

      <!-- Body -->
      <section
        class="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24"
      >
        <!-- Sidebar -->
        <aside class="lg:col-span-3 hidden lg:block">
          <div class="sticky top-28 flex flex-col gap-8">
            <div
              class="rounded-2xl bg-white shadow-sm shadow-black/5 border border-black/5 p-6"
            >
              <h4
                class="text-[10px] font-semibold uppercase tracking-wide text-black/40 mb-2"
              >
                Client
              </h4>
              <p class="text-sm font-bold text-black mb-6">
                {{ project.client }}
              </p>

              <h4
                class="text-[10px] font-semibold uppercase tracking-wide text-black/40 mb-2"
              >
                Our Role
              </h4>
              <p class="text-sm font-bold text-black">{{ project.role }}</p>
            </div>

            <div
              class="rounded-2xl bg-white shadow-sm shadow-black/5 border border-black/5 p-6"
            >
              <h4
                class="text-[10px] font-semibold uppercase tracking-wide text-black/40 mb-4"
              >
                Stack
              </h4>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tag in project.tags"
                  :key="tag"
                  class="px-2.5 py-1 rounded-full bg-black/4 text-[11px] font-semibold text-black/60 hover:bg-primary-red/10 hover:text-primary-red transition-colors duration-300 cursor-default"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </aside>

        <!-- Dynamic content blocks -->
        <article class="lg:col-span-9 flex flex-col gap-8 max-w-3xl">
          <template v-for="(block, i) in project.blocks" :key="i">
            <p
              v-if="block.type === 'paragraph'"
              class="text-lg text-black/70 leading-relaxed"
            >
              {{ block.text }}
            </p>

            <h2
              v-else-if="block.type === 'heading'"
              class="text-2xl md:text-3xl font-bold text-black mt-4"
            >
              {{ block.text }}
            </h2>

            <blockquote
              v-else-if="block.type === 'quote'"
              class="relative rounded-2xl bg-primary-blue/5 border-l-4 border-primary-red px-8 py-7"
            >
              <p
                class="text-xl md:text-2xl font-semibold text-black leading-snug"
              >
                &ldquo;{{ block.text }}&rdquo;
              </p>
            </blockquote>
          </template>
        </article>
      </section>

      <!-- Gallery showcase -->
      <section class="relative z-10 mb-24">
        <div class="mb-10">
          <div
            class="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-primary-blue/5 border border-primary-blue/10"
          >
            <span class="w-2 h-2 rounded-full bg-primary-red"></span>
            <span
              class="text-xs font-semibold uppercase tracking-wide text-primary-blue"
            >
              Gallery
            </span>
          </div>
          <h2 class="text-3xl md:text-4xl font-bold text-black">
            A Closer Look
          </h2>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-10">
          <figure
            v-for="(image, index) in project.gallery"
            :key="index"
            class="flex flex-col gap-3"
            :class="getGalleryLayout(index).col"
          >
            <div
              class="relative w-full overflow-hidden rounded-2xl bg-black/5 group"
              :class="getGalleryLayout(index).aspect"
            >
              <NuxtImg
                :src="image.src"
                :alt="image.caption"
                class="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out"
              />
            </div>
            <figcaption v-if="image.caption" class="text-xs text-black/40">
              {{ image.caption }}
            </figcaption>
          </figure>
        </div>
      </section>

      <!-- Next project -->
      <section class="relative z-10">
        <NuxtLink
          :to="`/projects/${nextProject.slug}`"
          class="group flex items-center justify-between gap-8 rounded-3xl bg-primary-blue px-8 py-12 md:px-16 md:py-16 shadow-xl shadow-primary-blue/20 hover:shadow-2xl hover:shadow-primary-blue/30 transition-all duration-500"
        >
          <div>
            <span
              class="text-xs font-semibold uppercase tracking-wide text-white/50 mb-3 block"
            >
              Next Project
            </span>
            <h2 class="text-3xl md:text-5xl font-bold text-white leading-tight">
              {{ nextProject.title }}
            </h2>
          </div>
          <span
            class="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white text-primary-blue flex items-center justify-center text-xl shrink-0 group-hover:translate-x-2 group-hover:bg-primary-red group-hover:text-white transition-all duration-500"
          >
            &rarr;
          </span>
        </NuxtLink>
      </section>
    </MaxWidthWrapper>
  </main>
</template>
