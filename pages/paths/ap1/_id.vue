<template>
  <main>
    <h1
      class="text-3xl md:text-4xl font-bold leading-none mt-16 text-title text-center mx-auto"
    >
      {{ module }}
    </h1>
    <section class="pt-16 flex mx-auto justify-center items-center">
      <table class="text-title">
        <tr>
          <th>Description</th>
          <th>Année</th>
          <th>Action</th>
        </tr>
        <tr v-for="(file, id) in path" :key="id">
          <td>&#128196; {{ file.Filename }}</td>
          <td class="text-center">2018</td>
          <td class="text-center">
            <a :href="file.DirectLink" class="text-links"
              ><i class="fas fa-file-download text-2xl"></i>Télécharger</a
            >
          </td>
        </tr>
      </table>
    </section>
  </main>
</template>
<script>
import pathsData from "~/assets/paths/ap1.json";
export default {
  head() {
    return {
      title: "AP1",
    };
  },
  data() {
    return {
      module: this.$route.params.id,
      path: pathsData.filter((res) => {
        return res.Module == this.$route.params.id;
      }),
    };
  },
};
</script>
<style scoped>
table {
  width: 70vw;
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
