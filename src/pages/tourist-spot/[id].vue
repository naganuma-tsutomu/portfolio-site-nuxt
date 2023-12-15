<script setup>
const route = useRoute();
const config = useRuntimeConfig();
const { data: post } = await useFetch(
  `${config.public.WPAPI}/wp-json/wp/v2/tourist-spot/${route.params.id}?acf_format=standard`
);
</script>

<template>
  <div>
    <img :src="post.acf.top_img" alt="" />
    <p>{{ post.title.rendered }}</p>
    <NuxtLink to="/tourist-spot">一覧へ戻る</NuxtLink>
  </div>
</template>
