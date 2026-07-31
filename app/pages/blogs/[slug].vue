<script setup>
// import { ref, computed } from "vue";
import MaxWidthWrapper from "~/wrappers/MaxWidthWrapper.vue";

const post = {
  id: 1,
  title: "Adaptive Adversaries in Imperfect Information",
  author: "Alson Garbuja",
  date: "April 04, 2026",
  category: "AI Research",
  readingTime: "12",
  image: "/blog-1.jpg",
  tags: ["AI", "Gaming", "Python"],
  blocks: [
    {
      type: "paragraph",
      text: "In the realm of deep neural networks, the challenge isn't just winning — it's adapting. Imperfect information games present a unique blueprint for AI development, one where the opponent's next move is a probability, not a fact.",
    },
    {
      type: "heading",
      text: "The Architecture of Choice",
    },
    {
      type: "paragraph",
      text: "We explore how the ABD algorithm pushes past standard depth-limits to create more human-like, unpredictable competitors in large-scale virtual environments.",
    },
    {
      type: "image",
      src: "/blog-1.jpg",
      caption:
        "Simulated decision tree pruning across a 10,000-episode training run.",
    },
    {
      type: "quote",
      text: "Complexity is the baseline. Adaptation is the breakthrough.",
    },
    {
      type: "paragraph",
      text: "Every additional layer of abstraction buys the model a small amount of foresight — but only if the reward signal stays sharp. Below is a short walkthrough of the training loop in action.",
    },
    {
      type: "video",
      src: "/blog-demo.mp4",
      caption: "Live inference on an unseen opponent policy.",
    },
    {
      type: "list",
      items: [
        "Depth-limited search with learned value estimates",
        "Regret minimization across imperfect-information subgames",
        "Opponent modeling via counterfactual regret",
      ],
    },
    {
      type: "paragraph",
      text: "The result isn't a perfect player — it's an adaptable one. And in most real-world systems, adaptability is worth far more than optimality.",
    },
  ],
};

const nextPost = {
  title: "Systems Architecture for 2026",
  slug: "systems-architecture-2026",
};

const copied = ref(false);
const copyLink = () => {
  if (typeof window !== "undefined") {
    navigator.clipboard.writeText(window.location.href);
  }
  copied.value = true;
  setTimeout(() => (copied.value = false), 2000);
};

const authorInitials = computed(() =>
  post.author
    .split(" ")
    .map((n) => n[0])
    .join(""),
);
</script>

