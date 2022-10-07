<template>
  <main class="max-w-6xl mx-auto">
    <hr class="bg-text mt-4 lg:mx-12 mx-4" />
    <h1
      class="text-3xl md:text-4xl font-bold leading-none my-16 text-title text-center mx-auto"
    >
      AP2
    </h1>
    <div class="my-12 mx-auto max-w-4xl px-6 sm:px-8 md:px-0">
      <div class="h-full overflow-hidden">
        <div class="flex md:flex-row flex-col appearance-none">
          <div class="overflow-hidden rounded-lg w-full mr-10">
            <img
              src="/paths/ap.jpg"
              alt="cad"
              class="block transform transition duration-500 hover:scale-105"
              loading="lazy"
            />
          </div>
          <div>
            <p class="block text-lg font-medium text-title my-3">
              But de formation
            </p>
            <p class="text-text">
              Initier les élèves par un enseignement général sur les sciences
              fondamentales afin d'approfondir leur connaissance technique et
              méthodologique et de leur donner une vue d'ensemble sur ce qui
              pourra faire l'objet de leur spécialisation.
            </p>
          </div>
        </div>
      </div>
    </div>
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
        :link="`/paths/ap2/` + sub.idx"
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
        :link="`/paths/ap2/` + sub.idx"
      />
    </section>
  </main>
</template>
<script>
import pathsData from "~/assets/data/ap2.json";
export default {
  head() {
    return {
      title: "AP-2",
    };
  },
  data() {
    return {
      subjects: pathsData,
    };
  },
  computed: {
    s3() {
      return this.subjects.filter((e) => e.semester == "s3");
    },
    s4() {
      return this.subjects.filter((e) => e.semester == "s4");
    },
  },
};
</script>
<style scoped>
h2 {
  @apply flex justify-center items-center text-title font-medium;
}
</style>
