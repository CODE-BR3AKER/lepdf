<template>
  <main class="max-w-6xl mx-auto">
    <h1
      class="text-3xl md:text-4xl font-bold leading-none mt-16 text-title text-center mx-auto"
    >
      Travail et Stage
    </h1>
    <h2>
      Essentiels
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
      Où chercher
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
        v-for="(platform, id) in platforms"
        :key="id"
        :name="platform.name"
        :icon="platform.icon"
        :link="platform.href"
      />
    </section>
    <h2>
      Conseils et Divers
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
        v-for="(ad, id) in advice"
        :key="id"
        :name="ad.name"
        :icon="ad.icon"
        :link="ad.href"
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
          icon: "fas fa-file",
          href: "https://www.careercup.com/resume",
          name: "Build Resume",
        },
        {
          icon: "fas fa-signature",
          href: "https://www.indeed.com/career-advice/resumes-cover-letters/how-to-write-a-cover-letter",
          name: "Cover letter",
        },
        {
          icon: "fas fa-briefcase",
          href: "https://www.9rayti.com/article/conseils-trouver-stage-entreprise",
          name: "Internships",
        },
        {
          icon: "fas fa-file-powerpoint",
          href: "https://www.creeruncv.com/exemple-de-cv/gratuit/",
          name: "Templates",
        },
      ],
      platforms: [
        {
          icon: "fab fa-linkedin",
          href: "https://linkedin.com",
          name: "Linkedin",
        },
        {
          icon: "fas fa-link",
          href: "https://rekrute.com",
          name: "Rekrute",
        },
        {
          icon: "fas fa-link",
          href: "https://indeed.com",
          name: "Indeed",
        },
        {
          icon: "fas fa-link",
          href: "https://remoteok.com",
          name: "Remote OK",
        },
      ],
      advice: [
        {
          icon: "fab fa-youtube",
          href: "https://youtu.be/Kg_JzrzYkfw",
          name: "3 resume don'ts",
        },
        {
          icon: "fab fa-youtube",
          href: "https://youtu.be/S06zMXpys6I",
          name: "Développeur: entretiens",
        },
        {
          icon: "fab fa-youtube",
          href: "https://youtu.be/7H08TcRX5SE",
          name: "Working remotely",
        },
        {
          icon: "fab fa-youtube",
          href: "https://youtu.be/G-j39crM4mc",
          name: "DIL of Civil engineer",
        },
        {
          icon: "fab fa-youtube",
          href: "https://www.youtube.com/watch?v=Wc2keUXLQdE",
          name: "DIL of Software Enginner",
        },
        {
          icon: "fab fa-youtube",
          href: "https://www.youtube.com/watch?v=mFHnIMjKjhI",
          name: "Ingénieur Énergétique",
        },
        {
          icon: "fab fa-youtube",
          href: "https://www.youtube.com/watch?v=PhU2BT-ZUxM",
          name: "DIL Mechanical Engineer",
        },
        {
          icon: "fab fa-youtube",
          href: "https://www.youtube.com/watch?v=xC-c7E5PK0Y",
          name: "Data Science",
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
