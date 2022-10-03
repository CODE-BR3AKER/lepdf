<template>
  <main class="w-full">
    <Search />
    <section class="pt-4 md:pt-16 flex mx-auto justify-center items-center">
      <Table :files="path[0].body" />
    </section>
  </main>
</template>
<style scoped>
main {
  min-height: 100vh;
}
</style>
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
      title: "Search",
    };
  },
};
</script>
