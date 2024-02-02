<template>
  <div>
    <ul
      class="grid place-items-center gap-2 [&>*]:font-bold [&_a]:p-5 [&>*]:bg-lime-300 [&>*]:w-[10rem] [&>*]:text-center"
    >
      <li class="hover:bg-lime-500 transition-all rounded-lg">
        <NuxtLink to="/" class="block">TOP</NuxtLink>
      </li>
      <li class="hover:bg-lime-500 transition-all">
        <NuxtLink to="/about" class="block">ABOUT</NuxtLink>
      </li>
      <li class="hover:bg-lime-500 transition-all">
        <NuxtLink to="/works" class="block">WORKS</NuxtLink>
      </li>
      <li class="hover:bg-lime-500 transition-all">
        <NuxtLink to="/contact" class="block">CONTACT</NuxtLink>
      </li>
    </ul>
  </div>
</template>
