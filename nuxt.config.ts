// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/styles/main.scss"],
  runtimeConfig: {
    public: {
      dummyApiId: process.env.NUXT_DUMMY_API_ID,
    },
  },
});
