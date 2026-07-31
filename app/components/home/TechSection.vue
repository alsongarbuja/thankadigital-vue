<script setup lang="ts">
import MaxWidthWrapper from "~/wrappers/MaxWidthWrapper.vue";

const stacks = [
  {
    label: "Frontend",
    title: "The Interface",
    items: ["Nuxt.js", "Vue 3", "Tailwind", "TypeScript", "Next.js"],
  },
  {
    label: "Backend",
    title: "The Engine",
    items: ["NestJS", "NodeJS", "Python", "Go", "PostgreSQL", "Docker"],
  },
  {
    label: "Specialization",
    title: "AI & Research",
    items: ["AI", "Machine Learning", "Automation"],
  },
];
</script>

<template>
  <section class="py-6 md:py-10">
    <MaxWidthWrapper>
      <div
        class="rounded-3xl bg-primary-blue px-6 py-16 md:px-16 md:py-20 text-white shadow-xl shadow-primary-blue/20"
      >
        <header class="mb-16 max-w-2xl">
          <div
            class="inline-flex items-center gap-2 mb-5 px-4 py-2 rounded-full bg-white/10 border border-white/10"
          >
            <span class="w-2 h-2 rounded-full bg-primary-red"></span>
            <span
              class="text-xs font-semibold uppercase tracking-wide text-white/70"
            >
              Under the Hood
            </span>
          </div>
          <h2 class="text-4xl md:text-6xl font-bold leading-[1.05]">
            Full Stack Engineering
            <span class="text-primary-red">.</span>
          </h2>
          <p class="mt-6 text-base md:text-lg text-white/60 leading-relaxed">
            Building high-performance digital solutions through scalable
            architecture and adaptive intelligence.
          </p>
        </header>

        <div class="flex flex-col gap-6">
          <div
            v-for="stack in stacks"
            :key="stack.label"
            class="rounded-2xl bg-white/5 border border-white/10 p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-12"
          >
            <div class="w-full md:w-1/3">
              <span class="block text-xs uppercase tracking-wide text-white/40">
                {{ stack.label }}
              </span>
              <h3 class="text-2xl font-bold mt-1">
                {{ stack.title }}
              </h3>
            </div>

            <div class="w-full md:w-2/3 flex flex-wrap gap-3 content-start">
              <span
                v-for="tech in stack.items"
                :key="tech"
                class="px-4 py-2 rounded-full bg-white/10 text-sm font-medium text-white/80 hover:bg-primary-red hover:text-white hover:-translate-y-0.5 transition-all duration-300 cursor-default"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  </section>
</template>
