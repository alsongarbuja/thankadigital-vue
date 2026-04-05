<template>
  <main class="bg-[#F9F9F7] min-h-screen overflow-hidden relative">
    <div
      class="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
      style="
        background-image:
          linear-gradient(#000 1px, transparent 1px),
          linear-gradient(90deg, #000 1px, transparent 1px);
        background-size: 80px 80px;
      "
    ></div>

    <header
      class="relative z-10 pt-32 pb-20 px-6 md:px-16 border-b border-black/10"
    >
      <NuxtLink
        to="/blogs"
        class="font-mono text-[10px] uppercase tracking-[0.4em] text-gray-400 hover:text-black transition-colors mb-12 inline-block"
      >
        ← Back to Archive
      </NuxtLink>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
        <div class="lg:col-span-8">
          <div class="flex items-center gap-4 mb-6">
            <span
              class="font-mono text-[10px] uppercase bg-black text-white px-2 py-1"
            >
              Tech / 0{{ post.id }}
            </span>
            <span class="font-mono text-[10px] uppercase text-gray-400">
              {{ post.date }}
            </span>
          </div>
          <h1
            class="text-[8vw] lg:text-[6vw] font-black uppercase tracking-tighter leading-[0.85] text-black"
          >
            {{ post.title }}
          </h1>
        </div>
        <div class="lg:col-span-4 lg:text-right">
          <p class="text-sm font-mono uppercase tracking-widest text-gray-400">
            Written By
          </p>
          <p class="text-lg font-bold uppercase italic">{{ post.author }}</p>
        </div>
      </div>
    </header>

    <section
      class="relative z-10 w-full aspect-21/9 overflow-hidden border-b border-black/10"
    >
      <div
        class="absolute inset-0 z-20 opacity-20 grain-overlay pointer-events-none"
      ></div>
      <NuxtImg
        :src="post.image"
        class="w-full h-full object-cover grayscale brightness-90"
      />
    </section>

    <section
      class="relative z-10 py-24 px-6 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12"
    >
      <aside class="lg:col-span-3 hidden lg:block sticky top-32 h-fit">
        <div class="border-l border-black/10 pl-6 space-y-12">
          <div>
            <h4
              class="font-mono text-sm uppercase text-gray-400 mb-4 tracking-[0.3em]"
            >
              Reading Time
            </h4>
            <p class="text-xs font-bold uppercase">
              {{ post.readingTime }} MINS
            </p>
          </div>
          <div>
            <h4
              class="font-mono text-[10px] uppercase text-gray-400 mb-4 tracking-[0.3em]"
            >
              Categories
            </h4>
            <div class="flex flex-col gap-2">
              <span
                v-for="tag in post.tags"
                :key="tag"
                class="text-[10px] font-bold uppercase tracking-widest hover:text-red-600 cursor-default transition-colors"
              >
                # {{ tag }}
              </span>
            </div>
          </div>
          <div>
            <h4
              class="font-mono text-[10px] uppercase text-gray-400 mb-4 tracking-[0.3em]"
            >
              Share
            </h4>
            <button
              class="text-[10px] font-bold uppercase tracking-widest hover:line-through"
            >
              Copy Link
            </button>
          </div>
        </div>
      </aside>

      <article
        class="lg:col-span-7 prose prose-neutral max-w-none prose-h2:text-4xl prose-h2:uppercase prose-h2:font-black prose-h2:tracking-tighter prose-p:text-xl prose-p:font-light prose-p:italic prose-p:text-gray-700 prose-blockquote:border-red-600 prose-blockquote:bg-black/5 prose-blockquote:p-8"
      >
        <div v-html="post.content"></div>
      </article>
    </section>

    <section
      class="relative z-10 border-t border-black/10 bg-white hover:bg-black group transition-colors duration-700 cursor-pointer"
    >
      <NuxtLink
        :to="`/blogs/${nextPost.slug}`"
        class="py-24 px-6 md:px-16 flex justify-between items-center"
      >
        <div>
          <span
            class="font-mono text-[10px] uppercase text-gray-400 group-hover:text-red-600 transition-colors block mb-4"
          >
            Next Entry //
          </span>
          <h2
            class="text-5xl md:text-7xl font-black uppercase tracking-tighter text-black group-hover:text-white transition-colors"
          >
            {{ nextPost.title }}
          </h2>
        </div>
        <span
          class="text-5xl md:text-8xl text-black/10 group-hover:text-white group-hover:translate-x-4 transition-all duration-700"
        >
          →
        </span>
      </NuxtLink>
    </section>
  </main>
</template>

<script setup>
const post = {
  id: 1,
  title: "Adaptive Adversaries in Imperfect Information",
  author: "Alson Garbuja",
  date: "APRIL 04 // 2026",
  readingTime: "12",
  image: "/blog-1.jpg",
  tags: ["AI", "Gaming", "Python"],
  content: `
    <h2>The Architecture of Choice</h2>
    <p>In the realm of deep neural networks, the challenge isn't just winning—it's adapting. Imperfect information games present a unique blueprint for AI development.</p>
    <blockquote>
      "Complexity is the baseline. Adaptation is the breakthrough."
    </blockquote>
    <p>We explore how the ABD algorithm pushes past standard depth-limits to create more human-like, unpredictable competitors in large-scale virtual environments.</p>
  `,
};

const nextPost = {
  title: "Systems Architecture for 2026",
  slug: "systems-architecture-2026",
};
</script>

<style scoped>
.grain-overlay {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAUVBMVEWFhYWDg4N3d3dtbW17e3t1dXWBgYGHh4d5eXlzc3OLi4ubm5uVlZWPj4+NjY1jY2NDQ0N4eHh0dHR2dnZubm5vbm5nZ2dycnJzc3N4eHh0dHR2dnZ6uPjUAAAAB3RSTlMAAQIDBAUGBwgICAn3elYAAAAJcEhZcwAACxMAAAsTAQCanBgAAAGbSURBVDjHnZZRi8MgEEbjS9S0xpWq7v//ofdrAnu9Xm8v96BwnvE6Mw56v/+p9f0fGvP7f6Xp9Xp9v99v7/f7+329Xm/v9/v7/f59vV5v7/f7+329Xm/v9/v7/f59vV5v7/f7+329Xm/v9/v7/f59vV5v7/f7+329Xm/v9/v7/f59vV5v7/f7+329Xm/v9/v7/f59vV5v7/f7+329Xm/v9/v7/f59vV5v7/f7+329Xm/v9/v7/f59vV5v7/f7+329Xm/v9/v7/f59vV5v7/f7+329Xm/v9/v7/f59vV5v7/f7+329Xm/v9/v7/f59vV5v7/f7+329Xm/v9/v7/f59vV5v7/f7+329Xm/v9/v7/f59vV5v7/f7+329Xm/v9/v7/f6fXq/X6/X693v/A5iM8yN4N99uAAAAAElFTkSuQmCC");
  background-repeat: repeat;
}
</style>
