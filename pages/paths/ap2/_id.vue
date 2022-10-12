<template>
  <main>
    <h1
      class="text-3xl md:text-4xl font-bold leading-none mt-16 text-title text-center mx-auto"
    >
      {{ module }}
    </h1>
    <div class="hidden my-4 md:flex justify-center items-center">
      <nuxt-link
        to="/paths/ap2"
        class="px-5 py-2 bg-transparent border border-main text-xl text-main hover:text-white hover:bg-main"
      >
        Return
      </nuxt-link>
    </div>
    <section class="pt-16 flex mx-auto justify-center items-center">
      <Table :files="files" />
    </section>
  </main>
</template>
<script>
export default {
  async asyncData({ $content, params, route }) {
    const files = await $content("paths", params.slug)
      .where({ slug: "ap2" })
      .where({ Module: route.params.id })
      .fetch();
    return {
      files,
    };
  },
  head() {
    return {
      title: "AP2",
    };
  },
  data() {
    return {
      module: this.$route.params.id,
    };
  },
};
</script>
