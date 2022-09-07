<template>
  <nuxt-link
    :to="link"
    class="text-title bg-card shadow-lg px-2 py-8 flex flex-col items-center m-2 md:w-56 w-full transform transition duration-500 hover:-translate-y-1 rounded-lg"
  >
    <i :class="`fas fa-` + icon + ` text-6xl text-main`"></i>
    <p class="text-base font-bold mt-4 text-center">{{ name }}</p>
  </nuxt-link>
</template>
<script>
export default {
  props: ["icon", "name", "link"],
};
</script>
