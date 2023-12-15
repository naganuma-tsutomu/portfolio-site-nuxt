// https://nuxt.com/docs/api/configuration/nuxt-config
const path = require('path');
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/tailwind.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      WPAPI: process.env.WPAPI,
    },
  },
  // modules: [ '@nuxt/image'], // 追記,RC版を導入した場合は'@nuxt/image'

  app: {
    baseURL: "/nuxt/",
  },

  nitro: {
    output: {
      publicDir: path.join(__dirname, 'docs')
    }
  },
});
