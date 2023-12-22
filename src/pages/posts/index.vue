<template>
  <div>
    <!-- フォームなどの投稿情報の入力 -->
    <input v-model="postTitle" type="text" placeholder="Title" />
    <textarea v-model="postContent" placeholder="Content"></textarea>
    <button @click="createPost">Create Post</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      postTitle: "",
      postContent: "",
    };
  },
  methods: {
    async createPost() {
      try {
        const response = await useFetch(
          `https://test.churatown.com/naganuma/wp-json/wp/v2/posts`,
          {
            method: "POST",
            body: {
              title: this.postTitle,
              content: this.postContent,
              status: "publish",
              // 他の必要なデータを追加する場合もあります（例: status, author等）
            },
            headers: {
              Authorization: `Basic cmVzdDo5Sjh1IHNvOWEgQjJ2RCB2OGVPIFBDQ1EgUDVRQQ==`,
            },
          }
        );
        console.log(window.btoa("rest" + ":" + "rest"));
        console.log("Created post:", response.data);
        // 投稿が成功したら、リダイレクトや他のアクションを実行するなどの処理を行う
      } catch (error) {
        console.error("Error creating post:", error);
        // エラーハンドリング
      }
    },
  },
};
</script>
