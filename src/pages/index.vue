<template>
  <div class="min-h-[calc(100vh_-_15rem)] grid items-center w-[20rem] mx-auto">
    <ul
      class="grid text-4xl text-white gap-20 [&>*]:font-bold [&_a]:p-5 [&>*]:border-solid [&>*]:border [&>*]:w-full [&>*]:text-center"
    >
      <li class="hover:bg-lime-500 hover:border-lime-500 transition-all">
        <NuxtLink to="/about" class="block">ABOUT</NuxtLink>
      </li>
      <li class="hover:bg-lime-500 hover:border-lime-500 transition-all">
        <NuxtLink to="/work" class="block">WORK</NuxtLink>
      </li>
      <li class="hover:bg-lime-500 hover:border-lime-500 transition-all">
        <NuxtLink to="/contact" class="block">CONTACT</NuxtLink>
      </li>
    </ul>
  </div>
</template>
<script setup>
useHead({
  title: "NAGANUMA",
  meta: [{ name: "description", content: "NAGANUMA ポートフォリオサイト" }],
});
</script>