<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

export type Post = {
  id: String;
  text: string;
};

const config = useRuntimeConfig();
const posts = ref<Post[]>([]);

onMounted(() => {
  console.log(config);
  fetch("https://dummyapi.io/data/v1/post", {
    headers: {
      "app-id": config.public.dummyApiId,
    },
  })
    .then((response) => response.json())
    .then((json) => (posts.value = json.data));
});
</script>
