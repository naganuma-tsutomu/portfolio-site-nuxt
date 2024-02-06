<template>
  <div class="mt-16 w-[20rem] mx-auto">
    <h1 class="text-4xl mb-4 font-bold [view-transition-name:contact]">CONTACT</h1>
    <p class="">お問い合わせはこちらから</p>
    <form
      class="grid mt-8"
      action="https://naganuma.form.newt.so/v1/7ZyEahKlH"
      method="post"
    >
      <label for="name">Name</label>
      <input
        class="my-4 h-8 rounded-md px-2 text-black"
        id="name"
        name="name"
      />
      <label for="email">Email</label>
      <input
        class="my-4 h-8 rounded-md px-2 text-black"
        id="email"
        name="email"
        type="email"
      />
      <label for="message">Message</label>
      <textarea
        class="mt-4 h-20 rounded-md px-2 text-black"
        id="message"
        name="message"
      />
      <button
        class="border border-lime-300 w-20 h-10 rounded-md mx-auto mt-8"
        type="submit"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: "CONTACT",
  meta: [
    {
      name: "description",
      content: "NAGANUMA CONTACT",
    },
  ],
});
</script>