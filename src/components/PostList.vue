<template>
  <div class="mx-24">
    <h1 class="m-auto font-bold text-3xl mt-9 mb-8">観光地記事</h1>
    <div v-if="posts">
      <ul v-if="posts.length" class="grid grid-cols-3 gap-5">
        <li v-for="post in posts" :key="post.id" class="transition-all duration-300 text-center rounded-lg overflow-hidden bg-neutral-100 hover:scale-110">
          <NuxtLink :to="'tourist-spot/' + post.id">
            <img :src="post.acf.top_img" alt="" />
            <p class="my-3">{{ post.title.rendered }}</p>
          </NuxtLink>
        </li>
      </ul>
    </div>
    <div v-else-if="error">
      <p>エラーが発生しました</p>
    </div>
    <div class="mx-auto flex justify-center mt-5">
      <div class="w-auto rounded-md bg-fuchsia-100 transition-all hover:-translate-y-1 overflow-hidden mx-3" v-if="currentPage !== '1'">
        <NuxtLink class="px-3 py-2 block" :to="updateRoute(parseInt(currentPage) - 1)"
          >Previous</NuxtLink
        >
      </div>
      <div class="w-auto rounded-md bg-fuchsia-100 transition-all hover:-translate-y-1 overflow-hidden mx-3" v-if="currentPage != totalPages">
        <NuxtLink class="px-3 py-2 block" :to="updateRoute(parseInt(currentPage) + 1)"> Next </NuxtLink>
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
const totalPosts = ref(0);
const perPage = 9; // 1ページに表示する記事の数
const totalPages = computed(() => {
  return Math.ceil(totalPosts.value / perPage);
});
const {
  data: posts,
  pending,
  refresh,
  error,
} = await useAsyncData(
  "post-data",
  () =>
    $fetch(
      `${config.public.WPAPI}/wp-json/wp/v2/tourist-spot/?acf_format=standard&per_page=${perPage}`,
      {
        query: {
          page: currentPage.value,
        },
        async onResponse({ request, response, options }) {
          totalPosts.value = response.headers.get('X-WP-Total');
        },
      }
    ),
  {
    watch: [currentPage],
  }
);
const updateRoute = (page) => {
  return {
    path: route.path,
    query: { page: page },
  };
};
</script>
