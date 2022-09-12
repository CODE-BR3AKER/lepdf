<template>
  <main>
    <h1
      class="text-3xl md:text-4xl font-bold leading-none mt-16 text-title text-center mx-auto"
    >
      Paths
    </h1>
    <section class="pt-16 flex mx-auto justify-center items-center flex-wrap">
      <Card
        v-for="(sub, id) in subjects"
        :key="id"
        :name="sub.name"
        :icon="sub.icon"
        :link="`paths/` + sub.idx"
      />
    </section>
  </main>
</template>
<script>
import pathsData from "~/assets/paths.json";
export default {
  head() {
    return {
      title: "Resources",
    };
  },
  data() {
    return {
      subjects: pathsData,
    };
  },
};
</script>
