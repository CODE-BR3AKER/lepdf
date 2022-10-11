<template>
  <main>
    <h1
      class="hidden md:block text-3xl md:text-4xl font-bold leading-none mt-16 text-title text-center mx-auto"
    >
      Paths
    </h1>
    <section
      class="pt-2 md:pt-16 flex mx-auto justify-center items-center flex-wrap mb-12"
    >
      <Card
        v-for="(path, id) in pathsData"
        :key="id"
        :name="path.name"
        :icon="path.icon"
        :link="`paths/` + path.idx"
      />
    </section>
  </main>
</template>
<script>
export default {
  async asyncData({ $content }) {
    const pathsData = await $content("subjects").fetch();
    return {
      pathsData,
    };
  },
  head() {
    return {
      title: "Resources",
    };
  },
};
</script>
