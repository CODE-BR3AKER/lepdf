<template>
  <form
    class="flex mx-4 md:mx-auto max-w-5xl border border-secondary rounded-sm md:rounded-lg"
  >
    <select class="md:w-1/12 p-4 bg-secondary text-text md:block hidden">
      <option>AP-1</option>
      <option>AP-2</option>
      <option>Info</option>
      <option>Data</option>
    </select>
    <input
      type="search"
      name="search"
      id="search"
      placeholder="Search Module, Cours, Chapitre..."
      class="w-full md:w-10/12 px-2 py-1 md:p-4 bg-search md:bg-transparent text-sm md:text-base font-light"
    />
    <button
      class="hidden bg-main text-white w-1/12 p-4 md:flex justify-center items-center"
    >
      <IconSearch />
    </button>
  </form>
</template>
