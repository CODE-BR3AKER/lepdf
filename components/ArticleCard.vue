<template>
  <div class="w-full p-5">
    <div class="h-full overflow-hidden">
      <nuxt-link :to="link" class="flex md:flex-row flex-col appearance-none">
        <div class="overflow-hidden rounded-lg md:w-1/3 w-full mr-10">
          <img
            :src="img"
            :alt="title"
            class="block transform transition duration-500 hover:scale-105"
            loading="lazy"
          />
        </div>
        <div class="md:w-2/3 w-full">
          <p class="text-light text-text mt-4">
            <span class="rounded bg-main text-white font-medium mr-2 px-2 py-1">
              {{ tag }}
            </span>
            {{ date }} . {{ author }}
          </p>
          <p
            :to="link"
            class="block text-lg font-medium text-title mt-3 hover:text-links"
          >
            {{ title }} &#8594;
          </p>
          <p class="text-text max-w-full break-all font-light">
            {{ description }}
          </p>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  props: ["title", "img", "link", "date", "author", "description", "tag"],
};
</script>
