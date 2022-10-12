<template>
  <table class="text-title text-sm md:text-base">
    <tr>
      <th>Description</th>
      <th class="hidden md:table-cell">Année</th>
      <th>Action</th>
    </tr>
    <tr v-for="(file, id) in files" :key="id">
      <td class="w-2/3 md:w-2/4">&#128196; {{ file.Filename }}</td>
      <td class="hidden md:table-cell w-1/4 text-center">
        {{ file.Year }}
      </td>
      <td class="w-1/3 md:w-1/4 text-center">
        <a :href="file.DirectLink" class="text-links" :download="file.FileName"
          ><i class="fas fa-file-download text-2xl hidden md:inline"></i
          >Download</a
        >
      </td>
    </tr>
  </table>
</template>
<script>
export default {
  props: ["files"],
};
</script>
<style scoped>
table {
  width: 75vw;
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
@media only screen and (max-width: 768px) {
  table {
    width: 90vw;
  }
  th {
    display: none;
  }
  tr {
    background: transparent !important;
  }
  tr:not(:last-child, :first-child) {
    border-bottom: 1px solid var(--secondary);
  }
  td {
    border: 0;
    padding: 1em 0;
  }
}
</style>
