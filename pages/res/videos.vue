<template>
  <main class="md:max-w-6xl max-w-md mx-auto">
    <h1
      class="text-3xl md:text-4xl font-bold leading-none mt-16 text-title text-center mx-auto"
    >
      Resources Videos
    </h1>
    <section class="grid-3 pt-16 mx-auto">
      <List title="Coding Channels" :links="coding">
        <IconYtb />
      </List>
      <List title="Général" :links="general">
        <IconYtb />
      </List>
      <List title="Records des Scéances" :links="coding">
        <IconGdrive />
      </List>
      <List title="Ingénieurie Civil" :links="coding">
        <IconYtb />
      </List>
      <List title="Workshops" :links="coding">
        <IconYtb />
      </List>
    </section>
  </main>
</template>
<script>
export default {
  data() {
    return {
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
      general: [
        {
          href: "https://www.youtube.com/c/StuffMadeHere",
          name: "Stuff Made Here",
        },
      ],
    };
  },
  head() {
    return {
      title: "Videos",
    };
  },
};
</script>
<style scoped>
.grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
}
@media only screen and (max-width: 768px) and (min-width: 641px) {
  .grid-3 {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
  }
}
@media only screen and (max-width: 640px) {
  .grid-3 {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 2rem;
  }
}
</style>
