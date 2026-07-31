<script setup lang="ts">
import MaxWidthWrapper from "~/wrappers/MaxWidthWrapper.vue";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
</script>

<template>
  <MaxWidthWrapper>
    <section class="py-6 md:py-10">
      <div
        class="relative rounded-3xl bg-black/2 border border-black/5 px-6 py-16 md:px-16 md:py-20 overflow-hidden"
      >
        <div
          class="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-primary-blue/10 blur-3xl pointer-events-none"
        ></div>
        <div
          class="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-primary-red/10 blur-3xl pointer-events-none"
        ></div>

        <div class="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div class="lg:col-span-7 flex flex-col justify-between gap-14">
            <div>
              <div
                class="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-primary-blue/5 border border-primary-blue/10"
              >
                <span class="w-2 h-2 rounded-full bg-primary-red"></span>
                <span
                  class="text-xs font-semibold uppercase tracking-wide text-primary-blue"
                >
                  Get In Touch
                </span>
              </div>
              <h2
                class="text-5xl md:text-6xl font-bold leading-[1.05] text-black"
              >
                Let's Talk
                <span class="text-primary-red">.</span>
              </h2>
            </div>

            <div class="max-w-md">
              <label
                class="text-xs font-semibold uppercase tracking-wide text-black/40 mb-3 block"
              >
                Quick Inquiry
              </label>
              <div
                class="flex items-center gap-2 bg-white rounded-full shadow-md shadow-black/5 border border-black/5 pl-6 pr-2 py-2"
              >
                <input
                  type="email"
                  placeholder="your@email.com"
                  class="bg-transparent w-full text-sm outline-none placeholder:text-black/30"
                />
                <button
                  class="w-10 h-10 rounded-full bg-primary-blue text-white flex items-center justify-center hover:bg-primary-red transition-colors duration-300 shrink-0 cursor-pointer"
                >
                  &rarr;
                </button>
              </div>
            </div>
          </div>

          <div class="lg:col-span-5 flex flex-col justify-end gap-6">
            <div class="grid grid-cols-2 gap-4">
              <div
                class="rounded-2xl bg-white shadow-sm shadow-black/5 border border-black/5 p-6"
              >
                <h4
                  class="text-[10px] font-semibold uppercase tracking-wide text-black/40 mb-3"
                >
                  Location
                </h4>
                <p class="text-sm font-bold text-black">Pokhara, Nepal</p>
              </div>
              <div
                class="rounded-2xl bg-white shadow-sm shadow-black/5 border border-black/5 p-6"
              >
                <h4
                  class="text-[10px] font-semibold uppercase tracking-wide text-black/40 mb-3"
                >
                  Inquiries
                </h4>
                <a
                  href="mailto:thankadigital@gmail.com"
                  class="text-sm font-bold text-black hover:text-primary-red transition-colors"
                >
                  thankadigital@gmail.com
                </a>
              </div>
            </div>

            <div class="flex flex-col gap-3">
              <a
                v-for="link in [
                  'LinkedIn',
                  'GitHub',
                  'X / Twitter',
                  'Instagram',
                ]"
                :key="link"
                href="#"
                class="group flex justify-between items-center px-6 py-4 rounded-2xl bg-white shadow-sm shadow-black/5 border border-black/5 hover:shadow-md hover:border-primary-blue/20 transition-all duration-300"
              >
                <span class="text-base font-bold text-black">
                  {{ link }}
                </span>
                <span
                  class="w-8 h-8 rounded-full bg-black/4 flex items-center justify-center text-sm text-primary-red group-hover:bg-primary-red group-hover:text-white transition-colors duration-300"
                >
                  &#8599;
                </span>
              </a>
            </div>
          </div>
        </div>

        <div
          class="relative z-10 mt-16 pt-12 border-t border-black/10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6"
        >
          <div
            class="col-span-2 lg:col-span-2 rounded-2xl bg-white shadow-sm shadow-black/5 border border-black/5 p-6 flex flex-col gap-4"
          >
            <div
              class="w-10 h-10 rounded-full bg-primary-blue/5 flex items-center justify-center"
            >
              <NuxtImg src="icons/thanka_logo.svg" class="h-5 w-5" />
            </div>
            <p class="text-sm text-black/50 leading-relaxed">
              Engineering digital frontiers through adaptive architecture and
              technical precision.
            </p>
          </div>

          <div
            class="rounded-2xl bg-white shadow-sm shadow-black/5 border border-black/5 p-6 flex flex-col gap-4"
          >
            <span
              class="text-[10px] font-semibold uppercase tracking-wide text-black/40"
            >
              Directory
            </span>
            <nav class="flex flex-col gap-3">
              <a
                v-for="link in ['Projects', 'Careers', 'About', 'Blogs']"
                :key="link"
                href="#"
                class="text-sm font-bold text-black hover:text-primary-red transition-colors w-fit"
              >
                {{ link }}
              </a>
            </nav>
          </div>

          <div
            class="rounded-2xl bg-white shadow-sm shadow-black/5 border border-black/5 p-6 flex flex-col gap-4"
          >
            <span
              class="text-[10px] font-semibold uppercase tracking-wide text-black/40"
            >
              Externals
            </span>
            <nav class="flex flex-col gap-3">
              <a
                v-for="link in ['Dev', 'Youtube', 'Upwork']"
                :key="link"
                href="#"
                class="text-sm font-bold text-black hover:text-primary-red transition-colors w-fit"
              >
                {{ link }}
              </a>
            </nav>
          </div>

          <div
            class="rounded-2xl bg-primary-blue/5 border border-primary-blue/10 p-6 flex flex-col gap-4"
          >
            <span
              class="text-[10px] font-semibold uppercase tracking-wide text-black/40"
            >
              Status
            </span>
            <div class="flex flex-col gap-3">
              <div
                class="inline-flex items-center gap-2 w-fit px-3 py-1.5 rounded-full bg-white shadow-sm shadow-black/5"
              >
                <span class="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                <span
                  class="text-[11px] font-bold uppercase tracking-wide text-black"
                >
                  Accepting Projects
                </span>
              </div>
              <p class="text-sm text-black/50 leading-snug">
                Currently focused on
                <br />
                <span class="text-black font-semibold">
                  AI Integration &amp; Nuxt 3
                </span>
              </p>
            </div>
          </div>
        </div>

        <div
          class="relative z-10 mt-8 pt-8 border-t border-black/10 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div class="flex items-center gap-2">
            <div
              class="w-2 h-2 bg-primary-red rounded-full animate-pulse"
            ></div>
            <span class="text-xs uppercase tracking-wide text-black/40">
              Core System Online
            </span>
          </div>

          <p class="text-xs uppercase tracking-wide text-black/30">
            &copy; 2026 Thanka Digital. All rights reserved.
          </p>

          <button
            @click="scrollToTop"
            class="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-black/50 hover:text-primary-red transition-colors cursor-pointer"
          >
            Back to top
            <span class="group-hover:-translate-y-0.5 transition-transform">
              &uarr;
            </span>
          </button>
        </div>
      </div>
    </section>
  </MaxWidthWrapper>
</template>
