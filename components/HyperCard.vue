<template>
  <a
    :href="link"
    target="_blank"
    class="cursor-pointer text-title bg-card shadow-lg px-2 py-16 sm:py-8 flex flex-col items-center mx-8 sm:mx-2 my-4 w-full lg:w-1/5 md:w-1/4 sm:w-1/3 transform transition duration-500 hover:-translate-y-1 rounded-lg"
  >
    <i :class="icon + ` text-6xl text-main`"></i>
    <p class="text-base font-bold mt-4 text-center">{{ name }}</p>
  </a>
</template>
<script>
export default {
  props: ["icon", "name", "link"],
};
</script>
