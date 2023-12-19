<script setup>
  const config = useRuntimeConfig();
  const { data, pending, error, refresh } = await useFetch(`${config.public.WPAPI}/wp-json/wp/v2/tourist-spot/?acf_format=standard`);


</script>
<template>
  <div>
    <p v-if="error">{{ error }}</p>
    <button @click="refresh()">再取得</button>
    <table border="1">
      <thead>
        <tr><th>ID</th><th>Title</th><th>Summary</th><th>Created by</th><th>Created at</th></tr>
      </thead>
      <tbody>
        <tr v-for="article in data?.articles" :key="article.id">
          <td>{{ article.id }}</td>
          <td>{{ article.title }}</td>
          <td>{{ article.summary }}</td>
          <td>{{ article.created_by }}</td>
          <td>{{ article.created_at }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
