<template>
  <header class="">
    <div class="h-[5rem] flex items-center transition-all justify-center">
      <TransitionGroup name="nav">
        <NuxtLink to="/" key="item">
          <h1 class="text-3xl p-4 transition-all hover:scale-110">Naganuma</h1>
        </NuxtLink>
        <button
          key="item"
          v-if="!isTopPage"
          @click="toggleNav"
          class="outline-none focus:outline-none z-50 ml-8 md:ml-[25rem]"
        >
          <svg
            class="w-16 h-16 md:w-[4.5rem] md:h-[4.5rem] p-4"
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
    <Transition name="hum">
      <div
        class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-sm z-40"
        v-if="showNav"
      >
        <nav
          class="w-[20rem] mx-auto pb-[5rem] min-h-[calc(100vh_-_5rem)] grid items-center"
        >
          <ul
            class="grid text-4xl gap-20 [&>*]:font-bold [&_a]:p-5 [&>*]:w-full [&>*]:text-center"
          >
            <li
              class="hover:text-lime-500 hover:-translate-y-2 transition-all"
              @click="toggleNav"
            >
              <NuxtLink to="/about" class="block">ABOUT</NuxtLink>
            </li>
            <li
              class="hover:text-lime-500 hover:-translate-y-2 transition-all"
              @click="toggleNav"
            >
              <NuxtLink to="/work" class="block">WORK</NuxtLink>
            </li>
            <li
              class="hover:text-lime-500 hover:-translate-y-2 transition-all"
              @click="toggleNav"
            >
              <NuxtLink to="/contact" class="block">CONTACT</NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<script setup>
// ハンバーガーメニュー
const showNav = ref(false);
const toggleNav = () => {
  showNav.value = !showNav.value;
};
// メインヘッダー
const isTopPage = ref(false);
const router = useRouter();
watch(
  () => router.currentRoute.value.path,
  (newPath) => {
    isTopPage.value = newPath === "/";
  },
  { immediate: true }
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
/* ハンバーガーメニュー */
.hum-enter-active,
.hum-leave-active {
  transition: all 0.4s;
}
.hum-enter-from,
.hum-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