<template>
  <main class="min-h-screen relative overflow-hidden pb-24">
    <div
      class="absolute top-20 -right-24 w-95 h-95 rounded-full bg-primary-blue/10 blur-3xl pointer-events-none"
    ></div>
    <div
      class="absolute top-[60vh] -left-24 w-70 h-70 rounded-full bg-primary-red/10 blur-3xl pointer-events-none"
    ></div>

    <MaxWidthWrapper>
      <header class="relative z-10 pt-12 pb-14">
        <NuxtLink
          to="/blogs"
          class="group inline-flex items-center gap-2 mb-12 px-4 py-2 rounded-full bg-black/3 hover:bg-primary-blue/5 text-xs font-semibold uppercase tracking-wide text-black/60 hover:text-primary-blue transition-all duration-300"
        >
          <span
            class="group-hover:-translate-x-1 transition-transform duration-300"
          >
            &larr;
          </span>
          Back to Archive
        </NuxtLink>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div class="lg:col-span-8">
            <div class="flex items-center gap-3 mb-6">
              <span
                class="px-3 py-1.5 rounded-full bg-primary-red/10 text-primary-red text-[10px] font-semibold uppercase tracking-wide"
              >
                {{ post.category }}
              </span>
              <span class="text-xs text-black/40">{{ post.date }}</span>
            </div>
            <h1
              class="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] text-black"
            >
              {{ post.title }}
            </h1>
          </div>

          <div class="lg:col-span-4 flex lg:justify-end">
            <div
              class="inline-flex items-center gap-3 rounded-2xl bg-white shadow-sm shadow-black/5 border border-black/5 px-5 py-4"
            >
              <span
                class="w-10 h-10 rounded-full bg-primary-blue text-white flex items-center justify-center text-sm font-bold shrink-0"
              >
                {{ authorInitials }}
              </span>
              <div>
                <p class="text-[10px] uppercase tracking-wide text-black/40">
                  Written by
                </p>
                <p class="text-sm font-bold text-black">{{ post.author }}</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section
        class="relative z-10 w-full aspect-21/9 rounded-3xl overflow-hidden border border-black/5 mb-16"
      >
        <NuxtImg
          :src="post.image"
          :alt="post.title"
          class="w-full h-full object-cover"
        />
      </section>

      <!-- Body -->
      <section class="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <!-- Sidebar -->
        <aside class="lg:col-span-3 hidden lg:block">
          <div class="sticky top-28 flex flex-col gap-8">
            <div
              class="rounded-2xl bg-white shadow-sm shadow-black/5 border border-black/5 p-6"
            >
              <h4
                class="text-[10px] font-semibold uppercase tracking-wide text-black/40 mb-2"
              >
                Reading Time
              </h4>
              <p class="text-2xl font-bold text-primary-blue">
                {{ post.readingTime }} min
              </p>
            </div>

            <div
              class="rounded-2xl bg-white shadow-sm shadow-black/5 border border-black/5 p-6"
            >
              <h4
                class="text-[10px] font-semibold uppercase tracking-wide text-black/40 mb-4"
              >
                Categories
              </h4>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tag in post.tags"
                  :key="tag"
                  class="px-2.5 py-1 rounded-full bg-black/4 text-[11px] font-semibold text-black/60 hover:bg-primary-red/10 hover:text-primary-red transition-colors duration-300 cursor-default"
                >
                  #{{ tag }}
                </span>
              </div>
            </div>

            <button
              @click="copyLink"
              class="group flex items-center justify-between rounded-2xl bg-primary-blue/5 border border-primary-blue/10 p-6 hover:bg-primary-blue transition-colors duration-300 cursor-pointer"
            >
              <span
                class="text-sm font-semibold text-primary-blue group-hover:text-white transition-colors duration-300"
              >
                {{ copied ? "Link Copied!" : "Share Article" }}
              </span>
              <span
                class="text-primary-blue group-hover:text-white group-hover:translate-x-0.5 transition-all duration-300"
              >
                &#8599;
              </span>
            </button>
          </div>
        </aside>

        <article class="lg:col-span-9 flex flex-col gap-8 max-w-3xl">
          <template v-for="(block, i) in post.blocks" :key="i">
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

            <figure
              v-else-if="block.type === 'image'"
              class="flex flex-col gap-3"
            >
              <div class="rounded-2xl overflow-hidden border border-black/5">
                <NuxtImg
                  :src="block.src"
                  :alt="block.caption"
                  class="w-full h-full object-cover"
                />
              </div>
              <figcaption
                v-if="block.caption"
                class="text-xs text-black/40 text-center"
              >
                {{ block.caption }}
              </figcaption>
            </figure>

            <figure
              v-else-if="block.type === 'video'"
              class="flex flex-col gap-3"
            >
              <div
                class="rounded-2xl overflow-hidden border border-black/5 aspect-video bg-black"
              >
                <video
                  :src="block.src"
                  controls
                  playsinline
                  class="w-full h-full object-cover"
                ></video>
              </div>
              <figcaption
                v-if="block.caption"
                class="text-xs text-black/40 text-center"
              >
                {{ block.caption }}
              </figcaption>
            </figure>

            <ul v-else-if="block.type === 'list'" class="flex flex-col gap-3">
              <li
                v-for="(item, li) in block.items"
                :key="li"
                class="flex items-start gap-3 text-base text-black/70"
              >
                <span
                  class="mt-2 w-1.5 h-1.5 rounded-full bg-primary-red shrink-0"
                ></span>
                {{ item }}
              </li>
            </ul>
          </template>
        </article>
      </section>

      <!-- Next post -->
      <section class="relative z-10 mt-24">
        <NuxtLink
          :to="`/blogs/${nextPost.slug}`"
          class="group flex items-center justify-between gap-8 rounded-3xl bg-primary-blue px-8 py-12 md:px-16 md:py-16 shadow-xl shadow-primary-blue/20 hover:shadow-2xl hover:shadow-primary-blue/30 transition-all duration-500"
        >
          <div>
            <span
              class="text-xs font-semibold uppercase tracking-wide text-white/50 mb-3 block"
            >
              Next Entry
            </span>
            <h2 class="text-3xl md:text-5xl font-bold text-white leading-tight">
              {{ nextPost.title }}
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
