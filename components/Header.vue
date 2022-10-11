<template>
  <header
    class="body-font mb-12 lg:mt-8 mt-3 text-lg font-light shadow-sm md:shadow-none"
  >
    <div
      class="container mx-auto flex px-8 lg:px-12 flex-wrap flex-row items-center justify-between pb-4 md:pb-0"
    >
      <nuxt-link
        id="logo"
        to="/"
        class="flex title-font font-bold items-center text-main mb-0 text-xl md:text-2xl"
      >
        <svg
          class="w-6 md:w-full"
          width="41"
          height="46"
          viewBox="0 0 41 46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.09996 8.19992H8.19992V14.3499H28.6997V8.19992H32.7997V18.4498H36.8996V4.09996H24.2308C23.3698 1.72198 21.1148 0 18.4498 0C15.7848 0 13.5299 1.72198 12.6689 4.09996H0V40.9996H14.3499V36.8996H4.09996V8.19992ZM18.4498 4.09996C19.5773 4.09996 20.4998 5.02245 20.4998 6.14994C20.4998 7.27743 19.5773 8.19992 18.4498 8.19992C17.3223 8.19992 16.3998 7.27743 16.3998 6.14994C16.3998 5.02245 17.3223 4.09996 18.4498 4.09996Z"
            fill="#F15523"
          />
          <path
            d="M35.465 36.6947C36.285 35.2597 36.9 33.6197 36.9 31.7747C36.9 26.6498 32.8001 22.5498 27.6751 22.5498C22.5502 22.5498 18.4502 26.6498 18.4502 31.7747C18.4502 36.8997 22.5502 40.9996 27.6751 40.9996C29.5201 40.9996 31.1601 40.3846 32.5951 39.5646L38.13 45.0996L41 42.2296L35.465 36.6947V36.6947ZM27.6751 36.8997C24.8051 36.8997 22.5502 34.6447 22.5502 31.7747C22.5502 28.9047 24.8051 26.6498 27.6751 26.6498C30.5451 26.6498 32.8001 28.9047 32.8001 31.7747C32.8001 34.6447 30.5451 36.8997 27.6751 36.8997Z"
            fill="#F49C6D"
          />
        </svg>
        <span class="ml-3">LePDF</span><span class="text-accent">.live</span>
      </nuxt-link>
      <nav
        class="hidden md:mx-auto md:flex flex-wrap items-center justify-center text-title"
      >
        <a class="mr-4" href="/#about">About</a>
        <nuxt-link class="mr-4" to="/paths">Resources</nuxt-link>
        <nuxt-link to="/blog" class="mr-4">Blog</nuxt-link>
        <nuxt-link to="/work" class="mr-4">Work</nuxt-link>
        <nuxt-link to="/search" class="mr-4">
          <IconSearch />
        </nuxt-link>
        <a href="javascript:void(0)">
          <IconBell />
        </a>
        <slot name="switch"> </slot>
      </nav>
      <div class="md:hidden text-title flex items-center">
        <a href="#">
          <IconBell />
        </a>
        <slot name="switchMobile"> </slot>
        <i class="fas fa-bars cursor-pointer text-2xl" @click="toggle"></i>
      </div>
      <a
        class="hidden text-text md:inline-flex items-center p-2 border border-title hover:text-title"
        href="https://github.com/CODE-BR3AKER/ensah"
        target="_blank"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="mr-2"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 0C5.37 0 0 5.37 0 12C0 17.31 3.435 21.795 8.205 23.385C8.805 23.49 9.03 23.13 9.03 22.815C9.03 22.53 9.015 21.585 9.015 20.58C6 21.135 5.22 19.845 4.98 19.17C4.845 18.825 4.26 17.76 3.75 17.475C3.33 17.25 2.73 16.695 3.735 16.68C4.68 16.665 5.355 17.55 5.58 17.91C6.66 19.725 8.385 19.215 9.075 18.9C9.18 18.12 9.495 17.595 9.84 17.295C7.17 16.995 4.38 15.96 4.38 11.37C4.38 10.065 4.845 8.985 5.61 8.145C5.49 7.845 5.07 6.615 5.73 4.965C5.73 4.965 6.735 4.65 9.03 6.195C9.99 5.925 11.01 5.79 12.03 5.79C13.05 5.79 14.07 5.925 15.03 6.195C17.325 4.635 18.33 4.965 18.33 4.965C18.99 6.615 18.57 7.845 18.45 8.145C19.215 8.985 19.68 10.05 19.68 11.37C19.68 15.975 16.875 16.995 14.205 17.295C14.64 17.67 15.015 18.39 15.015 19.515C15.015 21.12 15 22.41 15 22.815C15 23.13 15.225 23.505 15.825 23.385C18.2072 22.5807 20.2772 21.0497 21.7437 19.0074C23.2101 16.965 23.9993 14.5143 24 12C24 5.37 18.63 0 12 0Z"
            fill="currentColor"
          />
        </svg>
        Star on Github
      </a>
    </div>
    <div class="block md:hidden">
      <nav
        v-if="isOpen"
        class="mx-2 flex flex-col items-center text-center md:hidden mt-8 rounded-md bg-card shadow-lg h-48 pt-4"
      >
        <nuxt-link class="mobile-link" to="/">Home</nuxt-link>
        <nuxt-link class="mobile-link" to="/#about">About</nuxt-link>
        <nuxt-link class="mobile-link" to="/blog">Blog</nuxt-link>
        <nuxt-link class="mobile-link" to="/work">Work</nuxt-link>
      </nav>
    </div>
  </header>
</template>
<style scoped>
nav a:hover {
  color: var(--links);
}
.nuxt-link-exact-active:not(#logo) {
  color: var(--accent) !important;
}
.mobile-link {
  @apply block px-3 py-2 text-sm text-text font-medium text-center;
}
</style>
<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>
