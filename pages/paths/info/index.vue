<template>
  <main class="max-w-6xl mx-auto">
    <hr class="bg-text mt-4 lg:mx-12 mx-4" />
    <h1
      class="text-3xl md:text-4xl font-bold leading-none my-16 text-title text-center mx-auto"
    >
      Génie Info
    </h1>
    <div class="my-12 mx-auto max-w-4xl px-6 sm:px-8 md:px-0">
      <div class="h-full overflow-hidden">
        <div class="flex md:flex-row flex-col appearance-none">
          <div class="overflow-hidden rounded-lg w-full mr-10">
            <img
              src="/paths/info.jpg"
              alt="cad"
              class="block transform transition duration-500 hover:scale-105"
              loading="lazy"
            />
          </div>
          <div>
            <p class="block text-lg font-medium text-title mt-3">
              But de formation
            </p>
            <p class="text-text">
              Les ingénieurs en informatique sont très appréciés pour leur
              polyvalence. Ils peuvent exercer dans de grandes SSII, start-up,
              laboratoires de R&D publics ou privés, services informatiques des
              grandes sociétés ou des administrations.
            </p>
          </div>
        </div>
      </div>
    </div>
    <h2 class="mt-12">
      S1
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
      <Card
        v-for="(sub, id) in s1"
        :key="id"
        :name="sub.name"
        :icon="sub.icon"
        :link="`/paths/info/` + sub.idx"
      />
    </section>
    <h2 class="mt-12">
      S2
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
      <Card
        v-for="(sub, id) in s2"
        :key="id"
        :name="sub.name"
        :icon="sub.icon"
        :link="`/paths/info/` + sub.idx"
      />
    </section>
    <h2 class="mt-12">
      S3
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
      <Card
        v-for="(sub, id) in s3"
        :key="id"
        :name="sub.name"
        :icon="sub.icon"
        :link="`/paths/info/` + sub.idx"
      />
    </section>
    <h2 class="mt-12">
      S4
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
      <Card
        v-for="(sub, id) in s4"
        :key="id"
        :name="sub.name"
        :icon="sub.icon"
        :link="`/paths/info/` + sub.idx"
      />
    </section>
    <h2 class="mt-12">
      S5- Génie Logiciel
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
      <Card
        v-for="(sub, id) in s5Gl"
        :key="id"
        :name="sub.name"
        :icon="sub.icon"
        :link="`/paths/info/` + sub.idx"
      />
    </section>
    <h2 class="mt-12">
      S5- Business Intelligence
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
      <Card
        v-for="(sub, id) in s5Bi"
        :key="id"
        :name="sub.name"
        :icon="sub.icon"
        :link="`/paths/info/` + sub.idx"
      />
    </section>
  </main>
</template>
<script>
import pathsData from "~/assets/info.json";
export default {
  head() {
    return {
      title: "Info",
    };
  },
  data() {
    return {
      subjects: pathsData,
    };
  },
  computed: {
    s1() {
      return this.subjects.filter((e) => e.semester == "s1");
    },
    s2() {
      return this.subjects.filter((e) => e.semester == "s2");
    },
    s3() {
      return this.subjects.filter((e) => e.semester == "s3");
    },
    s4() {
      return this.subjects.filter((e) => e.semester == "s4");
    },
    s5Gl() {
      return this.subjects.filter((e) => e.semester == "s5-gl");
    },
    s5Bi() {
      return this.subjects.filter((e) => e.semester == "s5-bi");
    },
  },
};
</script>
<style scoped>
h2 {
  @apply flex justify-center items-center text-title font-medium;
}
</style>
