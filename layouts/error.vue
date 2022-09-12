<template>
  <main
    class="flex flex-col items-center justify-center text-center text-color-text mx-8 mt-12"
  >
    <h2 class="font-medium text-color-main text-2xl md:text-3xl mb-4">
      Ooops: {{ error.message }} - {{ error.statusCode }}
    </h2>
    <img
      src="/404.svg"
      alt=""
      class="block w-auto md:w-1/3 my-10"
      loading="lazy"
    />

    <nuxt-link
      to="/"
      class="block mt-4 text-xl px-4 py-2 bg-main text-white border border-main hover:bg-transparent hover:text-main"
    >
      <i class="fas fa-home mr-2"></i>Go Home
    </nuxt-link>
  </main>
</template>
<script>
export default {
  props: ["error"],
};
</script>
