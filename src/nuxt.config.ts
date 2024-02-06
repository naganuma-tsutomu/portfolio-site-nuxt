// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  experimental: {
    viewTransition: true,
  },
  css: ["~/assets/css/tailwind.css"],
  // ページアニメーションの設定
  app: {
    // pageTransition: { name: "page", mode: "out-in" },
    head: {
      htmlAttrs: {
        lang: "ja",
      },
    },
  },
  modules: ["@pinia/nuxt"],
  vite: { assetsInclude: ["**/*.mov"] },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      WPAPI: "",
      newt: {
        spaceUid: "",
        cdnApiToken: "",
      },
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
