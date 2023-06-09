// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  router: {
    options: {
      linkActiveClass: "active-link",
      linkExactActiveClass: "exact-active-link",
    },
  },
  modules: [
    '@pinia/nuxt',
  ],
});
