<template>
  <div>
    <Header />
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
  --text: #2e2e2e;
}
body {
  font-family: Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
  max-width: 1216px;
  margin: 0 auto;
  padding: 0px;
}
</style>
