// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/tailwind.css"],
  // ページアニメーションの設定
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
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
  ssr: true, // SSRする場合
  nitro: {
    prerender: {
      failOnError: false,
    },
  },
  // modules: [ '@nuxt/image'], // 追記,RC版を導入した場合は'@nuxt/image'
});
