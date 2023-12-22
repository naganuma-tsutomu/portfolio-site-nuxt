<template>
  <div>
    <Search />
    <button @click="CONS" value="29">ここをクリック</button>
    <button @click="CONS" value="89">ここをクリック</button>
    <PostList :name="home" />
  </div>
</template>

<script setup lang="ts">
const home:string = ref(30);
const CONS = (e) => {
  home.value = e.target.value;
}
</script>