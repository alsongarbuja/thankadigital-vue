<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { navigationLinks } from "~/utils/datas/header";

const route = useRoute();
const isOpen = ref(false);
const isScrolled = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

const closeMenu = () => {
  isOpen.value = false;
};

const isActive = (to: string) => {
  if (to === "/") return route.path === "/";
  return route.path === to || route.path.startsWith(`${to}/`);
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 24;
};

onMounted(() => {
  handleScroll();
  window.addEventListener("scroll", handleScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <header
    class="fixed inset-x-0 z-50 transition-all duration-500 ease-out"
    :class="isScrolled ? 'top-0 px-0' : 'top-4 px-4 md:px-0'"
  >
    <nav
      class="mx-auto flex items-center justify-between gap-4 py-3 border transition-all duration-500 ease-out origin-top"
      :class="
        isScrolled
          ? 'max-w-none w-full px-6 md:px-10 rounded-none bg-white/80 backdrop-blur-xl shadow-lg shadow-black/10 border-black/5'
          : 'max-w-5xl px-4 rounded-full bg-white/70 shadow-none border-black/5'
      "
    >
      <NuxtLink
        href="/"
        aria-label="Thanka Digital Logo"
        class="flex items-center gap-2 shrink-0"
      >
        <NuxtImg
          src="icons/thanka_logo.svg"
          alt="Thanka digital logo a blue and red infinite knot"
          width="32"
          height="32"
        />
      </NuxtLink>

      <!-- Desktop links -->
      <div class="hidden md:flex items-center gap-1">
        <NuxtLink
          v-for="link in navigationLinks"
          :key="link.id"
          :href="link.to"
          class="relative flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300"
          :class="
            isActive(link.to)
              ? 'bg-primary-blue text-white shadow-sm shadow-primary-blue/20'
              : 'text-black/70 hover:text-black hover:bg-primary-blue/5'
          "
        >
          <span
            v-if="isActive(link.to)"
            class="w-1.5 h-1.5 rounded-full bg-primary-red"
          ></span>
          {{ link.text }}
        </NuxtLink>
      </div>

      <NuxtLink
        href="#connect"
        class="hidden md:inline-flex items-center gap-2 pl-5 pr-2 py-2 rounded-full bg-primary-blue shadow-sm shadow-primary-blue/20 hover:shadow-md hover:shadow-primary-blue/30 transition-all duration-300 shrink-0"
      >
        <span class="text-sm font-semibold text-white">Let's Talk</span>
        <span
          class="w-7 h-7 rounded-full bg-white text-primary-blue flex items-center justify-center text-xs transition-transform duration-300 group-hover:translate-x-0.5"
        >
          &rarr;
        </span>
      </NuxtLink>

      <!-- Mobile menu toggle -->
      <button
        @click="toggleMenu"
        aria-label="Toggle menu"
        class="md:hidden relative w-10 h-10 rounded-full bg-primary-blue/5 flex items-center justify-center shrink-0"
      >
        <span class="relative w-4 h-3 flex flex-col justify-between">
          <span
            class="block h-0.5 w-full bg-black rounded-full transition-all duration-300 origin-center"
            :class="isOpen ? 'rotate-45 translate-y-1.25' : ''"
          ></span>
          <span
            class="block h-0.5 w-full bg-black rounded-full transition-all duration-300"
            :class="isOpen ? 'opacity-0' : 'opacity-100'"
          ></span>
          <span
            class="block h-0.5 w-full bg-black rounded-full transition-all duration-300 origin-center"
            :class="isOpen ? '-rotate-45 -translate-y-1.25' : ''"
          ></span>
        </span>
      </button>
    </nav>

    <!-- Mobile dropdown -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-2 scale-[0.98]"
      enter-to-class="opacity-100 translate-y-0 scale-100"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0 scale-100"
      leave-to-class="opacity-0 -translate-y-2 scale-[0.98]"
    >
      <div
        v-if="isOpen"
        class="md:hidden max-w-5xl mx-auto mt-2 p-3 rounded-3xl bg-white/95 backdrop-blur-md shadow-lg shadow-black/10 border border-black/5 flex flex-col gap-1"
      >
        <NuxtLink
          v-for="link in navigationLinks"
          :key="link.id"
          :href="link.to"
          @click="closeMenu"
          class="flex items-center gap-2 px-4 py-3 rounded-2xl text-sm font-semibold transition-all duration-300"
          :class="
            isActive(link.to)
              ? 'bg-primary-blue text-white shadow-sm shadow-primary-blue/20'
              : 'text-black/70 hover:text-black hover:bg-primary-blue/5'
          "
        >
          <span
            v-if="isActive(link.to)"
            class="w-1.5 h-1.5 rounded-full bg-primary-red"
          ></span>
          {{ link.text }}
        </NuxtLink>

        <NuxtLink
          href="#connect"
          @click="closeMenu"
          class="mt-2 flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-primary-blue shadow-sm shadow-primary-blue/20"
        >
          <span class="text-sm font-semibold text-white">Let's Talk</span>
          <span class="text-white text-sm">&rarr;</span>
        </NuxtLink>
      </div>
    </Transition>
  </header>
</template>
