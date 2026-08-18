<script setup lang="ts">
import MaxWidthWrapper from "~/wrappers/MaxWidthWrapper.vue";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const directoryLinks = [
  { label: "Projects", href: "/projects" },
  { label: "Careers", href: "/careers" },
  { label: "About", href: "/about" },
  { label: "Blogs", href: "/blogs" },
];

const externalLinks = [
  { label: "Dev", href: "https://dev.to/thankadigital" },
  {
    label: "Youtube",
    href: "https://www.youtube.com/channel/UCoAxJVPdJ3Dx3P_PL_fesXw",
  },
  { label: "Upwork", href: "#" },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/96073578/admin/dashboard/",
  },
  { label: "GitHub", href: "https://github.com/Thanka-Digital" },
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "https://www.facebook.com/thankadigital1" },
];
</script>

<template>
  <MaxWidthWrapper>
    <section class="py-6 md:py-10" id="connect">
      <div
        class="relative rounded-3xl bg-black/2 border border-black/5 px-5 py-12 sm:px-8 sm:py-14 md:px-12 md:py-16 lg:px-16 lg:py-20 overflow-hidden"
      >
        <div
          class="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-primary-blue/10 blur-3xl pointer-events-none"
        ></div>
        <div
          class="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-primary-red/10 blur-3xl pointer-events-none"
        ></div>

        <div
          class="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 lg:gap-12"
        >
          <div
            class="md:col-span-7 flex flex-col justify-between gap-10 md:gap-14"
          >
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
                class="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] text-black"
              >
                Let's Talk
                <span class="text-primary-red">.</span>
              </h2>
            </div>

            <div class="w-full md:max-w-md">
              <label
                class="text-xs font-semibold uppercase tracking-wide text-black/40 mb-3 block"
              >
                Quick Inquiry
              </label>
              <form class="flex flex-col gap-3">
                <input
                  type="text"
                  placeholder="Your full name"
                  class="bg-white rounded-2xl shadow-md shadow-black/5 border border-black/5 px-5 py-3.5 text-sm outline-none placeholder:text-black/30 focus:ring-2 focus:ring-primary-blue/20 transition-all duration-300"
                />
                <input
                  type="email"
                  placeholder="your@email.com"
                  class="bg-white rounded-2xl shadow-md shadow-black/5 border border-black/5 px-5 py-3.5 text-sm outline-none placeholder:text-black/30 focus:ring-2 focus:ring-primary-blue/20 transition-all duration-300"
                />
                <textarea
                  placeholder="Message"
                  rows="3"
                  class="bg-white rounded-2xl shadow-md shadow-black/5 border border-black/5 px-5 py-3.5 text-sm outline-none placeholder:text-black/30 focus:ring-2 focus:ring-primary-blue/20 transition-all duration-300 resize-none"
                ></textarea>
                <button
                  type="submit"
                  class="group inline-flex items-center justify-center gap-2 py-3.5 rounded-full bg-primary-blue text-white text-sm font-semibold uppercase tracking-wide shadow-sm shadow-primary-blue/20 hover:bg-primary-red hover:shadow-md hover:shadow-primary-red/20 transition-all duration-300 cursor-pointer"
                >
                  Send Message
                  <span
                    class="group-hover:translate-x-0.5 transition-transform duration-300"
                  >
                    &rarr;
                  </span>
                </button>
              </form>
            </div>
          </div>

          <div class="md:col-span-5 flex flex-col justify-end gap-6">
            <div
              class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4"
            >
              <div
                class="rounded-2xl bg-white shadow-sm shadow-black/5 border border-black/5 p-5 sm:p-6 min-w-0"
              >
                <h6
                  class="text-[10px] font-semibold uppercase tracking-wide text-black/40 mb-3"
                >
                  Location
                </h6>
                <p class="text-sm font-bold text-black truncate">
                  Pokhara, Nepal
                </p>
              </div>
              <div
                class="rounded-2xl bg-white shadow-sm shadow-black/5 border border-black/5 p-5 sm:p-6 min-w-0"
              >
                <h6
                  class="text-[10px] font-semibold uppercase tracking-wide text-black/40 mb-3"
                >
                  Inquiries
                </h6>
                <a
                  href="mailto:thankadigital@gmail.com"
                  class="text-sm font-bold text-black hover:text-primary-red transition-colors break-all"
                >
                  thankadigital@gmail.com
                </a>
              </div>
            </div>

            <div class="flex flex-col gap-3">
              <a
                v-for="link in socialLinks"
                :key="link.label"
                :href="link.href"
                target="_blank"
                rel="noopener noreferrer"
                class="group flex justify-between items-center gap-3 px-5 sm:px-6 py-4 rounded-2xl bg-white shadow-sm shadow-black/5 border border-black/5 hover:shadow-md hover:border-primary-blue/20 transition-all duration-300"
              >
                <span class="text-base font-bold text-black truncate">
                  {{ link.label }}
                </span>
                <span
                  class="w-8 h-8 rounded-full bg-black/4 flex items-center justify-center text-sm text-primary-red group-hover:bg-primary-red group-hover:text-white transition-colors duration-300 shrink-0"
                >
                  &#8599;
                </span>
              </a>
            </div>
          </div>
        </div>

        <div
          class="relative z-10 mt-14 md:mt-16 pt-10 md:pt-12 border-t border-black/10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6"
        >
          <div
            class="rounded-2xl bg-white shadow-sm shadow-black/5 border border-black/5 p-5 sm:p-6 flex flex-col gap-4 min-w-0 col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-2 xl:col-span-2"
          >
            <div
              class="w-10 h-10 rounded-full bg-primary-blue/5 flex items-center justify-center shrink-0"
            >
              <NuxtImg src="icons/thanka_logo.svg" class="h-5 w-5" />
            </div>
            <p class="text-sm text-black/50 leading-relaxed">
              Engineering digital frontiers through adaptive architecture and
              technical precision.
            </p>
          </div>

          <div
            class="rounded-2xl bg-white shadow-sm shadow-black/5 border border-black/5 p-5 sm:p-6 flex flex-col gap-4 min-w-0"
          >
            <span
              class="text-[10px] font-semibold uppercase tracking-wide text-black/40"
            >
              Directory
            </span>
            <nav class="flex flex-col gap-3">
              <NuxtLink
                v-for="link in directoryLinks"
                :key="link.label"
                :to="link.href"
                class="text-sm font-bold text-black hover:text-primary-red transition-colors w-fit"
              >
                {{ link.label }}
              </NuxtLink>
            </nav>
          </div>

          <div
            class="rounded-2xl bg-white shadow-sm shadow-black/5 border border-black/5 p-5 sm:p-6 flex flex-col gap-4 min-w-0"
          >
            <span
              class="text-[10px] font-semibold uppercase tracking-wide text-black/40"
            >
              Externals
            </span>
            <nav class="flex flex-col gap-3">
              <a
                v-for="link in externalLinks"
                :key="link.label"
                :href="link.href"
                target="_blank"
                rel="noopener noreferrer"
                class="text-sm font-bold text-black hover:text-primary-red transition-colors w-fit"
              >
                {{ link.label }}
              </a>
            </nav>
          </div>

          <div
            class="rounded-2xl bg-primary-blue/5 border border-primary-blue/10 p-5 sm:p-6 flex flex-col gap-4 min-w-0 col-span-1 sm:col-span-2 md:col-span-1"
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
                <span
                  class="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0"
                ></span>
                <span
                  class="text-[11px] font-bold uppercase tracking-wide text-black whitespace-nowrap"
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
          class="relative z-10 mt-8 pt-8 border-t border-black/10 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left"
        >
          <div class="flex items-center gap-2">
            <div
              class="w-2 h-2 bg-primary-red rounded-full animate-pulse shrink-0"
            ></div>
            <span
              class="text-xs uppercase tracking-wide text-black/40 whitespace-nowrap"
            >
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
