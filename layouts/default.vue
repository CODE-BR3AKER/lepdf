<template>
  <div class="relative overflow-hidden">
    <span class="bg-circle bg-circle-main hidden md:inline-flex"></span>
    <span class="bg-circle bg-circle-secondary hidden md:inline-flex"></span>
    <Tabs class="block md:hidden fixed bottom-0 tabs-shadow" />
    <Header>
      <template v-slot:switch>
        <SwitchColor />
      </template>
      <template v-slot:switchMobile>
        <SwitchColor />
      </template>
    </Header>
    <Nuxt class="md:pb-0 pb-24" />
    <Footer class="hidden md:block" />
  </div>
</template>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
* {
  image-rendering: smooth;
  image-rendering: -webkit-optimize-contrast !important;
}
:root {
  --main: #f15523;
  --accent: #f49c6d;
  --links: #29a5e3;
}
.light {
  --background: #ffffff;
  --card: #fefefe;
  --text: #454545;
  --title: #000000;
  --secondary: #f0f0f0;
  --search: #f6f6f6;
  --url: url("~assets/icons/hashtag-light.svg");
}
.dark {
  --background: #001e26;
  --card: #002631;
  --text: #d7d7d7;
  --title: #ffffff;
  --secondary: #003543;
  --search: #003543;
  --url: url("~assets/icons/hashtag-dark.svg");
}

body {
  font-family: Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
  margin: 0 auto;
  padding: 0px;
  background: var(--background);
}
.bg-circle {
  position: absolute !important;
  background-image: radial-gradient(
    50% 50% at 50% 50%,
    #f15523 0,
    hsla(0, 0%, 100%, 0) 100%
  );
  opacity: 0.15 !important;
  pointer-events: none !important;
  width: 640px !important;
  height: 640px !important;
}
.bg-circle-main {
  left: -20% !important;
  top: -6rem !important;
}
.bg-circle-secondary {
  right: -20% !important;
  top: 30rem !important;
}
.tabs-shadow {
  box-shadow: 0 -10px 15px -3px rgb(0 0 0 / 0.1);
  -webkit-box-shadow: 0 -10px 15px -3px rgb(0 0 0 / 0.1);
  -moz-box-shadow: 0 -10px 15px -3px rgb(0 0 0 / 0.1);
}
.grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
}
@media only screen and (max-width: 768px) and (min-width: 641px) {
  .grid-3 {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
  }
}
@media only screen and (max-width: 640px) {
  .grid-3 {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 2rem;
  }
}
</style>
