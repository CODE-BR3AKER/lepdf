<template>
  <div class="cursor-pointer ml-4 focus:outline-none" @click="switchTheme">
    <IconSun v-if="getSelectedTheme === 'light'" class="h-5 w-5" />
    <IconMoon v-else class="h-5 w-5" />
  </div>
</template>

<script>
export default {
  computed: {
    /**
     * Returns the selected color mode value.
     * @returns {string} The color mode as "light" or "dark".
     */
    getSelectedTheme() {
      return this.$colorMode.value;
    },
  },
  methods: {
    /**
     * Updates the color mode value.
     */
    switchTheme() {
      this.$colorMode.preference =
        this.getSelectedTheme === "dark" ? "light" : "dark";
    },
  },
};
</script>
