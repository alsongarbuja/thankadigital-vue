import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["./app/assets/css/main.css"],

  runtimeConfig: {
    mongodbUri: process.env.MONGODB_URI,
  },

  image: {
    domains: ["https://alkyhora.sirv.com/"],
  },

  vite: {
    plugins: [tailwindcss()],
  },
  modules: ["@nuxt/a11y", "@nuxt/image", "@nuxt/ui"],
});
