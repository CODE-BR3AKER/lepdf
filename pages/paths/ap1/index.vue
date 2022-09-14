<template>
  <main>
    <h1
      class="text-3xl md:text-4xl font-bold leading-none mt-16 text-title text-center mx-auto"
    >
      AP1
    </h1>
    <section class="my-12 flex mx-auto justify-center items-center flex-wrap">
      <Card
        v-for="(sub, id) in subjects"
        :key="id"
        :name="sub.name"
        :icon="sub.icon"
        :link="`/paths/ap1/` + sub.idx"
      />
    </section>
  </main>
</template>
<script>
import pathsData from "~/assets/ap1.json";
export default {
  head() {
    return {
      title: "AP-1",
    };
  },
  data() {
    return {
      subjects: pathsData,
    };
  },
};
</script>
