<template>
  <div class="mt-16">
    <h1 class="text-4xl mb-4 font-bold [view-transition-name:about]">ABOUT</h1>
    <div class="">
      <img
        class="h-40 rounded-lg mt-8 mb-4"
        src="../assets/img/top-img.jpg"
        alt="画像"
      />
      <h3 class="font-bold text-xl">Naganuma</h3>
      <p class="mt-2">web engineer in Fukushima</p>
      <p class="mt-6">福島県でWEBエンジニアをしているNaganumaです。</p>
      <p>
        主にWordpressやnuxt.jsを使用してホームページの制作や、VBAでの自動処理プログラムの作成を行っています。
      </p>
      <p>趣味は料理です。</p>
    </div>
    <div class="mt-10">
      <h2 class="text-3xl text-bold">SKILL</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
        <div class="">
          <p class="text-xl mb-2">Language</p>
          <div class="[&_span]:block [&_span]:indent-5">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>TypeScript</span>
            <span>PHP</span>
            <span>VBA</span>
          </div>
        </div>
        <div>
          <p class="text-xl mb-2">Framework</p>
          <div class="[&_span]:block [&_span]:indent-5">
            <span>Bootstrap</span>
            <span>Tailwind CSS</span>
            <span>jQuery</span>
            <span>Vue.js</span>
            <span>Nuxt.js</span>
            <span>React</span>
            <span>Next.js</span>
            <span>Laravel</span>
          </div>
        </div>
        <div>
          <p class="text-xl mb-2">CMS</p>
          <div class="[&_span]:block [&_span]:indent-5">
            <span>WordPress</span>
            <span>Newt</span>
          </div>
        </div>
        <div>
          <p class="text-xl mb-2">Other</p>
          <div class="[&_span]:block [&_span]:indent-5">
            <span>VisualStudioCode</span>
            <span>Node.js</span>
            <span>Git</span>
            <span>GitHub</span>
            <span>Docker</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
useHead({
  title: "ABOUT",
  meta: [{ name: "description", content: "Naganuma ABOUT" }],
});
</script>
