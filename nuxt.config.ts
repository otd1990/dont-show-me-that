// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      dummyApiId: process.env.NUXT_DUMMY_API_ID,
    },
  },
});
