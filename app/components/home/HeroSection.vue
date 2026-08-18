<script setup lang="ts">
import MaxWidthWrapper from "~/wrappers/MaxWidthWrapper.vue";

const stats = [
  { value: "10+", label: "Projects Delivered" },
  { value: "7+", label: "Happy Clients" },
  { value: "2+", label: "Years Building" },
];
</script>

<template>
  <MaxWidthWrapper>
    <section
      class="min-h-[90vh] flex flex-col justify-center py-24 overflow-hidden"
    >
      <!-- Decorative blurred blobs -->
      <div
        class="absolute -top-24 -right-24 w-105 h-105 rounded-full bg-primary-blue/10 blur-3xl pointer-events-none"
      ></div>
      <div
        class="absolute bottom-0 left-0 w-75 h-75 rounded-full bg-primary-red/10 blur-3xl pointer-events-none"
      ></div>

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

          <NuxtLink
            to="/projects"
            class="group inline-flex items-center gap-3 mt-10 pl-6 pr-2 py-2 rounded-full bg-primary-blue shadow-lg shadow-primary-blue/20 hover:shadow-xl hover:shadow-primary-blue/30 transition-all duration-300 cursor-pointer"
          >
            <span
              class="text-sm font-semibold uppercase tracking-wide text-white"
            >
              View Projects
            </span>
            <div
              class="w-10 h-10 rounded-full bg-white text-primary-blue flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1"
            >
              <span class="text-lg">&rarr;</span>
            </div>
          </NuxtLink>
        </div>

        <!-- Illustration column: tech studio composition -->
        <div
          class="hidden lg:flex lg:col-span-5 relative h-110 items-center justify-center"
        >
          <div
            class="absolute inset-6 rounded-3xl bg-linear-to-br from-primary-blue to-primary-blue/80 rotate-3"
          ></div>

          <!-- Editor window mockup -->
          <div
            class="relative w-67.5 rounded-2xl bg-white shadow-xl -rotate-2 overflow-hidden"
          >
            <div
              class="flex items-center gap-1.5 px-4 py-3 border-b border-black/5"
            >
              <span class="w-2.5 h-2.5 rounded-full bg-black/10"></span>
              <span class="w-2.5 h-2.5 rounded-full bg-black/10"></span>
              <span class="w-2.5 h-2.5 rounded-full bg-primary-red/60"></span>
            </div>
            <div class="p-5 flex flex-col gap-3">
              <div class="h-2 w-3/5 rounded-full bg-primary-blue/20"></div>
              <div class="h-2 w-4/5 rounded-full bg-black/10"></div>
              <div class="h-2 w-2/5 rounded-full bg-primary-red/30"></div>
              <div class="h-2 w-3/4 rounded-full bg-black/10"></div>
              <div class="h-2 w-1/2 rounded-full bg-primary-blue/20"></div>
              <div class="h-2 w-2/3 rounded-full bg-black/10"></div>
            </div>
          </div>

          <!-- Floating code chip -->
          <div
            class="absolute top-6 right-2 w-16 h-16 rounded-2xl bg-white shadow-xl flex items-center justify-center rotate-6"
          >
            <span class="text-lg font-bold text-primary-red">&lt;/&gt;</span>
          </div>

          <!-- Floating activity card -->
          <div
            class="absolute bottom-6 left-0 rounded-2xl bg-white shadow-xl px-4 py-4 flex items-end gap-1.5 rotate-2"
          >
            <span class="w-2 rounded-full bg-primary-blue/30 h-3.5"></span>
            <span class="w-2 rounded-full bg-primary-blue/50 h-6"></span>
            <span class="w-2 rounded-full bg-primary-red h-8"></span>
            <span class="w-2 rounded-full bg-primary-blue/40 h-5"></span>
            <span class="w-2 rounded-full bg-primary-blue/60 h-7"></span>
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
