<script setup>
const config = useRuntimeConfig();
const { data: posts, error } = await useFetch(
  `${config.public.WPAPI}/wp-json/wp/v2/tourist-spot/?acf_format=standard`
);
</script>
<template>
  <div class="ml-5 mr-5">
    <h1 class="m-auto font-bold text-xl text-center mt-2 mb-2">観光地記事</h1>
    <div v-if="posts">
      <ul v-if="posts.length" class="grid grid-cols-3 gap-5">
        <li v-for="post in posts" :key="post.id" class="">
          <NuxtLink :to="'tourist-spot/' + post.id">
            <img :src="post.acf.top_img" alt="" />
            <p>{{ post.title.rendered }}</p>
          </NuxtLink>
        </li>
      </ul>
    </div>
    <div v-else-if="error">
      <p>エラーが発生しました</p>
    </div>
  </div>
</template>
