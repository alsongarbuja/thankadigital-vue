<script setup lang="ts">
import MaxWidthWrapper from "~/wrappers/MaxWidthWrapper.vue";
</script>

<template>
  <section class="bg-[#F9F9F7] py-12 border-t border-black/5">
    <MaxWidthWrapper>
      <div
        class="mb-16 flex flex-col md:flex-row justify-between items-end gap-6"
      >
        <div class="max-w-2xl">
          <h2
            class="italic font-black uppercase tracking-tighter text-black leading-none"
          >
            Powering the
            <br />
            <span class="font-light text-gray-400">Next Frontier.</span>
          </h2>
        </div>
        <p
          class="max-w-xs text-sm text-gray-500 uppercase tracking-wide leading-relaxed"
        >
          We leverage a cutting-edge ecosystem to build scalable,
          high-performance digital solutions.
        </p>
      </div>

      <div
        class="grid grid-cols-1 md:grid-cols-12 gap-0 border border-black/10"
      >
        <div
          class="md:col-span-7 border-b md:border-b-0 md:border-r border-black/10 p-8 group relative overflow-hidden transition-colors hover:bg-white"
        >
          <span class="font-mono text-sm text-gray-400 uppercase">
            Architecture / 01
          </span>
          <h3 class="text-3xl font-bold uppercase mt-4 mb-8">
            Frontend Mastery
          </h3>

          <div class="flex flex-wrap gap-4">
            <div
              v-for="tech in [
                'Nuxt.js',
                'Vue 3',
                'Tailwind',
                'TypeScript',
                'React',
                'Next.js',
                'Laravel',
                'Framer',
                'Figma',
              ]"
              :key="tech"
              class="px-4 py-2 border border-black/5 rounded-full text-xs font-bold uppercase tracking-widest group-hover:border-black/20 transition-all"
            >
              {{ tech }}
            </div>
          </div>

          <div
            class="absolute -bottom-10 right-10 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity"
          >
            <span class="text-[12rem] font-black italic">UI</span>
          </div>
        </div>

        <div
          class="md:col-span-5 p-8 group relative overflow-hidden transition-colors hover:bg-white"
        >
          <span class="font-mono text-sm text-gray-400 uppercase">
            Core / 02
          </span>
          <h3 class="text-3xl font-bold uppercase mt-4 mb-8">Robust Backend</h3>

          <div class="flex flex-wrap gap-4">
            <div
              v-for="tech in [
                'NestJS',
                'NodeJS',
                'Python',
                'PHP',
                'PostgreSQL',
                'Docker',
                'Redis',
                'MongoDB',
                'AWS',
              ]"
              :key="tech"
              class="px-4 py-2 border border-black/5 rounded-full text-xs font-bold uppercase tracking-widest group-hover:border-red-500/20 group-hover:text-red-600 transition-all"
            >
              {{ tech }}
            </div>
          </div>
        </div>

        <div
          class="md:col-span-12 border-t border-black/10 p-8 flex flex-col md:flex-row justify-between items-center group hover:bg-black transition-colors duration-500"
        >
          <div class="mb-6 md:mb-0">
            <span
              class="font-mono text-sm text-gray-400 group-hover:text-red-500 uppercase transition-colors"
            >
              Intelligence / 03
            </span>
            <h3
              class="text-4xl md:text-5xl font-black uppercase mt-2 group-hover:text-white transition-colors"
            >
              AI & Adaptive Adversaries
            </h3>
          </div>
          <div class="text-right">
            <p
              class="font-mono text-[11px] text-gray-500 group-hover:text-gray-400 uppercase tracking-widest mb-4"
            >
              Research Tools
            </p>
            <div
              class="flex gap-6 text-2xl font-bold text-black/20 group-hover:text-white/40 italic transition-colors"
            >
              <span>PyTorch</span>
              <span>DQN</span>
              <span>Godot</span>
            </div>
          </div>
        </div>
      </div>

      <div
        class="mt-24 overflow-hidden py-4 border-y border-black/5 flex whitespace-nowrap"
      >
        <div class="animate-marquee flex gap-12 items-center">
          <span
            v-for="n in 10"
            :key="n"
            class="text-[10px] font-mono uppercase tracking-[0.8em] text-gray-300"
          >
            Innovation • Strategy • Performance • Scale • Engineering •
          </span>
        </div>
      </div>
    </MaxWidthWrapper>
  </section>
</template>

<style scoped>
.animate-marquee {
  display: flex;
  animation: marquee 40s linear infinite;
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>
