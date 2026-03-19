<template>
  <MaxWidthWrapper>
    <section class="py-20 overflow-hidden">
      <div class="container">
        <h2 class="mb-6 font-bold uppercase tracking-tighter text-black">
          Services
        </h2>

        <div class="flex flex-col">
          <div
            v-for="(service, index) in services"
            :key="index"
            class="group relative border-t py-10 border-black/10 transition-all duration-500 px-4"
            :class="[index % 2 !== 0 ? 'ml-0 md:ml-40' : '']"
          >
            <span class="block text-xs font-black uppercase tracking-widest">
              [{{ index + 1 < 10 ? "0" + (index + 1) : index + 1 }}]
            </span>

            <div
              class="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-8"
            >
              <h3
                class="text-6xl md:text-8xl font-medium tracking-tight leading-none group-hover:text-gray-400 transition-all"
              >
                {{ service.title }}
              </h3>

              <div
                class="text-sm uppercase font-bold leading-tight text-primary-red w-32"
              >
                {{ service.tags }}
              </div>

              <p
                class="md:max-w-md text-lg leading-snug text-gray-800 font-medium"
              >
                {{ service.desc }}
              </p>

              <div
                class="hidden lg:block absolute left-20 top-1/2 -translate-y-1/2 w-48 h-32 bg-gray-300 opacity-0 group-hover:opacity-100 transition-all duration-500 rotate-12 group-hover:rotate-3 overflow-hidden shadow-2xl"
              >
                <div
                  class="w-full h-full bg-linear-to-br from-gray-400 to-black"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </MaxWidthWrapper>
</template>

<script setup>
import MaxWidthWrapper from "~/wrappers/MaxWidthWrapper.vue";

const services = [
  {
    title: "Branding",
    tags: "Look & Feel, Strategy, Voice",
    desc: "Crafting engaging brand identities that resonate with your target audience, from logo design to complete experience.",
  },
  {
    title: "Website",
    tags: "UX/UI, Full-Stack, Nuxt.js",
    desc: "Performance-first web solutions built with modern frameworks for speed, security, and conversion.",
  },
  {
    title: "Mobile App",
    tags: "iOS, Android, Cross-Platform",
    desc: "Native-feel applications designed to provide seamless user interaction across all mobile touchpoints.",
  },
  {
    title: "SEO",
    tags: "Technical, On-Page, Growth",
    desc: "Data-driven strategies to ensure your brand ranks where it matters most, driving organic engagement.",
  },
  {
    title: "Design & Graphics",
    tags: "Motion, Asset Creation",
    desc: "Visual storytelling through high-impact motion graphics and clean, modern aesthetic assets.",
  },
  {
    title: "Digital Marketing",
    tags: "Ads, Content, Strategy",
    desc: "Connecting fans and brands through unforgettable moments and targeted digital campaigns.",
  },
];
</script>
