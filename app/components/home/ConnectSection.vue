<script setup lang="ts">
import MaxWidthWrapper from "~/wrappers/MaxWidthWrapper.vue";
</script>

<template>
  <section
    class="relative bg-[#F9F9F7] border-t border-black/10 pt-24 pb-12 overflow-hidden"
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

      <div class="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div class="lg:col-span-7 flex flex-col justify-between">
          <h2
            class="text-[12vw] lg:text-[10vw] font-black uppercase tracking-tighter leading-[0.8] text-black"
          >
            Let's
            <br />
            Talk.
          </h2>

          <div class="mt-12 max-w-md group">
            <label
              class="font-mono text-[10px] uppercase text-gray-400 mb-2 block"
            >
              Quick Inquiry
            </label>
            <div
              class="relative flex items-center border-b border-black/20 group-hover:border-black transition-colors py-2"
            >
              <input
                type="email"
                placeholder="YOUR@EMAIL.COM"
                class="bg-transparent w-full text-sm uppercase tracking-widest outline-none placeholder:text-gray-300"
              />
              <button class="text-xl hover:translate-x-1 transition-transform">
                →
              </button>
            </div>
          </div>
        </div>

        <div class="lg:col-span-5 flex flex-col justify-end gap-16">
          <div class="grid grid-cols-2 gap-8 border-l border-black/10 pl-8">
            <div>
              <h4 class="font-mono text-[10px] uppercase text-gray-400 mb-4">
                Location
              </h4>
              <p class="text-sm font-bold uppercase tracking-tight">
                Pokhara, Nepal
              </p>
            </div>
            <div>
              <h4 class="font-mono text-[10px] uppercase text-gray-400 mb-4">
                Inquiries
              </h4>
              <a
                href="mailto:thankadigital@gmail.com"
                class="text-sm font-bold uppercase tracking-tight hover:text-red-600 transition-colors"
              >
                thankadigital@gmail.com
              </a>
            </div>
          </div>

          <div class="flex flex-col border-t border-black/10">
            <a
              v-for="link in ['LinkedIn', 'GitHub', 'X / Twitter', 'Instagram']"
              :key="link"
              href="#"
              class="group flex justify-between items-center pl-8 py-6 border-b border-black/10 hover:px-4 transition-all duration-300 hover:bg-black hover:text-white"
            >
              <span class="text-2xl font-bold uppercase tracking-tighter">
                {{ link }}
              </span>
              <span
                class="text-sm opacity-0 group-hover:opacity-100 transition-opacity"
              >
                ↗
              </span>
            </a>
          </div>
        </div>
      </div>

      <div
        class="mt-24 pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-4"
      >
        <div class="flex items-center gap-2">
          <div class="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
          <span
            class="font-mono text-[10px] uppercase tracking-widest text-gray-400"
          >
            System Online // v1.0.4
          </span>
        </div>

        <p class="font-mono text-[10px] text-gray-300">
          © 2026 D-WEB SOLUTIONS. ALL RIGHTS RESERVED.
        </p>

        <button
          class="font-mono text-[10px] uppercase tracking-widest hover:text-black transition-colors"
        >
          Back to top ↑
        </button>
      </div>
    </MaxWidthWrapper>
  </section>
</template>
