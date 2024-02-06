<template>
  <div class="min-h-[calc(100vh_-_15rem)] grid items-center w-[20rem] mx-auto">
    <ul
      class="grid text-4xl text-white gap-20 [&>*]:font-bold [&_a]:p-5 [&>*]:border-solid [&>*]:border [&>*]:w-full [&>*]:text-center [&>*]:relative [&>*]:overflow-hidden"
    >
    <li class="transition-all hover:border-lime-500 hover:before:top-0 before:transition-all before:content-[''] before:w-full before:h-full before:block before:bg-lime-500 before:absolute before:-z-10 before:top-full">
        <NuxtLink to="/about" class="block">
          <span class="[view-transition-name:about]">ABOUT</span>
        </NuxtLink>
      </li>
      <li class="transition-all hover:border-lime-500 hover:before:top-0 before:transition-all before:content-[''] before:w-full before:h-full before:block before:bg-lime-500 before:absolute before:-z-10 before:top-full">
        <NuxtLink to="/work" class="block">
          <span class="[view-transition-name:work]">WORK</span>
        </NuxtLink>
      </li>
      <li class="transition-all hover:border-lime-500 hover:before:top-0 before:transition-all before:content-[''] before:w-full before:h-full before:block before:bg-lime-500 before:absolute before:-z-10 before:top-full">
        <NuxtLink to="/contact" class="block">
          <span class="[view-transition-name:contact]">CONTACT</span>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
<script setup>
useHead({
  title: "Naganuma",
  meta: [{ name: "description", content: "Naganuma ポートフォリオサイト" }],
});
</script>
