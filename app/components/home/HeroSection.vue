<script setup lang="ts">
import MaxWidthWrapper from "~/wrappers/MaxWidthWrapper.vue";

const stats = [
  { value: "10+", label: "Projects Delivered" },
  { value: "6+", label: "Happy Clients" },
  { value: "2+", label: "Years Building" },
];
</script>

<template>
  <MaxWidthWrapper>
    <section
      class="relative min-h-[90vh] flex flex-col justify-center py-24 overflow-hidden"
    >
      <!-- <div
        class="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-[#333D79]/10 blur-3xl pointer-events-none"
      ></div>
      <div
        class="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-[#E8343E]/10 blur-3xl pointer-events-none"
      ></div> -->

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <!-- Text column -->
        <div class="lg:col-span-7 relative z-10">
          <div
            class="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-primary-blue/5 border border-primary-blue/10"
          >
            <span class="w-2 h-2 rounded-full bg-primary-red"></span>
            <span
              class="text-xs font-semibold uppercase tracking-wide text-primary-blue"
            >
              Digital Product Studio &mdash; Nepal
            </span>
          </div>

          <h1
            class="text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.05] text-black"
          >
            Why Limit
            <span class="text-primary-red">?</span>
          </h1>

          <p
            class="mt-6 max-w-lg text-base md:text-lg text-black/60 leading-relaxed"
          >
            We design and engineer digital products for businesses ready to go
            beyond &mdash; from brand to launch, and everything in between.
          </p>

          <button
            class="group inline-flex items-center gap-3 mt-10 pl-6 pr-2 py-2 rounded-full bg-primary-blue shadow-lg shadow-primary-blue/20 hover:shadow-xl hover:shadow-primary-blue/30 transition-all duration-300 cursor-pointer"
          >
            <span
              class="text-sm font-semibold uppercase tracking-wide text-white"
            >
              Start a Project
            </span>
            <div
              class="w-10 h-10 rounded-full bg-white text-primary-blue flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1"
            >
              <span class="text-lg">&rarr;</span>
            </div>
          </button>
        </div>

        <!-- Illustration card column -->
        <div
          class="hidden lg:flex lg:col-span-5 relative h-105 items-center justify-center"
        >
          <div
            class="absolute inset-6 rounded-3xl bg-linear-to-br from-primary-blue to-primary-blue/80 shadow-2xl shadow-primary-blue/30"
          ></div>
          <div
            class="absolute top-8 right-8 w-28 h-28 rounded-2xl bg-white shadow-xl flex items-center justify-center rotate-6"
          >
            <span class="w-10 h-10 rounded-full bg-primary-red"></span>
          </div>
          <div
            class="absolute bottom-10 left-2 w-32 h-20 rounded-2xl bg-white shadow-xl flex items-center justify-center -rotate-3"
          >
            <span
              class="text-xs font-semibold uppercase tracking-wide text-primary-blue"
            >
              Est. Thanka
            </span>
          </div>
        </div>
      </div>

      <!-- Stats row -->
      <div class="relative z-10 mt-20 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div
          v-for="stat in stats"
          :key="stat.label"
          class="rounded-2xl bg-white shadow-md shadow-black/5 border border-black/5 p-6 flex flex-col gap-1 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
        >
          <span class="text-3xl md:text-4xl font-bold text-primary-blue">
            {{ stat.value }}
          </span>
          <span class="text-xs uppercase tracking-wide text-black/50">
            {{ stat.label }}
          </span>
        </div>
      </div>
    </section>
  </MaxWidthWrapper>
</template>
