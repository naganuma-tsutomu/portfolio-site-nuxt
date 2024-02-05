<template>
  <div>
    <ul class="grid md:grid-cols-2 gap-y-10 gap-x-5 mt-16">
      <li v-for="article in articles" :key="article._id">
        <NuxtLink :to="`/work/${article.slug}`">
          <img :src="`${article.coverImage.src}`" alt="" />
          <div class="text-xl indent-3 mt-3">{{ article.title }}</div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import type { Article } from "../../types/article";

const { data } = await useAsyncData("articles", async () => {
  const { $newtClient } = useNuxtApp();
  return await $newtClient.getContents<Article>({
    appUid: "portfolio",
    modelUid: "article",
    query: {
      select: ["_id", "title", "slug", "body", "coverImage"],
    },
  });
});
const articles = data.value?.items;

useHead({
  title: "WORK",
  meta: [{ name: "description", content: "NAGANUMA WORK" }],
});
</script>
