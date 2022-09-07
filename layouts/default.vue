<template>
  <div>
    <Header>
      <template v-slot:switch>
        <SwitchColor />
      </template>
    </Header>
    <Nuxt />
    <Footer />
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
}
.dark {
  --background: #001e26;
  --card: #002631;
  --text: #d7d7d7;
  --title: #ffffff;
  --secondary: #003543;
}

body {
  font-family: Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
  max-width: 1216px;
  margin: 0 auto;
  padding: 0px;
  background: var(--background);
}
</style>
