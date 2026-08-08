<script setup>
import MaxWidthWrapper from "~/wrappers/MaxWidthWrapper.vue";

const services = [
  {
    title: "Branding",
    tags: "Look & Feel, Strategy, Voice",
    desc: "Crafting engaging brand identities that resonate with your target audience, from logo design to complete experience.",
    icon: "spark",
  },
  {
    title: "Website",
    tags: "UX/UI, Full-Stack, Nuxt.js",
    desc: "Performance-first web solutions built with modern frameworks for speed, security, and conversion.",
    icon: "browser",
  },
  {
    title: "Mobile App",
    tags: "iOS, Android, Cross-Platform",
    desc: "Native-feel applications designed to provide seamless user interaction across all mobile touchpoints.",
    icon: "device",
  },
  {
    title: "SEO",
    tags: "Technical, On-Page, Growth",
    desc: "Data-driven strategies to ensure your brand ranks where it matters most, driving organic engagement.",
    icon: "search",
  },
  {
    title: "Design & Graphics",
    tags: "Motion, Asset Creation",
    desc: "Visual storytelling through high-impact motion graphics and clean, modern aesthetic assets.",
    icon: "layers",
  },
  {
    title: "Digital Marketing",
    tags: "Ads, Content, Strategy",
    desc: "Connecting fans and brands through unforgettable moments and targeted digital campaigns.",
    icon: "megaphone",
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
            class="w-14 h-14 rounded-2xl flex items-center justify-center bg-primary-blue/5 text-primary-blue group-hover:bg-primary-blue group-hover:text-white transition-colors duration-300"
          >
            <svg
              v-if="service.icon === 'spark'"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="w-6 h-6"
            >
              <path d="M12 3 14 10 21 12 14 14 12 21 10 14 3 12 10 10 12 3Z" />
            </svg>

            <svg
              v-else-if="service.icon === 'browser'"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="w-6 h-6"
            >
              <rect x="3" y="4" width="18" height="16" rx="2" />
              <line x1="3" y1="9" x2="21" y2="9" />
              <circle
                cx="6.5"
                cy="6.5"
                r="0.4"
                fill="currentColor"
                stroke="none"
              />
              <circle
                cx="9"
                cy="6.5"
                r="0.4"
                fill="currentColor"
                stroke="none"
              />
              <path d="M7 13.5 10 16.5 7 19.5" />
              <line x1="11.5" y1="19.5" x2="16" y2="19.5" />
            </svg>

            <svg
              v-else-if="service.icon === 'device'"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="w-6 h-6"
            >
              <rect x="7" y="2" width="10" height="20" rx="2.2" />
              <line x1="7" y1="18" x2="17" y2="18" />
              <line x1="10.2" y1="4.2" x2="13.8" y2="4.2" />
            </svg>

            <svg
              v-else-if="service.icon === 'search'"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="w-6 h-6"
            >
              <circle cx="10" cy="10" r="6.5" />
              <line x1="14.7" y1="14.7" x2="20.5" y2="20.5" />
              <polyline points="6.5 11 8.5 8 10.5 10 13.5 6" />
            </svg>

            <svg
              v-else-if="service.icon === 'layers'"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="w-6 h-6"
            >
              <polygon points="12 3 21 8 12 13 3 8 12 3" />
              <polyline points="3 12.5 12 17.5 21 12.5" />
              <polyline points="3 17 12 22 21 17" />
            </svg>

            <svg
              v-else-if="service.icon === 'megaphone'"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="w-6 h-6"
            >
              <path
                d="M3 10.5v3a1 1 0 0 0 1 1h2l6 4.5v-14L6 9.5H4a1 1 0 0 0-1 1Z"
              />
              <path d="M15.5 8a4.5 4.5 0 0 1 0 8" />
              <path d="M18.5 5.2a8.5 8.5 0 0 1 0 13.6" />
            </svg>
          </div>

          <h4 class="text-lg font-bold text-black">
            {{ service.title }}
          </h4>

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
