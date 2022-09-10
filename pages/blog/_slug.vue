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
        Retour
      </nuxt-link>
    </div>

    <article class="md:w-1/2 px-5 md:px-0 mx-auto my-8">
      <div>
        <img :src="post.thumb" :alt="post.title" class="w-full rounded-lg" />
      </div>
      <div
        class="flex flex-col sm:flex-row justify-between text-base my-6 text-text"
      >
        <p class="mb-2 sm:mb-0">
          {{ post.author.name }}
        </p>
        <p>540 views. 400 likes</p>
      </div>
      <nav class="pb-6">
        <h2 class="block mb-4 text-xl font-medium">
          <span class="icon icon-link"></span>Content:
        </h2>
        <ul class="text-color-link font-normal text-base">
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
      <nuxt-content class="content-blog" :document="post" />
      <LikeBtn />
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
  head() {
    return {
      title: this.post.title,
    };
  },
};
</script>
