<script setup lang="ts">
import MaxWidthWrapper from "~/wrappers/MaxWidthWrapper.vue";
</script>

<template>
  <section class="bg-[#FCFCFC] py-24 text-[#1A1A1A]">
    <MaxWidthWrapper>
      <header class="mb-32 border-l-4 border-black pl-8">
        <h2
          class="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] uppercase"
        >
          Full Stack
          <br />
          <span class="text-gray-300">Software</span>
          <br />
          Engineering.
        </h2>
        <p class="mt-8 max-w-lg text-lg text-gray-600 leading-relaxed">
          Building high-performance digital solutions through scalable
          architecture and adaptive intelligence.
        </p>
      </header>

      <div class="space-y-32">
        <section class="flex flex-col md:flex-row gap-12">
          <div class="w-full md:w-1/3">
            <span
              class="font-mono text-xs uppercase tracking-widest text-gray-400"
            >
              01 / Frontend
            </span>
            <h3 class="text-3xl font-medium mt-2">The Interface</h3>
          </div>
          <div class="w-full md:w-2/3 flex flex-wrap gap-x-8 gap-y-4">
            <span
              v-for="tech in [
                'Nuxt.js',
                'Vue 3',
                'Tailwind',
                'TypeScript',
                'Next.js',
              ]"
              class="text-2xl md:text-4xl font-light hover:italic cursor-default transition-all"
            >
              {{ tech }}
            </span>
          </div>
        </section>

        <section class="flex flex-col md:flex-row gap-12">
          <div class="w-full md:w-1/3">
            <span
              class="font-mono text-xs uppercase tracking-widest text-gray-400"
            >
              02 / Backend
            </span>
            <h3 class="text-3xl font-medium mt-2">The Engine</h3>
          </div>
          <div class="w-full md:w-2/3 flex flex-wrap gap-x-8 gap-y-4">
            <span
              v-for="tech in [
                'NestJS',
                'NodeJS',
                'Python',
                'Go',
                'PostgreSQL',
                'Docker',
              ]"
              class="text-2xl md:text-4xl font-light hover:italic cursor-default transition-all"
            >
              {{ tech }}
            </span>
          </div>
        </section>

        <section class="flex flex-col md:flex-row gap-12 items-baseline">
          <div class="w-full md:w-1/3">
            <span
              class="font-mono text-xs uppercase tracking-widest text-gray-400"
            >
              03 / Specialization
            </span>
            <h3 class="text-3xl font-medium mt-2">AI & Research</h3>
          </div>
          <div class="w-full md:w-2/3">
            <p
              class="text-4xl md:text-6xl font-black italic tracking-tighter uppercase wrap-break-word"
            >
              Adapting Beyond
              <span class="text-red-600">Traditional Methods</span>
            </p>
            <div class="mt-6 flex gap-8 font-mono text-sm text-gray-500">
              <span>[ AI ]</span>
              <span>[ Machine Learning ]</span>
            </div>
          </div>
        </section>
      </div>
    </MaxWidthWrapper>
  </section>
</template>
