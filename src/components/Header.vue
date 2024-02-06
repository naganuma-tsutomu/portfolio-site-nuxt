<template>
  <header class="">
    <div class="h-[5rem] flex items-center gap-8 transition-all justify-center">
      <TransitionGroup name="nav">
        <NuxtLink to="/">
          <h1 class="text-3xl p-4 transition-all hover:scale-110">NAGANUMA</h1>
        </NuxtLink>
        <button
          v-if="!isTopPage"
          @click="toggleNav"
          class="outline-none focus:outline-none"
        >
          <svg
            class="w-16 h-16 p-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              :class="{ 'opacity-0': showNav }"
              style="transition: opacity 0.6s ease"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
            <path
              :class="{ 'opacity-0': !showNav }"
              style="transition: opacity 0.6s ease"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </TransitionGroup>
    </div>
    <div
      class="fixed top-5rem left-0 w-full h-full"
      v-if="showNav"
      @click="toggleNav"
    >
      <nav
        class="w-[20rem] mx-auto pb-[5rem] min-h-[calc(100vh_-_5rem)] grid items-center"
      >
        <ul
          class="grid text-4xl text-lime-500 gap-20 [&>*]:font-bold [&_a]:p-5 [&>*]:border-solid [&>*]:border [&>*]:w-full [&>*]:text-center [&>*]:bg-white"
        >
          <li class="hover:bg-lime-500 hover:border-lime-500 transition-all">
            <NuxtLink to="/about" class="block">ABOUT</NuxtLink>
          </li>
          <li class="hover:bg-lime-500 hover:border-lime-500 transition-all">
            <NuxtLink to="/tourist-spot" class="block">WORK</NuxtLink>
          </li>
          <li class="hover:bg-lime-500 hover:border-lime-500 transition-all">
            <NuxtLink to="/contact" class="block">CONTACT</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
// ハンバーガーメニュー
const showNav = ref(false);
const toggleNav = () => {
  showNav.value = !showNav.value;
};

const isTopPage = ref(false);
const router = useRouter();
watch(
  () => router.currentRoute.value.path,
  (newPath) => {
    isTopPage.value = newPath === "/";
    console.log(isTopPage);
  }
);
</script>

<style>
/* アイコンの表示・非表示 */
.opacity-0 {
  opacity: 0;
}
.nav-move,
.nav-enter-active,
.nav-leave-active {
  transition: all 0.4s;
}
.nav-enter-from,
.nav-leave-to {
  opacity: 0;
  filter: blur(1rem);
  transform: translateX(-30px);
}
.nav-leave-active {
  position: absolute;
}
</style>
