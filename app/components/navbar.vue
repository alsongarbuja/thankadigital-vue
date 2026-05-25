<script setup lang="ts">
import { navigationLinks } from "~/utils/datas/header";
</script>

<template>
  <header class="py-4 max-w-[95%] mx-auto">
    <nav class="flex items-center justify-between">
      <NuxtLink href="/" aria-label="Thanka Digital Logo">
        <NuxtImg
          src="icons/thanka_logo.svg"
          alt="Thanka digital logo a blue and red infinite knot"
          width="40"
          height="40"
        />
      </NuxtLink>

      <div class="flex items-center gap-8">
        <NuxtLink
          v-for="link in navigationLinks"
          :key="link.id"
          :href="link.to"
          class="group w-fit hover:font-bold"
        >
          {{ link.text }}
          <hr
            className="h-0.5 bg-black w-0 group-hover:w-full transition-[width] duration-300"
          />
        </NuxtLink>
      </div>
    </nav>
  </header>
</template>
