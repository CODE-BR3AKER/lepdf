<template>
  <main>
    <h1
      class="text-3xl md:text-4xl font-bold leading-none mt-16 text-title text-center mx-auto"
    >
      {{ post.title }}
    </h1>
    <p class="text-xl font-light text-text text-center mt-6">
      {{ post.updatedAt.slice(0, 10) }}
    </p>
    <div class="my-4 flex justify-center items-center">
      <nuxt-link
        to="/blog"
        class="px-5 py-2 bg-transparent border border-main text-xl text-main hover:text-white hover:bg-main"
      >
        Return
      </nuxt-link>
    </div>

    <article class="md:w-1/2 px-5 md:px-0 mx-auto my-8">
      <div>
        <img :src="post.thumb" :alt="post.title" class="w-full rounded-lg" />
      </div>
      <div
        class="flex flex-col sm:flex-row justify-between text-base my-6 text-text"
      >
        <p class="mb-2 sm:mb-0">Écrit par: {{ post.author }}</p>
        <p>
          <span v-if="$fetchState.pending" class="animate-pulse"> ...</span>
          <span v-else-if="$fetchState.error">{{
            $fetchState.error.message
          }}</span>
          <span v-else> {{ initialViews }}</span>
          Views
        </p>
      </div>
      <nav class="pb-6">
        <h2 class="block mb-4 text-xl font-medium text-title">
          <span class="icon icon-link"></span>Content:
        </h2>
        <ul class="text-links font-normal text-base">
          <li v-for="link of post.toc" :key="link.id">
            <a
              :href="`#${link.id}`"
              class="hover:underline"
              :class="{
                'py-2': link.depth === 2,
                'ml-2 pb-2': link.depth === 3,
              }"
              >{{ link.text }}</a
            >
          </li>
        </ul>
      </nav>
      <nuxt-content
        class="content-blog text-text md:text-base text-sm"
        :document="post"
      />
      <LikeBtn />
      <p class="mt-8 text-text">
        You want to conribute to the blog ? Send your article via
        <a
          class="text-main"
          href="mailto:zakariazarkti@gmail.com?subject=LePDF:%20demande%20d'ajout%20d'une%20article"
          target="_blank"
          >mail</a
        >.
      </p>
    </article>
  </main>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const post = await $content("blog", params.slug).fetch();
    return {
      post,
    };
  },
  data() {
    return {
      initialViews: null,
    };
  },
  async fetch() {
    const { data } = await this.$axios.get(
      `/.netlify/functions/fetch_views_for_blog?slug=${this.$route.params.slug}`
    );
    this.initialViews = data.views;
  },
  fetchOnServer: false,
  head() {
    return {
      title: this.post.title,
    };
  },
  methods: {
    addView() {
      this.initialViews++;
      this.incrementViews();
    },
    async incrementViews() {
      await this.$axios.post(
        `/.netlify/functions/register-view?slug=${this.$route.params.slug}`
      );
    },
  },
  mounted() {
    this.incrementViews();
  },
};
</script>
<style>
.content-blog p {
  margin-bottom: 20px;
}
.content-blog h2 {
  color: var(--title);
  text-align: left;
  font-weight: 500;
  font-size: 20px;
}
.content-blog h3 {
  font-weight: bold;
  font-size: 22px;
}
.content-blog h5,
.content-blog h4,
.content-blog h3,
.content-blog h2 {
  margin: 2rem auto;
}
.content-blog blockquote {
  color: #808080;
  font-style: italic;
  padding: 0.5em 1em 0.125em 1em;
  border-left: 8px solid #808080;
  position: relative;
  margin-bottom: 2rem;
}
.content-blog img {
  @apply block my-4 mx-auto;
}
.icon.icon-link {
  background-image: var(--url);
  display: inline-block;
  width: 20px;
  height: 20px;
  background-size: 20px 20px;
}
.content-blog ul {
  list-style: disc;
  margin-left: 15px;
  list-style-position: inside;
}
.content-blog ol {
  list-style: decimal;
  margin-left: 15px;
  list-style-position: inside;
}
.content-blog li {
  @apply my-2;
}
.content-blog a {
  @apply underline text-links;
}
.content-blog table {
  width: 100%;
}
.content-blog th {
  background: var(--main);
  color: white;
}
.content-blog table,
th,
td {
  border: 2px solid var(--background);
  border-collapse: collapse;
  padding: 1em 2em;
}
.content-blog tr:nth-child(even) {
  background-color: var(--secondary);
}
</style>
