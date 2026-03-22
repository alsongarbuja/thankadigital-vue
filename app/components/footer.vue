<script setup lang="ts">
import MaxWidthWrapper from "~/wrappers/MaxWidthWrapper.vue";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
</script>

<template>
  <footer
    class="relative bg-[#F9F9F7] border-t border-black/10 pt-20 pb-10 overflow-hidden"
  >
    <MaxWidthWrapper>
      <div
        class="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style="
          background-image:
            linear-gradient(#000 1px, transparent 1px),
            linear-gradient(90deg, #000 1px, transparent 1px);
          background-size: 80px 80px;
        "
      ></div>

      <div
        class="absolute -bottom-10 left-0 w-full pointer-events-none select-none opacity-[0.3] z-0"
      >
        <h2
          class="text-[25vw] font-black uppercase tracking-tighter leading-none text-transparent stroke-black"
          style="-webkit-text-stroke: 2px black"
        >
          THANKA DIGITAL
        </h2>
      </div>

      <div class="relative z-10">
        <div
          class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-24"
        >
          <div class="col-span-2 lg:col-span-2">
            <NuxtImg
              src="icons/thanka_logo.svg"
              class="h-8 w-8 mb-6 grayscale"
            />
            <p
              class="max-w-xs text-sm text-gray-500 uppercase tracking-widest leading-relaxed"
            >
              Engineering digital frontiers through adaptive architecture and
              technical precision.
            </p>
          </div>

          <div class="flex flex-col gap-4">
            <span
              class="font-mono text-[10px] uppercase tracking-[0.4em] text-gray-400"
            >
              Directory
            </span>
            <nav class="flex flex-col gap-2">
              <a
                v-for="link in ['Projects', 'Careers', 'About', 'Blogs']"
                :key="link"
                href="#"
                class="text-xs font-bold uppercase tracking-widest hover:text-red-600 transition-colors"
              >
                {{ link }}
              </a>
            </nav>
          </div>

          <div class="flex flex-col gap-4">
            <span
              class="font-mono text-[10px] uppercase tracking-[0.4em] text-gray-400"
            >
              Externals
            </span>
            <nav class="flex flex-col gap-2">
              <a
                v-for="link in ['Dev', 'Youtube', 'Upwork']"
                :key="link"
                href="#"
                class="text-xs font-bold uppercase tracking-widest hover:text-red-600 transition-colors"
              >
                {{ link }}
              </a>
            </nav>
          </div>

          <div class="flex flex-col gap-4">
            <span
              class="font-mono text-[10px] uppercase tracking-[0.4em] text-gray-400"
            >
              Status
            </span>
            <div class="flex flex-col gap-2">
              <div class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                <span class="text-[11px] font-bold uppercase tracking-widest">
                  Accepting Projects
                </span>
              </div>
              <p
                class="text-sm text-gray-400 uppercase tracking-wider leading-tight"
              >
                Currently focused on:
                <br />
                <span class="text-black font-semibold">
                  AI Integration & Nuxt 3
                </span>
              </p>
            </div>
          </div>
        </div>

        <div
          class="pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <div class="flex items-center gap-3">
            <div
              class="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse"
            ></div>
            <span
              class="font-mono text-sm uppercase tracking-[0.3em] text-gray-400"
            >
              Core System Online // Build v1.0.4
            </span>
          </div>

          <p class="font-mono text-sm uppercase tracking-widest text-gray-300">
            © 2026 Thanka Digital.
          </p>

          <button
            @click="scrollToTop"
            class="group flex items-center gap-2 font-mono text-sm uppercase tracking-widest"
          >
            Back to Top
            <span class="group-hover:-translate-y-1 transition-transform">
              ↑
            </span>
          </button>
        </div>
      </div>
    </MaxWidthWrapper>
  </footer>
</template>
