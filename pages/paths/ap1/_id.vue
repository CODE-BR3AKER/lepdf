<template>
  <main>
    <h1
      class="text-3xl md:text-4xl font-bold leading-none mt-16 text-title text-center mx-auto"
    >
      {{ module }}
    </h1>
    <section class="pt-16 flex mx-auto justify-center items-center">
      <Table :files="files" />
    </section>
  </main>
</template>
<script>
export default {
  async asyncData({ $content, params, route }) {
    const files = await $content("paths", params.slug)
      .where({ Module: route.params.id })
      .fetch();
    return {
      files,
    };
  },
  head() {
    return {
      title: "AP1",
    };
  },
  data() {
    return {
      module: this.$route.params.id,
    };
  },
};
</script>
