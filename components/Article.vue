<template>
  <div class="w-full p-5">
    <div class="h-full overflow-hidden">
      <nuxt-link :to="link" class="block appearance-none">
        <div class="overflow-hidden rounded-lg">
          <img
            :src="img"
            :alt="title"
            class="block transform transition duration-500 hover:scale-105"
            loading="lazy"
          />
        </div>
        <p class="text-light text-text mt-4">
          <span class="rounded bg-main text-white font-medium mr-2 px-2 py-1">
            {{ category }}
          </span>
          {{ date }} . {{ author }}
        </p>
        <p
          :to="link"
          class="block text-lg md:text-xl font-medium text-title mt-3 hover:text-links"
        >
          {{ title }} &#8594;
        </p>
      </nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  props: ["title", "img", "link", "category", "date", "author"],
};
</script>
