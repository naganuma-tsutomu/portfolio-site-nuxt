<template>
  <div class="font-mono text-white w-[20rem] mx-auto">
    <div>
      <Head>
        <Title>タイトルです。</Title>
        <Meta name="description" content="説明です" />
      </Head>
    </div>
    <Header />
    <Video />
    <main class="min-h-[calc(100vh_-_10rem)]">
      <slot />
    </main>
    <Footer />
  </div>
</template>
<script setup>
useHead({
  title: "タイトルです。",
  meta: [{ name: "description", description: "説明です" }],
});
</script>
