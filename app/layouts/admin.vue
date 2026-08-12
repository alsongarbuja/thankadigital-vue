<script setup lang="ts">
import { ref } from "vue";

const route = useRoute();
const isSidebarOpen = ref(false);

const navItems = [
  { label: "Dashboard", to: "/app/admin", icon: "grid" },
  { label: "Projects", to: "/app/projects", icon: "layers" },
  { label: "Blogs", to: "/app/blogs", icon: "document" },
  { label: "Careers", to: "/app/careers", icon: "users" },
  { label: "Messages", to: "/app/messages", icon: "mail" },
  { label: "Settings", to: "/app/settings", icon: "gear" },
];

const isActive = (to: string) => {
  if (to === "/admin") return route.path === "/admin";
  return route.path === to || route.path.startsWith(`${to}/`);
};

const closeSidebar = () => {
  isSidebarOpen.value = false;
};
</script>

<template>
  <div class="min-h-screen bg-black/1.5 flex">
    <aside
      class="hidden lg:flex w-72 shrink-0 flex-col h-screen sticky top-0 border-r border-black/5 bg-white px-6 py-8"
    >
      <NuxtLink to="/app/admin" class="flex items-center gap-3 px-2 mb-10">
        <div
          class="w-9 h-9 rounded-full bg-primary-blue/5 flex items-center justify-center shrink-0"
        >
          <NuxtImg src="icons/thanka_logo.svg" class="h-4 w-4" />
        </div>
        <div class="min-w-0">
          <p class="text-sm font-bold text-black truncate">Thanka Digital</p>
          <p class="text-[10px] uppercase tracking-wide text-black/40">Admin Panel</p>
        </div>
      </NuxtLink>

      <nav class="flex flex-col gap-1">
        <NuxtLink
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          class="group flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300"
          :class="
            isActive(item.to)
              ? 'bg-primary-blue text-white'
              : 'text-black/60 hover:text-black hover:bg-primary-blue/5'
          "
        >
          <span class="w-5 h-5 flex items-center justify-center shrink-0">
            <svg
              v-if="item.icon === 'grid'"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="w-4.5 h-4.5"
            >
              <rect x="3" y="3" width="8" height="8" rx="1.5" />
              <rect x="13" y="3" width="8" height="8" rx="1.5" />
              <rect x="3" y="13" width="8" height="8" rx="1.5" />
              <rect x="13" y="13" width="8" height="8" rx="1.5" />
            </svg>
            <svg
              v-else-if="item.icon === 'layers'"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="w-4.5 h-4.5"
            >
              <polygon points="12 3 21 8 12 13 3 8 12 3" />
              <polyline points="3 12.5 12 17.5 21 12.5" />
              <polyline points="3 17 12 22 21 17" />
            </svg>
            <svg
              v-else-if="item.icon === 'document'"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="w-4.5 h-4.5"
            >
              <path d="M7 3h7l4 4v14a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
              <path d="M14 3v4h4" />
              <line x1="9" y1="13" x2="15" y2="13" />
              <line x1="9" y1="17" x2="13" y2="17" />
            </svg>
            <svg
              v-else-if="item.icon === 'users'"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="w-4.5 h-4.5"
            >
              <circle cx="9" cy="8" r="3.2" />
              <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
              <circle cx="17.5" cy="8.5" r="2.5" />
              <path d="M15.5 14.2c2.6.4 4.5 2.6 4.5 5.3" />
            </svg>
            <svg
              v-else-if="item.icon === 'mail'"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="w-4.5 h-4.5"
            >
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="M3.5 6.5 12 13l8.5-6.5" />
            </svg>
            <svg
              v-else-if="item.icon === 'gear'"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="w-4.5 h-4.5"
            >
              <circle cx="12" cy="12" r="3" />
              <path
                d="M19.4 13.5a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V19a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H4a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3H10a1.7 1.7 0 0 0 1-1.5V4a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9V10a1.7 1.7 0 0 0 1.5 1H20a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.6 1Z"
              />
            </svg>
          </span>
          {{ item.label }}
        </NuxtLink>
      </nav>

      <div class="mt-auto flex flex-col gap-3">
        <div
          class="rounded-2xl bg-primary-blue/5 border border-primary-blue/10 p-4 flex items-center gap-3"
        >
          <span
            class="w-9 h-9 rounded-full bg-primary-blue text-white flex items-center justify-center text-xs font-bold shrink-0"
          >
            AG
          </span>
          <div class="min-w-0">
            <p class="text-xs font-bold text-black truncate">Alson Garbuja</p>
            <p class="text-[10px] text-black/40 truncate">Administrator</p>
          </div>
        </div>

        <button
          class="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold text-black/50 hover:text-primary-red hover:bg-primary-red/5 transition-all duration-300 cursor-pointer"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="w-4.5 h-4.5"
          >
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" y1="12" x2="9" y2="12" />
          </svg>
          Log Out
        </button>
      </div>
    </aside>

    <!-- Mobile sidebar drawer -->
    <Transition
      enter-active-class="transition-opacity duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="isSidebarOpen" class="lg:hidden fixed inset-0 z-50">
        <div
          class="absolute inset-0 bg-black/40 backdrop-blur-sm"
          @click="closeSidebar"
        ></div>
        <Transition
          appear
          enter-active-class="transition-transform duration-300 ease-out"
          enter-from-class="-translate-x-full"
          enter-to-class="translate-x-0"
        >
          <aside
            class="relative w-72 max-w-[80vw] h-full bg-white px-6 py-8 flex flex-col shadow-2xl"
          >
            <div class="flex items-center justify-between mb-10">
              <NuxtLink to="/admin" class="flex items-center gap-3" @click="closeSidebar">
                <div
                  class="w-9 h-9 rounded-full bg-primary-blue/5 flex items-center justify-center shrink-0"
                >
                  <NuxtImg src="icons/thanka_logo.svg" class="h-4 w-4" />
                </div>
                <p class="text-sm font-bold text-black">Thanka Digital</p>
              </NuxtLink>
              <button
                @click="closeSidebar"
                class="w-9 h-9 rounded-full bg-black/4 flex items-center justify-center text-black/50 hover:bg-primary-red hover:text-white transition-colors duration-300 cursor-pointer"
              >
                &times;
              </button>
            </div>

            <nav class="flex flex-col gap-1">
              <NuxtLink
                v-for="item in navItems"
                :key="item.to"
                :to="item.to"
                @click="closeSidebar"
                class="flex items-center px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300"
                :class="
                  isActive(item.to)
                    ? 'bg-primary-blue text-white'
                    : 'text-black/60 hover:text-black hover:bg-primary-blue/5'
                "
              >
                {{ item.label }}
              </NuxtLink>
            </nav>
          </aside>
        </Transition>
      </div>
    </Transition>

    <!-- Main column -->
    <div class="flex-1 min-w-0 flex flex-col">
      <!-- Top navbar -->
      <header
        class="sticky top-0 z-40 flex items-center justify-between gap-4 px-4 sm:px-6 lg:px-10 py-4 bg-white/80 backdrop-blur-md border-b border-black/5"
      >
        <div class="flex items-center gap-3 min-w-0">
          <button
            @click="isSidebarOpen = true"
            class="lg:hidden w-10 h-10 rounded-full bg-black/4 flex items-center justify-center text-black/60 shrink-0"
            aria-label="Open menu"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              class="w-5 h-5"
            >
              <line x1="4" y1="7" x2="20" y2="7" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="17" x2="20" y2="17" />
            </svg>
          </button>

          <div
            class="hidden sm:flex items-center gap-2 w-full max-w-xs px-4 py-2.5 rounded-full bg-black/3 border border-black/5"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="w-4 h-4 text-black/40 shrink-0"
            >
              <circle cx="10" cy="10" r="6.5" />
              <line x1="14.7" y1="14.7" x2="20.5" y2="20.5" />
            </svg>
            <input
              type="text"
              placeholder="Search..."
              class="bg-transparent text-sm outline-none placeholder:text-black/30 w-full min-w-0"
            />
          </div>
        </div>

        <div class="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            class="relative w-10 h-10 rounded-full bg-black/4 hover:bg-primary-blue/5 flex items-center justify-center text-black/60 hover:text-primary-blue transition-colors duration-300 cursor-pointer"
            aria-label="Notifications"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="w-4.5 h-4.5"
            >
              <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.7 21a2 2 0 0 1-3.4 0" />
            </svg>
            <span
              class="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-primary-red"
            ></span>
          </button>

          <span
            class="w-9 h-9 rounded-full bg-primary-blue text-white flex items-center justify-center text-xs font-bold shrink-0"
          >
            AG
          </span>
        </div>
      </header>

      <!-- Page content -->
      <main class="flex-1 px-4 sm:px-6 lg:px-10 py-8">
        <slot />
      </main>
    </div>
  </div>
</template>
