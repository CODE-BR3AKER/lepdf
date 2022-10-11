<template>
  <form
    class="flex mx-4 md:mx-auto max-w-5xl border border-secondary rounded-sm md:rounded-lg"
  >
    <select
      class="md:w-1/12 p-4 bg-secondary text-text md:block hidden border-r-8 border-transparent"
    >
      <option value="" selected disabled hidden>Path</option>
      <option>AP-1</option>
      <option>AP-2</option>
      <option>Info</option>
      <option>Data</option>
      <option>Civil</option>
      <option>Mechanics</option>
      <option>Energy</option>
      <option>Environment</option>
    </select>
    <slot></slot>
    <button
      class="hidden bg-main text-white w-1/12 p-4 md:flex justify-center items-center"
    >
      <IconSearch />
    </button>
  </form>
</template>
