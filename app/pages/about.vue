<script setup lang="ts">
import MaxWidthWrapper from "~/wrappers/MaxWidthWrapper.vue";

useSeoMeta({
  title: "Thanka Digital - About",
  description:
    "IT company based in Nepal. We provide businesses and individuals with robust and scalable products that will help them move to the next level of their business growth. We also provide other services including but not limited to digital marketing, SEO, Content writing, and much more.",
});

const board = [
  {
    name: "Er. Alson Garbuja",
    role: "CEO",
    image: "/teams/alson.jpg",
  },
  {
    name: "Bipin Adhikari",
    role: "CFO",
    image: "/teams/bipin.jpg",
  },
  {
    name: "Er. Sunil Paudel",
    role: "COO",
    image: "/teams/sunil.jpg",
  },
  {
    name: "Susant Basnet",
    role: "CMO",
    image: "/teams/susant.jpg",
  },
  {
    name: "Er. Utsab Gurung",
    role: "CTO",
    image: "/teams/utsab.jpg",
  },
];

const team = [
  { id: "001", name: "Er. Prasiddha Khadka", specialty: "Flutter Developer" },
  { id: "002", name: "Manika Gurung", specialty: "UI/UX" },
  { id: "003", name: "Binod Adhikari", specialty: "Web Developer" },
];
</script>

<template>
  <main class="bg-[#F9F9F7] min-h-screen pt-32 pb-24 overflow-hidden relative">
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

      <section class="relative z-10 mb-40">
        <div
          class="flex flex-col lg:flex-row justify-between items-start gap-12"
        >
          <div class="max-w-4xl">
            <h1
              class="text-[12vw] font-black uppercase tracking-tighter leading-[0.8] text-black mb-12"
            >
              The
              <br />
              Architects.
            </h1>
            <p
              class="text-3xl md:text-5xl font-light italic text-gray-800 leading-tight max-w-2xl"
            >
              We don't just build websites. We engineer
              <span class="text-black font-semibold">digital ecosystems</span>
              that adapt and evolve.
            </p>
          </div>

          <div
            class="relative w-full lg:w-1/3 aspect-3/4 overflow-hidden border border-black/10 group"
          >
            <div
              class="absolute inset-0 z-20 opacity-30 grain-overlay pointer-events-none"
            ></div>
            <NuxtImg
              src="/studio-shot.jpg"
              class="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
            />
          </div>
        </div>
      </section>

      <section class="relative z-10 mb-40">
        <div
          class="border-t border-black/10 pt-12 mb-16 flex justify-between items-end"
        >
          <h2 class="text-5xl font-black uppercase tracking-tighter">
            The Board
          </h2>
        </div>

        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-l border-t border-black/10"
        >
          <div
            v-for="member in board"
            :key="member.name"
            class="border-r border-b border-black/10 p-10 hover:bg-black group transition-colors duration-500"
          >
            <div
              class="aspect-square mb-8 overflow-hidden bg-gray-100 grayscale group-hover:grayscale-0 transition-all"
            >
              <NuxtImg :src="member.image" class="w-full h-full object-cover" />
            </div>
            <span
              class="font-mono text-[10px] text-gray-400 group-hover:text-red-500 uppercase"
            >
              {{ member.role }}
            </span>
            <h3
              class="text-3xl font-bold uppercase mt-2 group-hover:text-white"
            >
              {{ member.name }}
            </h3>
          </div>
        </div>
      </section>

      <section class="relative z-10">
        <div class="border-t border-black/10 pt-12 mb-16">
          <h2 class="text-5xl font-black uppercase tracking-tighter text-right">
            The Engine
          </h2>
        </div>

        <div class="flex flex-col">
          <div
            v-for="staff in team"
            :key="staff.name"
            class="group flex flex-col md:flex-row justify-between items-center py-8 border-b border-black/10 hover:px-6 transition-all duration-300"
          >
            <div class="flex items-center gap-8">
              <span
                class="font-mono text-xs text-gray-300 group-hover:text-red-500"
              >
                {{ staff.id }}
              </span>
              <h4
                class="text-2xl md:text-4xl font-bold uppercase tracking-tight group-hover:italic transition-all"
              >
                {{ staff.name }}
              </h4>
            </div>
            <span
              class="font-mono text-[11px] uppercase tracking-widest text-gray-400 group-hover:text-black"
            >
              {{ staff.specialty }}
            </span>
          </div>
        </div>
      </section>
    </MaxWidthWrapper>
  </main>
</template>
