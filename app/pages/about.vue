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
    image: "/teams/alson.jpeg",
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
  <main class="min-h-screen pt-12 pb-24">
    <MaxWidthWrapper>
      <section class="relative mb-32 md:mb-44">
        <div class="relative z-10 max-w-3xl mx-auto text-center">
          <div
            class="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-primary-blue/5 border border-primary-blue/10"
          >
            <span class="w-2 h-2 rounded-full bg-primary-red"></span>
            <span
              class="text-xs font-semibold uppercase tracking-wide text-primary-blue"
            >
              About Thanka Digital
            </span>
          </div>

          <h1
            class="text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.05] text-black"
          >
            The Architects
            <span class="text-primary-red">.</span>
          </h1>

          <p
            class="mt-6 mx-auto max-w-xl text-base md:text-lg text-black/60 leading-relaxed"
          >
            We don't just build websites. We engineer
            <span class="text-black font-semibold">digital ecosystems</span>
            that adapt and evolve with your business.
          </p>
        </div>

        <div class="relative z-10 mt-14 md:mt-16">
          <div
            class="relative w-full aspect-21/9 rounded-3xl overflow-hidden shadow-xl shadow-black/10 border border-black/5"
          >
            <NuxtImg
              src="/misc/company2.png"
              alt="2 person sitting in chair working on computers"
              class="w-full h-full object-cover"
            />
            <div
              class="absolute inset-0 bg-linear-to-t from-primary-blue/60 via-transparent to-transparent"
            ></div>
          </div>

          <div
            class="absolute -bottom-8 left-6 md:left-10 rounded-2xl bg-white shadow-xl shadow-black/10 border border-black/5 px-6 py-5 flex items-center gap-4"
          >
            <span class="text-3xl md:text-4xl font-bold text-primary-blue">
              2+
            </span>
            <span
              class="text-xs uppercase tracking-wide text-black/50 leading-tight max-w-24"
            >
              Years Engineering Products
            </span>
          </div>

          <div
            class="hidden md:flex absolute -top-6 right-10 rounded-2xl bg-white shadow-xl shadow-black/10 border border-black/5 px-5 py-4 items-center gap-3 max-w-xs"
          >
            <span class="w-2 h-2 rounded-full bg-primary-red shrink-0"></span>
            <p class="text-xs font-semibold text-black/70 leading-snug">
              Based in Pokhara, building for clients worldwide.
            </p>
          </div>
        </div>
      </section>

      <section class="relative mb-28 md:mb-36">
        <div class="mb-14">
          <div
            class="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-primary-blue/5 border border-primary-blue/10"
          >
            <span class="w-2 h-2 rounded-full bg-primary-red"></span>
            <span
              class="text-xs font-semibold uppercase tracking-wide text-primary-blue"
            >
              Leadership
            </span>
          </div>
          <h2 class="text-4xl md:text-5xl font-bold text-black">The Board</h2>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="member in board"
            :key="member.name"
            class="group rounded-2xl bg-white p-6 shadow-md shadow-black/5 border border-black/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div
              class="aspect-square mb-6 rounded-xl overflow-hidden bg-black/5"
            >
              <NuxtImg
                :src="member.image"
                :alt="member.name"
                class="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
              />
            </div>
            <span
              class="inline-block mb-2 px-2.5 py-1 rounded-full bg-primary-red/10 text-primary-red text-[10px] font-semibold uppercase tracking-wide"
            >
              {{ member.role }}
            </span>
            <h4 class="text-lg font-bold text-black leading-snug">
              {{ member.name }}
            </h4>
          </div>
        </div>
      </section>

      <section class="relative mb-24 md:mb-32">
        <div class="mb-14">
          <div
            class="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-primary-blue/5 border border-primary-blue/10"
          >
            <span class="w-2 h-2 rounded-full bg-primary-red"></span>
            <span
              class="text-xs font-semibold uppercase tracking-wide text-primary-blue"
            >
              Behind the Build
            </span>
          </div>
          <h2 class="text-4xl md:text-5xl font-bold text-black">The Engine</h2>
        </div>

        <div class="flex flex-col gap-4">
          <div
            v-for="staff in team"
            :key="staff.name"
            class="group flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-2xl bg-white p-6 shadow-sm shadow-black/5 border border-black/5 hover:shadow-md hover:border-primary-blue/20 hover:pl-8 transition-all duration-300"
          >
            <div class="flex items-center gap-5">
              <span
                class="w-9 h-9 rounded-full bg-primary-blue/5 flex items-center justify-center text-xs font-bold text-primary-blue shrink-0 group-hover:bg-primary-blue group-hover:text-white transition-colors duration-300"
              >
                {{ staff.id }}
              </span>
              <h4 class="text-xl md:text-2xl font-bold text-black">
                {{ staff.name }}
              </h4>
            </div>
            <span
              class="w-fit px-3 py-1.5 rounded-full bg-black/4 text-[11px] font-semibold uppercase tracking-wide text-black/50"
            >
              {{ staff.specialty }}
            </span>
          </div>
        </div>
      </section>

      <section class="relative">
        <div
          class="rounded-3xl bg-primary-blue px-6 py-14 md:px-16 md:py-16 text-white shadow-xl shadow-primary-blue/20 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left"
        >
          <div>
            <h3 class="text-3xl md:text-4xl font-bold leading-tight">
              Ready to build with us
              <span class="text-primary-red">?</span>
            </h3>
            <p class="mt-3 text-white/60 max-w-md">
              Let's turn your idea into a product people actually want to use.
            </p>
          </div>
          <NuxtLink
            href="#connect"
            class="group inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full bg-white shadow-lg shrink-0 hover:shadow-xl transition-all duration-300"
          >
            <span
              class="text-sm font-semibold uppercase tracking-wide text-primary-blue"
            >
              Get In Touch
            </span>
            <span
              class="w-9 h-9 rounded-full bg-primary-blue text-white flex items-center justify-center transition-transform duration-300 group-hover:translate-y-1"
            >
              &darr;
            </span>
          </NuxtLink>
        </div>
      </section>
    </MaxWidthWrapper>
  </main>
</template>
