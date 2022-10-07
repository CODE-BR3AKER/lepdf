<template>
  <main class="w-full">
    <Search>
      <input
        type="search"
        name="query"
        id="query"
        v-model="query"
        placeholder="Search Module, Cours, Chapitre..."
        class="w-full md:w-10/12 px-2 py-1 md:p-4 bg-search md:bg-transparent text-sm md:text-base font-light text-text"
      />
    </Search>
    <section class="pt-4 md:pt-16 flex mx-auto justify-center items-center">
      <Table :files="paths" />
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
    const paths = await $content("paths", params.slug).fetch();
    return {
      paths,
    };
  },
  head() {
    return {
      title: "Search",
    };
  },
  data() {
    return {
      query: "",
    };
  },
  watch: {
    async query(query) {
      if (!query) {
        this.paths = await this.$content("paths").fetch();
        return;
      }
      this.paths = await this.$content("paths").search(query).fetch();
    },
  },
};
</script>
