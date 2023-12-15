<template>
  <div>
    <div>
      <Head>
        <Title>タイトルです。</Title>
        <Meta name="description" content="説明です" />
      </Head>
    </div>
    <Header />
    <slot />
    <Footer />
  </div>
</template>
<script setup>
useHead({
  title: "タイトルです。",
  meta: [{ name: "description", description: "説明です" }],
});
</script>
