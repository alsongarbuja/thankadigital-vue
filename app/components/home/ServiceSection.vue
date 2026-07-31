<script setup>
import MaxWidthWrapper from "~/wrappers/MaxWidthWrapper.vue";

const services = [
  {
    title: "Branding",
    tags: "Look & Feel, Strategy, Voice",
    desc: "Crafting engaging brand identities that resonate with your target audience, from logo design to complete experience.",
    shape: "circle",
  },
  {
    title: "Website",
    tags: "UX/UI, Full-Stack, Nuxt.js",
    desc: "Performance-first web solutions built with modern frameworks for speed, security, and conversion.",
    shape: "square",
  },
  {
    title: "Mobile App",
    tags: "iOS, Android, Cross-Platform",
    desc: "Native-feel applications designed to provide seamless user interaction across all mobile touchpoints.",
    shape: "circle",
  },
  {
    title: "SEO",
    tags: "Technical, On-Page, Growth",
    desc: "Data-driven strategies to ensure your brand ranks where it matters most, driving organic engagement.",
    shape: "square",
  },
  {
    title: "Design & Graphics",
    tags: "Motion, Asset Creation",
    desc: "Visual storytelling through high-impact motion graphics and clean, modern aesthetic assets.",
    shape: "circle",
  },
  {
    title: "Digital Marketing",
    tags: "Ads, Content, Strategy",
    desc: "Connecting fans and brands through unforgettable moments and targeted digital campaigns.",
    shape: "square",
  },
];
</script>

<template>
  <MaxWidthWrapper>
    <section class="py-20 md:py-28">
      <div class="mb-14">
        <div
          class="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-primary-blue/5 border border-primary-blue/10"
        >
          <span class="w-2 h-2 rounded-full bg-primary-red"></span>
          <span
            class="text-xs font-semibold uppercase tracking-wide text-primary-blue"
          >
            What We Do
          </span>
        </div>
        <h2 class="text-4xl md:text-5xl font-bold text-black">Services</h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="service in services"
          :key="service.title"
          class="group rounded-2xl bg-white p-8 flex flex-col gap-4 shadow-md shadow-black/5 border border-black/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
          <div
            class="w-14 h-14 flex items-center justify-center bg-primary-blue/5 group-hover:bg-primary-red/10 transition-colors duration-300"
            :class="service.shape === 'circle' ? 'rounded-full' : 'rounded-xl'"
          >
            <span
              class="w-6 h-6 rounded-full bg-primary-blue group-hover:bg-primary-red transition-colors duration-300"
            ></span>
          </div>

          <h3 class="text-xl font-bold text-black">
            {{ service.title }}
          </h3>

          <p class="text-sm leading-relaxed text-black/60">
            {{ service.desc }}
          </p>

          <span
            class="mt-auto inline-block w-fit px-2.5 py-1 rounded-full bg-black/4 text-[10px] font-semibold uppercase tracking-wide text-black/50"
          >
            {{ service.tags }}
          </span>
        </div>
      </div>
    </section>
  </MaxWidthWrapper>
</template>
