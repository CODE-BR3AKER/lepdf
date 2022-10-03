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
  async asyncData({ $content, params }) {
    const path = await $content("paths", params.slug).fetch();
    return {
      path,
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
  computed: {
    files() {
      return this.path[0].body.filter((res) => {
        return res.Module == this.$route.params.id;
      });
    },
  },
};
</script>
