<template>
  <main class="md:max-w-6xl mx-6 md:mx-auto">
    <h1
      class="text-3xl md:text-4xl font-bold leading-none mt-16 text-title text-center mx-auto"
    >
      Resources Videos
    </h1>
    <section class="grid-3 pt-16 mx-auto justify-between">
      <div class="flex flex-col items-center">
        <List title="Prépa" :links="ap">
          <IconYtb />
        </List>
        <List title="Coding Channels" :links="coding">
          <IconYtb />
        </List>
      </div>
      <div class="flex flex-col items-center">
        <List title="Général" :links="general">
          <IconYtb />
        </List>
        <List title="Workshops" :links="workshops">
          <IconYtb />
        </List>
      </div>
      <div class="flex flex-col items-center">
        <List title="Records des séances" :links="records">
          <IconGdrive />
        </List>
      </div>
    </section>
  </main>
</template>
<script>
export default {
  async asyncData({ $content }) {
    const ap = await $content("resources", { deep: true })
      .where({ slug: "ap" })
      .fetch();
    const coding = await $content("resources", { deep: true })
      .where({ slug: "coding" })
      .fetch();
    const general = await $content("resources", { deep: true })
      .where({ slug: "general" })
      .fetch();
    const records = await $content("resources", { deep: true })
      .where({ slug: "records" })
      .fetch();
    const workshops = await $content("resources", { deep: true })
      .where({ slug: "workshops" })
      .fetch();
    return {
      ap,
      coding,
      general,
      records,
      workshops,
    };
  },
  head() {
    return {
      title: "Videos",
    };
  },
};
</script>
