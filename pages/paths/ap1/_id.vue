<template>
  <main>
    <h1
      class="text-3xl md:text-4xl font-bold leading-none mt-16 text-title text-center mx-auto"
    >
      {{ module }}
    </h1>
    <section class="pt-16 flex mx-auto justify-center items-center">
      <table class="text-title text-sm md:text-base">
        <tr>
          <th>Description</th>
          <th class="hidden md:table-cell">Année</th>
          <th>Action</th>
        </tr>
        <tr v-for="(file, id) in files" :key="id">
          <td class="w-2/3 md:w-2/4">&#128196; {{ file.Filename }}</td>
          <td class="hidden md:table-cell w-1/4 text-center">2018</td>
          <td class="w-1/3 md:w-1/4 text-center">
            <a
              :href="file.DirectLink"
              class="text-links"
              :download="file.FileName"
              ><i class="fas fa-file-download text-2xl"></i>Télécharger</a
            >
          </td>
        </tr>
      </table>
    </section>
  </main>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const path = await $content("paths", params.slug).fetch();
    return {
      path,
    };
  },
  head() {
    return {
      title: "AP1",
    };
  },
  data() {
    return {
      module: this.$route.params.id,
    };
  },
  computed: {
    files() {
      return this.path[0].body.filter((res) => {
        return res.Module == this.$route.params.id;
      });
    },
  },
};
</script>
<style scoped>
table {
  width: 60vw;
}
@media only screen and (max-width: 768px) {
  table {
    width: 90vw;
  }
}
th {
  background: var(--main);
  color: white;
}
table,
th,
td {
  border: 2px solid var(--background);
  border-collapse: collapse;
  padding: 1em 2em;
}
tr:nth-child(even) {
  background-color: var(--secondary);
}
</style>
