<template>
  <div class="font-sans text-white md:w-[700px] w-[20rem] mx-auto">
    <Header />
    <Video />
    <main class="min-h-[calc(100vh_-_15rem)] md:mx-5 mb-[3rem]">
      <slot />
    </main>
    <Footer />
  </div>
</template>
