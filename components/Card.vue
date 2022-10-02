<template>
  <nuxt-link
    :to="link"
    class="h-max text-title bg-card shadow-lg px-2 py-8 flex flex-col items-center mx-1 sm:mx-2 my-4 w-2/5 lg:w-1/5 md:w-1/4 sm:w-1/3 transform transition duration-500 hover:-translate-y-1 rounded-lg"
  >
    <i :class="icon + ` text-6xl text-main`"></i>
    <p class="text-sm md:text-base font-bold mt-4 text-center">{{ name }}</p>
  </nuxt-link>
</template>
<script>
export default {
  props: ["icon", "name", "link"],
};
</script>
