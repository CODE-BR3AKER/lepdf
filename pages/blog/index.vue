<template>
  <main>
    <h1
      class="text-3xl md:text-4xl font-bold leading-none mt-16 text-title text-center mx-auto"
    >
      Blog
    </h1>
    <section
      class="flex justify-between flex-col my-12 mx-auto max-w-4xl px-2 sm:px-8 md:px-0"
    >
      <nav
        class="flex justify-between items-center text-xl m-5 pb-2 border-b text-text"
      >
        <p><i class="fas fa-sort-alpha-down-alt"></i> Date de publication</p>
        <a href="#" class="cursor-pointer hover:text-title">
          <i class="fas fa-rss"></i>
        </a>
      </nav>
      <!-- post.slug-->
      <ArticleCard
        v-for="(post, id) in posts"
        :key="id"
        :title="post.title"
        :img="post.thumb"
        :link="`/blog/` + post.slug"
        :date="formatDate(post.updatedAt)"
        :author="post.author"
        :description="post.description.substring(0, 100) + `...`"
        loading="lazy"
      />
    </section>
  </main>
</template>
<script>
export default {
  async asyncData({ $content }) {
    const posts = await $content("blog").sortBy("updatedAt", "desc").fetch();
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
