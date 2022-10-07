<template>
  <main class="md:max-w-6xl mx-6 md:mx-auto min-h-screen">
    <h1
      class="text-3xl md:text-4xl font-bold leading-none mt-16 text-title text-center mx-auto"
    >
      Groupes &amp; Pages
    </h1>
    <section class="grid-3 pt-16 justify-between">
      <div class="flex flex-col items-center">
        <List title="Facebook" :links="fb">
          <IconFb />
        </List>
      </div>
      <div class="flex flex-col items-center">
        <List title="Instagram" :links="insta">
          <IconInsta />
        </List>
      </div>
      <div class="flex flex-col items-center">
        <List title="Whatsapp" :links="wtsp">
          <IconWtsp />
        </List>
      </div>
    </section>
  </main>
</template>
<script>
export default {
  async asyncData({ $content }) {
    const fb = await $content("resources", { deep: true })
      .where({ slug: "fb" })
      .fetch();
    const insta = await $content("resources", { deep: true })
      .where({ slug: "insta" })
      .fetch();
    const wtsp = await $content("resources", { deep: true })
      .where({ slug: "wtsp" })
      .fetch();
    return {
      fb,
      insta,
      wtsp,
    };
  },
  head() {
    return {
      title: "Groupes et Pages",
    };
  },
};
</script>
