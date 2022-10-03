<template>
  <main class="md:max-w-6xl mx-0 md:mx-auto">
    <h1
      class="text-3xl md:text-4xl font-bold leading-none mt-16 text-title text-center mx-auto"
    >
      Outils Scinetifiques
    </h1>
    <section class="my-12 flex mx-auto justify-center items-center flex-wrap">
      <HyperCard
        v-for="(tool, id) in tools"
        :key="id"
        :name="tool.name"
        :icon="tool.icon"
        :link="tool.href"
      />
    </section>
  </main>
</template>
<script>
export default {
  data() {
    return {
      tools: [
        {
          icon: "fas fa-plug",
          href: "https://lushprojects.com/circuitjs/circuitjs.html",
          name: "Circuits Simulator",
        },
        {
          icon: "fas fa-microchip",
          href: "https://simulator.io/",
          name: "Logic Circuits",
        },
        {
          icon: "fas fa-border-none",
          href: "https://matrixcalc.org/fr/",
          name: "Matrix Calculator",
        },
        {
          icon: "fas fa-infinity",
          href: "https://www.integral-calculator.com/",
          name: "Integral Calculator",
        },
        {
          icon: "fas fa-atom",
          href: "https://www.periodni.com/fr/",
          name: "Table Periodique",
        },
        {
          icon: "fab fa-fedora",
          href: "https://bellard.org/jslinux/",
          name: "Linux on the Web",
        },
      ],
    };
  },
  head() {
    return {
      title: "Outils Scientifiques",
    };
  },
};
</script>
