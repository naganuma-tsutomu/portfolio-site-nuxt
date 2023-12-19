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
    <div>
      <div v-if="currentPage !== '1'">
        <NuxtLink
          :to="updateRoute(parseInt(currentPage) - 1)"
          >Previous</NuxtLink
        >
      </div>
      <div v-if="currentPage !== totalPages">
      <NuxtLink
        :to="updateRoute(parseInt(currentPage) + 1)"
      >
        Next
      </NuxtLink>
      </div>

    </div>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();
const route = useRoute();
watch(
  () => route.query,
  () => {
    currentPage.value = route.query.page;
  }
);
const currentPage = ref(route.query.page || "1"); // 現在のページ番号
const perPage = 3; // 1ページに表示する記事の数
const {
  data: posts,
  pending,
  refresh,
  error,
} = await useAsyncData(
  "post-data",
  () =>
    $fetch(
      `${config.public.WPAPI}/wp-json/wp/v2/tourist-spot/?acf_format=standard&page=${currentPage.value}&per_page=${perPage}`,
      {
        params: {
          page: currentPage.value,
        },
      }
    ),
  {
    watch: [currentPage],
  }
);
const totalPages = computed(() => {
  // トータルページ数の計算方法はデータに基づいて調整する必要があります
  // ここでは簡略化して10ページとしています
  return '10';
});
const updateRoute = (page) => {
  return {
    path: route.path,
    query: { page: page },
  };
};
</script>
