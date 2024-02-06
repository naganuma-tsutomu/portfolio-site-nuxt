<template>
  <div class="mt-16 active">
    <h2 class="title text-2xl mb-4 font-bold">{{ article?.title }}</h2>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div class="img" v-html="article?.body" />
    <NuxtLink to="/work">
      <div class="border text-center py-1 border-lime-500 w-20 rounded-md mx-auto mt-8">一覧へ</div>
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
import type { Article } from "../../types/article";

const route = useRoute();
const { slug } = route.params;

const { data } = await useAsyncData(`article-${slug}`, async () => {
  const { $newtClient } = useNuxtApp();
  return await $newtClient.getFirstContent<Article>({
    appUid: "portfolio",
    modelUid: "article",
    query: {
      slug,
      select: ["_id", "title", "slug", "body"],
    },
  });
});
const article = data.value;

useHead({
  title: article?.title,
  meta: [{ name: "description", content: "投稿詳細ページです" }],
});
</script>
