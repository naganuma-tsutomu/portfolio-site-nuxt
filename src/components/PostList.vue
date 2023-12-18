<script setup>
const config = useRuntimeConfig();
console.log(config);
const { data: posts } = await useFetch(
  `${config.public.WPAPI}/wp-json/wp/v2/tourist-spot/?acf_format=standard`
);
console.log(posts);
</script>
<template>
  <div class="ml-5 mr-5">
    <h1 class="m-auto font-bold text-xl text-center mt-2 mb-2">観光地記事</h1>
    <ul v-if="posts.length" class="grid grid-cols-3 gap-5">
      <li v-for="post in posts" :key="post.id" class="">
        <NuxtLink :to="'tourist-spot/' + post.id">
          <img :src="post.acf.top_img" alt="" />
          <p>{{ post.title.rendered }}</p>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
