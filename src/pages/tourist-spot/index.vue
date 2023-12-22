<template>
  <div>
    <Search />
    <button @click="CONS" value="29">ここをクリック</button>
    <button @click="CONS" value="89">ここをクリック</button>

    <label for="windows">Windows</label>
    <input type="checkbox" id="windows" value="29" v-model="os" />
    <label for="linux">Linux</label>
    <input type="checkbox" id="linux" value="89" v-model="os" />
    <label for="mac">Mac</label>
    <input type="checkbox" id="mac" value="Mac" v-model="os" />
    <div>回答：{{ os }}</div>

    <PostList :name="os" />
  </div>
</template>

<script setup lang="ts">
const home: string = ref(30);
const os: Array<number> = ref(Array());
const CONS = (e) => {
  home.value = e.target.value;
};
</script>
