<script setup lang="ts">
defineProps<{
  slug: string;
  name: string;
  type?: string;
  image: string;
}>();
</script>

<template>
  <NuxtLink
    :to="`/projects/${slug}`"
    class="group relative block w-full h-full overflow-hidden rounded-sm bg-black/5"
  >
    <NuxtImg
      :src="image"
      :alt="name"
      class="w-full h-full object-cover grayscale-100 saturate-[0.4] contrast-[0.95] brightness-95 group-hover:grayscale-0 group-hover:saturate-100 group-hover:contrast-100 group-hover:brightness-100 group-hover:scale-[1.03] transition-all duration-700 ease-out"
    />

    <div
      class="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
    ></div>

    <div
      class="absolute inset-x-0 bottom-0 px-5 py-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"
    >
      <p class="text-white font-bold text-base md:text-lg leading-tight">
        {{ name }}
      </p>
      <p
        v-if="type"
        class="text-white/70 text-[11px] uppercase tracking-wide mt-0.5"
      >
        {{ type }}
      </p>
    </div>
  </NuxtLink>
</template>
