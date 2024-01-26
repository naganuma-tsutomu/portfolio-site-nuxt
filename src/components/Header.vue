<template>
  <header>
    <div class="flex items-center justify-between">
      <NuxtLink to="/"
        ><h1
          class="font-mono text-3xl py-4 mx-8 transition-all hover:scale-110"
        >
          N
        </h1></NuxtLink
      >

      <button @click="toggleNav" class="outline-none focus:outline-none">
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            :class="{ 'opacity-0': showNav }"
            style="transition: opacity 0.3s ease"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
          <path
            :class="{ 'opacity-0': !showNav }"
            style="transition: opacity 0.3s ease"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>
    </div>
    <nav
      v-if="showNav"
      @click="toggleNav"
      class="md:flex md:items-center md:space-x-4"
    >
      <ul class="grid grid-cols-3 text-center h-10 [&>li]:bg-lime-300">
        <li>
          <NuxtLink to="/" class="block h-full">ホーム</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/tourist-spot" class="block h-full">観光地</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/posts" class="block h-full">投稿</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
const showNav = ref(false);

const toggleNav = () => {
  showNav.value = !showNav.value;
};
</script>

<style>
/* アイコンの表示・非表示 */
.opacity-0 {
  opacity: 0;
}
</style>
