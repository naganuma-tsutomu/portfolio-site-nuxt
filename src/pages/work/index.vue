<template>
    <div>
      <ul>
        <li v-for="article in articles" :key="article._id">
        <NuxtLink :to="`/work/${article.slug}`">
          {{ article.title }}
        </NuxtLink>
      </li>
      </ul>
    </div>
  </template>

  <script lang="ts" setup>
  import type { Article } from '../../types/article'

  const { data } = await useAsyncData('articles', async () => {
    const { $newtClient } = useNuxtApp()
    return await $newtClient.getContents<Article>({
      appUid: 'portfolio',
      modelUid: 'article',
      query: {
        select: ['_id', 'title', 'slug', 'body']
      }
    })
  })
  const articles = data.value?.items

  useHead({
    title: 'Newt・Nuxtブログ',
    meta: [
      { name: 'description', content: 'NewtとNuxtを利用したブログです' }
    ]
  })
  </script>