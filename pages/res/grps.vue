<template>
  <main class="md:max-w-6xl mx-6 md:mx-auto">
    <h1
      class="text-3xl md:text-4xl font-bold leading-none mt-16 text-title text-center mx-auto"
    >
      Groupes &amp; Pages
    </h1>
    <section class="grid-3 pt-16 justify-between">
      <div>
        <List title="Coding Channels" :links="coding">
          <IconFb />
        </List>
        <List title="Civil" :links="general">
          <IconInsta />
        </List>
        <List title="Data Science" :links="general">
          <IconInsta />
        </List>
        <List title="Prepa" :links="general">
          <IconFb />
        </List>
      </div>
      <div>
        <List title="Général" :links="general">
          <IconYtb />
        </List>
        <List title="Workshops" :links="workshops">
          <IconInsta />
        </List>
      </div>
      <div>
        <List title="Records des séances" :links="records">
          <IconFb />
        </List>
      </div>
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
      workshops: [
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
      records: [
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
