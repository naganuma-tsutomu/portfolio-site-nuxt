<template>
  <div>
    <ul
      class="grid place-items-center text-2xl text-white gap-5 [&>*]:font-bold [&_a]:p-5 [&>*]:border-solid [&>*]:border [&>*]:w-[10rem] [&>*]:text-center"
    >
      <li class="hover:bg-lime-500 transition-all rounded-lg">
        <NuxtLink to="/" class="block">TOP</NuxtLink>
      </li>
      <li class="hover:bg-lime-500 transition-all">
        <NuxtLink to="/about" class="block">ABOUT</NuxtLink>
      </li>
      <li class="hover:bg-lime-500 transition-all">
        <NuxtLink to="/tourist-spot" class="block">WORK</NuxtLink>
      </li>
      <li class="hover:bg-lime-500 transition-all">
        <NuxtLink to="/contact" class="block">CONTACT</NuxtLink>
      </li>
    </ul>
  </div>
</template>
