<template>
  <main class="max-w-6xl mx-auto">
    <h1
      class="text-3xl md:text-4xl font-bold leading-none mt-16 text-title text-center mx-auto"
    >
      Travail et Stage
    </h1>
    <h2>
      Étapes
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
        v-for="(tool, id) in tools"
        :key="id"
        :name="tool.name"
        :icon="tool.icon"
        :link="tool.href"
      />
    </section>
    <h2>
      Resources
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
    <section class="grid-3 pt-12 mx-auto">
      <List title="Where to look" :links="coding">
        <IconYtb />
      </List>
      <List title="Manual entries" :links="coding">
        <IconYtb />
      </List>
      <List title="Career Advice" :links="coding">
        <IconYtb />
      </List>
    </section>
  </main>
</template>
<script>
export default {
  data() {
    return {
      tools: [
        {
          icon: "file",
          href: "https://lushprojects.com/circuitjs/circuitjs.html",
          name: "Build Resume",
        },
        {
          icon: "signature",
          href: "https://simulator.io/",
          name: "Cover letter",
        },
        {
          icon: "briefcase",
          href: "https://matrixcalc.org/fr/",
          name: "Stage",
        },
        {
          icon: "share-alt",
          href: "https://www.periodni.com/fr/",
          name: "Build in public",
        },
      ],
      coding: [
        {
          href: "https://www.youtube.com/c/Freecodecamp",
          name: "Freecodecamp",
        },
        {
          href: "https://www.youtube.com/c/TraversyMedia",
          name: "Traversy Media",
        },
        {
          href: "https://www.youtube.com/c/Fireship",
          name: "Fireship io",
        },
        {
          href: "https://www.youtube.com/c/gotreehouse",
          name: "Treehouse",
        },
        {
          href: "https://www.youtube.com/c/FKnight",
          name: "Forest Knight",
        },
        {
          href: "https://www.youtube.com/c/WebDevSimplified",
          name: "Web deb simplified",
        },
      ],
    };
  },
  head() {
    return {
      title: "Work",
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
