<template>
  <div class="mt-16">
    <h1 class="text-4xl mb-4 font-bold [view-transition-name:work]">WORK</h1>
    <ul class="grid md:grid-cols-2 gap-y-10 gap-x-5 mt-16">
      <li v-for="article in articles" :key="article._id">
        <NuxtLink
          :to="`/work/${article.slug}`"
          @click="articleStore.setActiveArticle(article)"
          :class="{ active: articleStore._id === article._id }"
        >
          <img
            class="img"
            :class="`[view-transition-name:${article.slug}]`"
            :src="`${article.coverImage.src}`"
            width="320"
            height="215"
            alt=""
          />
          <div class="title text-xl indent-3 mt-3">
            {{ article.title }}
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import type { Article } from "../../types/article";
import { useArticleStore } from "../../stores/article";
const articleStore = useArticleStore();

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
  meta: [{ name: "description", content: "Naganuma WORK" }],
});
</script>
<style>
.active .img {
  view-transition-name: img;
}
.active .title {
  view-transition-name: title;
}
</style>
