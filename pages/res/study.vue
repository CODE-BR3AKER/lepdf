<template>
  <main class="md:max-w-6xl mx-6 md:mx-auto">
    <h1
      class="text-3xl md:text-4xl font-bold leading-none mt-16 text-title text-center mx-auto"
    >
      Formations En Ligne
    </h1>
    <h2>
      AP
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
        v-for="(course, id) in ap"
        :key="id"
        :name="course.name"
        :icon="course.icon"
        :link="course.href"
      />
    </section>
    <h2>
      Info
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
        v-for="(course, id) in info"
        :key="id"
        :name="course.name"
        :icon="course.icon"
        :link="course.href"
      />
    </section>
    <h2>
      Data
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
        v-for="(course, id) in data"
        :key="id"
        :name="course.name"
        :icon="course.icon"
        :link="course.href"
      />
    </section>
  </main>
</template>
<script>
export default {
  data() {
    return {
      ap: [
        {
          icon: "fab fa-grav",
          href: "https://oyc.yale.edu/NODE/206",
          name: "Yale University: Newtonian Physics",
        },
        {
          icon: "fas fa-atom",
          href: "https://oyc.yale.edu/NODE/211",
          name: "Yale University: Quantum Mechanics",
        },
        {
          icon: "fas fa-vials",
          href: "https://oyc.yale.edu/chemistry/chem-125a",
          name: "Yale University: Organic Chemistry",
        },
        {
          icon: "fab fa-free-code-camp",
          href: "https://www.youtube.com/watch?v=JnTa9XtvmfI",
          name: "Free Code Camp: Linear Algebra 1",
        },
        {
          icon: "fab fa-free-code-camp",
          href: "https://www.youtube.com/watch?v=DJ6YwBN7Ya8",
          name: "Free Code Camp: Linear Algebra 2",
        },
        {
          icon: "fas fa-infinity",
          href: "https://www.khanacademy.org/math/ap-calculus-ab",
          name: "Khan Academy: AP Calculus AB",
        },
        {
          icon: "fas fa-infinity",
          href: "https://www.khanacademy.org/math/ap-calculus-bc",
          name: "Khan Academy: AP Calculus BC",
        },
        {
          icon: "fas fa-language",
          href: "https://www.engvid.com/",
          name: "Eng Vid: Advance Your English Skills",
        },
      ],
      info: [
        {
          icon: "fas fa-sitemap",
          href: "https://cs50.harvard.edu/x/2022/",
          name: "Harvard: CS-50",
        },
        {
          icon: "fas fa-server",
          href: "https://web.stanford.edu/class/cs142/lectures.html",
          name: "Stanford: Web Dev CS-142",
        },
        {
          icon: "fas fa-lock",
          href: "https://web.stanford.edu/class/cs253/",
          name: "Stanford: Security CS-253",
        },
        {
          icon: "fas fa-laptop-code",
          href: "https://www.theodinproject.com/",
          name: "The Odin Project",
        },
        {
          icon: "fab fa-free-code-camp",
          href: "https://www.freecodecamp.org/",
          name: "Free Code Camp",
        },
        {
          icon: "fas fa-directions",
          href: "https://roadmap.sh",
          name: "Coding Roadmap",
        },
        {
          icon: "fas fa-code",
          href: "https://www.udacity.com/school-of-programming",
          name: "Udacity: Programming",
        },
        {
          icon: "fas fa-code-branch",
          href: "https://learngitbranching.js.org/",
          name: "Git Branching",
        },
      ],
      data: [
        {
          icon: "fab fa-github",
          href: "https://github.com/academic/awesome-datascience",
          name: "Awesome Data Science",
        },
        {
          icon: "fas fa-clipboard-list",
          href: "https://www.learndatasci.com/",
          name: "Learn Data Sci",
        },
        {
          icon: "fab fa-python",
          href: "https://www.learnpython.org/",
          name: "Learn Python",
        },
        {
          icon: "fas fa-chart-pie",
          href: "https://www.udacity.com/school-of-data-science",
          name: "Udacity: Data Science",
        },
        {
          icon: "fas fa-certificate",
          href: "https://www.coursera.org/professional-certificates/ai-engineer",
          name: "IBM AI Engineering",
        },
        {
          icon: "fas fa-brain",
          href: "https://www.edx.org/course/cs50s-introduction-to-artificial-intelligence-with-python",
          name: "HarvardX: AI with Python",
        },
        {
          icon: "fas fa-directions",
          href: "https://i.am.ai/roadmap",
          name: "AI roadmap",
        },
        {
          icon: "fas fa-robot",
          href: "https://developers.google.com/machine-learning/crash-course",
          name: "Google ML course",
        },
      ],
    };
  },
  head() {
    return {
      title: "Formations en ligne",
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
