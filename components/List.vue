<template>
  <div class="rounded-lg shadow-lg p-8 bg-card text-text w-full mb-2">
    <h3 class="font-medium mb-3 text-xl text-title">{{ title }}</h3>
    <ul>
      <li v-for="(link, id) in links" :key="id" class="py-1">
        <slot></slot>
        <a
          :href="link.href"
          class="cursor-pointer hover:underline"
          target="_blank"
        >
          {{ link.name }}
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ["links", "title"],
};
</script>
