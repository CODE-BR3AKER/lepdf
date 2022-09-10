<template>
  <main>
    <h1
      class="text-3xl md:text-4xl font-bold leading-none mt-16 text-title text-center mx-auto"
    >
      Blog
    </h1>
    <section
      class="pt-12 flex justify-center md:flex-row flex-col items-center my-12 mx-auto max-w-5xl px-6 sm:px-8 md:px-0"
    >
      <!-- post.slug-->
      <Article
        v-for="(post, id) in posts"
        :key="id"
        :title="post.title"
        :img="post.thumb"
        :link="`/blog/` + post.slug"
        :date="formatDate(post.updatedAt)"
        :author="post.author.name"
      />
    </section>
  </main>
</template>
<script>
export default {
  async asyncData({ $content }) {
    const posts = await $content("blog").sortBy("createdAt", "desc").fetch();
    return {
      posts,
    };
  },
  head() {
    return {
      title: "Blog",
    };
  },
  methods: {
    formatDate(date) {
      let da = new Date(date);
      let ans = new Intl.DateTimeFormat("fr-FR", {
        dateStyle: "full",
      }).format(da);
      return ans;
    },
  },
};
</script>
