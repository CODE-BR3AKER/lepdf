<template>
  <main class="max-w-6xl mx-auto">
    <h1
      class="text-3xl md:text-4xl font-bold leading-none mt-16 text-title text-center mx-auto"
    >
      Travail et Stage
    </h1>
    <h2>
      Étapes
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        aria-hidden="true"
        role="img"
        width="32"
        height="32"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 24 24"
        class="iconify iconify--mdi h-4 w-4"
      >
        <path
          d="M16.59 5.59L18 7l-6 6l-6-6l1.41-1.41L12 10.17l4.59-4.58m0 6L18 13l-6 6l-6-6l1.41-1.41L12 16.17l4.59-4.58z"
          fill="currentColor"
        ></path>
      </svg>
    </h2>
    <section class="my-12 flex mx-auto justify-center items-center flex-wrap">
      <HyperCard
        v-for="(tool, id) in tools"
        :key="id"
        :name="tool.name"
        :icon="tool.icon"
        :link="tool.href"
      />
    </section>
    <h2>
      Resources
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        aria-hidden="true"
        role="img"
        width="32"
        height="32"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 24 24"
        class="iconify iconify--mdi h-4 w-4"
      >
        <path
          d="M16.59 5.59L18 7l-6 6l-6-6l1.41-1.41L12 10.17l4.59-4.58m0 6L18 13l-6 6l-6-6l1.41-1.41L12 16.17l4.59-4.58z"
          fill="currentColor"
        ></path>
      </svg>
    </h2>
    <section class="grid-3 pt-12 mx-auto">
      <List title="Where to look" :links="platforms">
        <IconLink />
      </List>
      <List title="Manual entries" :links="jobs">
        <IconOffer />
      </List>
      <List title="Career Advice" :links="advice">
        <IconYtb />
      </List>
    </section>
  </main>
</template>
<script>
export default {
  async asyncData({ $content }) {
    const jobs = await $content("jobs").sortBy("createdAt", "desc").fetch();
    return {
      jobs,
    };
  },
  data() {
    return {
      tools: [
        {
          icon: "file",
          href: "https://www.careercup.com/resume",
          name: "Build Resume",
        },
        {
          icon: "signature",
          href: "https://www.indeed.com/career-advice/resumes-cover-letters/how-to-write-a-cover-letter",
          name: "Cover letter",
        },
        {
          icon: "briefcase",
          href: "https://www.9rayti.com/article/conseils-trouver-stage-entreprise",
          name: "Internships",
        },
        {
          icon: "file-powerpoint",
          href: "https://www.creeruncv.com/exemple-de-cv/gratuit/",
          name: "Templates",
        },
      ],
      platforms: [
        {
          href: "https://rekrute.com",
          name: "Rekrute",
        },
        {
          href: "https://linkedin.com",
          name: "Linkedin",
        },
        {
          href: "https://indeed.com",
          name: "Indeed",
        },
        {
          href: "https://remoteok.com",
          name: "Remote OK",
        },
        {
          href: "https://remotify.me",
          name: "Remotify Me",
        },
      ],
      advice: [
        {
          href: "https://youtu.be/Kg_JzrzYkfw",
          name: "3 resume don'ts",
        },
        {
          href: "https://youtu.be/S06zMXpys6I",
          name: "Développeur·se: entretiens",
        },
        {
          href: "https://youtu.be/7H08TcRX5SE",
          name: "Working remotely as a developer",
        },
        {
          href: "https://youtu.be/G-j39crM4mc",
          name: "DayInLife of Civil engineer",
        },
        {
          href: "https://www.youtube.com/watch?v=Wc2keUXLQdE",
          name: "DayInLife of Software enginner",
        },
        {
          href: "https://www.youtube.com/watch?v=mFHnIMjKjhI",
          name: "Ingénieur efficacité énergétique",
        },
      ],
    };
  },
  head() {
    return {
      title: "Work",
    };
  },
};
</script>
<style scoped>
main {
  min-height: 100vh;
}
h2 {
  @apply flex justify-center items-center text-title font-medium mt-12;
}
</style>
