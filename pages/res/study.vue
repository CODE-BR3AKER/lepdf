<template>
  <main class="md:max-w-6xl mx-0 md:mx-auto">
    <h1
      class="text-3xl md:text-4xl font-bold leading-none mt-16 text-title text-center mx-auto"
    >
      Online Courses
    </h1>
    <h2>
      AP
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        aria-hidden="true"
        role="img"
        width="32"
        height="32"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 24 24"
        class="iconify iconify--mdi h-4 w-4"
      >
        <path
          d="M16.59 5.59L18 7l-6 6l-6-6l1.41-1.41L12 10.17l4.59-4.58m0 6L18 13l-6 6l-6-6l1.41-1.41L12 16.17l4.59-4.58z"
          fill="currentColor"
        ></path>
      </svg>
    </h2>
    <section class="my-12 flex mx-auto justify-center items-center flex-wrap">
      <HyperCard
        v-for="(course, id) in ap"
        :key="id"
        :name="course.name"
        :icon="course.icon"
        :link="course.href"
      />
    </section>
    <h2>
      Info
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        aria-hidden="true"
        role="img"
        width="32"
        height="32"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 24 24"
        class="iconify iconify--mdi h-4 w-4"
      >
        <path
          d="M16.59 5.59L18 7l-6 6l-6-6l1.41-1.41L12 10.17l4.59-4.58m0 6L18 13l-6 6l-6-6l1.41-1.41L12 16.17l4.59-4.58z"
          fill="currentColor"
        ></path>
      </svg>
    </h2>
    <section class="my-12 flex mx-auto justify-center items-center flex-wrap">
      <HyperCard
        v-for="(course, id) in info"
        :key="id"
        :name="course.name"
        :icon="course.icon"
        :link="course.href"
      />
    </section>
    <h2>
      Data
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        aria-hidden="true"
        role="img"
        width="32"
        height="32"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 24 24"
        class="iconify iconify--mdi h-4 w-4"
      >
        <path
          d="M16.59 5.59L18 7l-6 6l-6-6l1.41-1.41L12 10.17l4.59-4.58m0 6L18 13l-6 6l-6-6l1.41-1.41L12 16.17l4.59-4.58z"
          fill="currentColor"
        ></path>
      </svg>
    </h2>
    <section class="my-12 flex mx-auto justify-center items-center flex-wrap">
      <HyperCard
        v-for="(course, id) in data"
        :key="id"
        :name="course.name"
        :icon="course.icon"
        :link="course.href"
      />
    </section>
  </main>
</template>
<script>
export default {
  async asyncData({ $content }) {
    const ap = await $content("resources", { deep: true })
      .where({ slug: "prepa" })
      .fetch();
    const info = await $content("resources", { deep: true })
      .where({ slug: "info" })
      .fetch();
    const data = await $content("resources", { deep: true })
      .where({ slug: "data" })
      .fetch();
    return {
      ap,
      info,
      data,
    };
  },
  head() {
    return {
      title: "Formations en ligne",
    };
  },
};
</script>
<style scoped>
main {
  min-height: 100vh;
}
h2 {
  @apply flex justify-center items-center text-title font-medium mt-12;
}
</style>
