<template>
  <main class="max-w-6xl mx-auto">
    <Hero />
    <h2>
      Derniers posts
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

    <section
      class="flex justify-center md:flex-row flex-col items-center my-12 mx-auto max-w-5xl px-6 sm:px-8 md:px-0"
    >
      <!-- post.slug-->
      <Article
        v-for="(post, id) in posts"
        :key="id"
        :title="post.title"
        :img="post.thumb"
        :link="`/blog/` + post.slug"
        :date="formatDate(post.updatedAt)"
        :author="post.author.name"
      />
    </section>
    <h2 class="mt-12" id="paths">
      Filieres
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
      <Card
        v-for="(sub, id) in subjects"
        :key="id"
        :name="sub.name"
        :icon="sub.icon"
        :link="`paths/` + sub.idx"
      />
    </section>
    <h2 class="mt-12" id="about">
      À propos
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
    <section
      class="my-12 flex justify-between lg:flex-row flex-col text-text px-8 lg:px-0 max-w-5xl mx-auto"
    >
      <img src="ensah.jpg" alt="ensah pic" class="mx-4" loading="lazy" />
      <div class="mx-4 lg:mx-10 flex flex-col justify-around">
        <h3 class="font-medium text-3xl mt-8 lg:mt-0 text-title">
          L'idée de site
        </h3>
        <p class="text-lg max-w-xl mb-4 lg:mb-0">
          Initiative d’un ensahist, pour documenter les resources souvent
          partagés dans les groupes whatsapp et les drives pour une mellieur
          accéssibilité. Le contenu maintenant est gérer par l’association des
          étudiants phoenix.
        </p>
        <svg
          class="mb-4 lg:mb-0"
          width="99"
          height="56"
          viewBox="0 0 99 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M45.0331 1.07091C43.4064 2.88948 41.8285 7.21605 40.1475 14.4692C39.2629 18.2843 38.2907 22.4124 37.9866 23.6423C37.4132 25.9639 34.146 30.7773 32.8506 31.2091C31.9666 31.5035 30.9097 28.9557 30.9097 26.5291C30.9097 24.2539 29.8517 23.6574 28.7191 25.2938C28.2225 26.0116 27.1555 27.3301 26.349 28.2246L24.8814 29.8502L25.2796 28.3422C26.4903 23.7551 28.4407 21.5909 30.1056 22.9891C31.2281 23.9318 31.8671 23.1761 30.9217 22.0234C29.5673 20.3719 28.2195 21.0366 23.4209 25.7221L18.6915 30.3394L18.3583 28.265C17.8397 25.0344 17.3252 24.5471 14.7954 24.8909L12.5451 25.1961L13.4154 23.0892C14.3876 20.7338 14.2863 17.3976 13.2318 17.0478C12.2286 16.7148 8.52618 20.1994 7.67555 22.2773C6.36353 25.4826 7.33875 25.4512 9.45967 22.22C13.0422 16.7625 13.9847 17.7065 11.4864 24.2491C10.8897 25.8131 10.5416 27.2354 10.7139 27.4091C10.8861 27.5835 12.1684 27.2722 13.5638 26.7179C16.5205 25.5423 17.175 26.0393 17.1905 29.4726C17.1982 31.2568 16.3363 32.4131 10.1953 38.8501C2.87873 46.5201 -0.300276 51.2954 0.0222145 54.1316C0.183162 55.5466 0.516382 55.8126 2.3172 55.9664C4.95554 56.1908 8.52618 53.7232 11.5222 49.6054C13.6962 46.6166 16.7452 39.4111 17.7479 34.8921C18.1836 32.9282 18.98 31.7007 20.8947 30.042L23.4585 27.8211L23.7565 29.3894C24.2024 31.7339 25.1818 31.6657 27.562 29.1246C29.6579 26.8868 29.7074 26.8693 29.7122 28.3585C29.7187 30.3044 31.2704 32.5645 32.5991 32.5645C33.1636 32.5645 34.2211 32.1416 34.9495 31.6253C36.5381 30.4998 36.5745 30.8135 35.4216 35.6937C34.9757 37.5805 34.7617 39.2772 34.9459 39.4636C35.4783 40.0022 36.2747 39.8575 36.2747 39.2223C36.2747 38.9026 36.8254 37.1528 37.4978 35.333C38.7127 32.0488 38.73 32.0331 39.8882 33.205C40.9868 34.3167 41.1847 34.3306 43.2842 33.4445C44.511 32.927 46.3595 31.6754 47.3925 30.6639C49.2064 28.8875 49.2839 28.8676 49.6678 30.0915C50.252 31.9535 51.4985 31.6422 53.3631 29.1686L55.0131 26.9797L55.5335 29.0178C56.2142 31.6881 56.9844 32.5645 58.6487 32.5645C60.0424 32.5645 62.7039 29.8797 63.8646 27.303C64.2043 26.5478 64.9936 25.9295 65.6183 25.9295C66.243 25.9295 67.273 25.6485 67.9073 25.3053C69.233 24.5875 69.2909 24.8517 68.4414 27.7433C67.3207 31.5584 66.6591 35.7836 67.0084 36.8977C67.8167 39.4738 71.0249 37.227 74.378 31.7369C75.7574 29.4786 75.7687 29.4738 76.4512 30.8593C77.4545 32.8956 78.8094 32.8691 81.1759 30.767C83.1752 28.9907 83.2909 28.9611 83.6581 30.1307C84.2303 31.9547 85.4887 31.6259 87.3408 29.1686L88.9908 26.9797L89.5112 29.0178C90.1919 31.6881 90.9621 32.5645 92.6264 32.5645C94.057 32.5645 96.4468 30.118 98.0169 27.046C99.7629 23.629 98.1409 24.1333 95.8507 27.7192C94.5721 29.7205 93.1307 31.3581 92.6473 31.3581C91.7477 31.3581 90.5293 27.9852 90.5234 25.4772C90.518 23.4511 89.724 23.8124 87.3211 26.9332C85.0667 29.8616 84.4729 29.3508 85.9566 25.7595C87.0302 23.1604 88.552 21.8877 89.4718 22.8184C90.419 23.7768 91.1159 23.6942 91.1159 22.6235C91.1159 22.1326 90.3863 21.5451 89.4951 21.3189C88.0847 20.9606 87.6013 21.2501 85.7695 23.55C82.1785 28.0581 79.3787 30.7549 78.2878 30.7549C77.3704 30.7549 77.2887 30.3466 77.6267 27.4375C77.8562 25.4615 77.7823 24.12 77.4431 24.12C77.1302 24.12 75.8962 26.0037 74.7005 28.3067C73.5047 30.609 71.6234 33.5265 70.52 34.7908L68.5135 37.0883L68.4891 34.9464C68.4754 33.7678 69.1043 30.5758 69.8869 27.8525C70.669 25.1285 71.0809 22.7575 70.8014 22.5825C70.5218 22.4076 69.1996 22.8292 67.8638 23.5193L65.4341 24.7733L66.5887 22.483C68.3377 19.0148 68.4355 17.2221 66.8892 16.9995C64.9495 16.7197 62.9126 19.9955 62.8446 23.503C62.785 26.5858 60.2355 31.3581 58.6481 31.3581C57.7706 31.3581 56.5516 27.9484 56.5456 25.4772C56.5403 23.4511 55.7463 23.8124 53.3434 26.9332C51.0889 29.8616 50.4952 29.3508 51.9789 25.7595C53.0525 23.1604 54.5743 21.8877 55.4941 22.8184C56.4413 23.7768 57.1382 23.6942 57.1382 22.6235C57.1382 22.1326 56.4109 21.5457 55.5215 21.3201C54.1338 20.9672 53.6498 21.2387 52.094 23.2436C48.8464 27.4296 44.1235 31.913 42.5391 32.3154C40.411 32.8558 40.0098 32.2164 41.4631 30.6017C43.1984 28.6746 44.1694 26.5792 43.7903 25.5809C43.2657 24.1966 41.8577 24.5881 40.2024 26.5792C39.3535 27.5997 38.659 28.1528 38.659 27.8084C38.659 25.1243 41.537 15.5326 43.7772 10.7488C47.4277 2.95463 48.1204 -2.38106 45.0331 1.07091ZM44.6928 5.22558C43.99 6.44821 43.8207 6.05675 44.3959 4.54037C44.5998 4.00113 44.8931 3.68688 45.0463 3.8425C45.2001 3.99751 45.0409 4.61999 44.6928 5.22558ZM65.9902 20.5022C65.3125 22.4679 64.2914 23.4758 64.2914 22.179C64.2914 21.3961 65.9116 18.6915 66.3807 18.6915C66.5089 18.6915 66.333 19.5063 65.9902 20.5022ZM77.6792 20.5414C77.4628 20.8948 77.4294 21.3291 77.6041 21.5065C78.0315 21.9383 79.1939 21.1771 79.1939 20.4654C79.1939 19.6945 78.165 19.7458 77.6792 20.5414ZM41.9573 27.7011C41.0148 29.5444 39.8512 30.6301 39.8512 29.6656C39.8512 29.0618 42.1492 25.9295 42.5921 25.9295C42.7405 25.9295 42.455 26.7263 41.9573 27.7011ZM15.8987 36.6359C14.9974 39.9859 11.5663 47.2898 9.78097 49.6578C6.63416 53.8324 1.10473 56.4526 1.10473 53.7691C1.10473 51.9022 5.41037 45.8325 10.9052 39.9534C13.7731 36.8844 16.2063 34.374 16.313 34.374C16.4197 34.374 16.2332 35.3921 15.8987 36.6359Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
    <h2 class="my-12">
      Resources diverses
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
    <section class="mb-12 flex mx-auto justify-center flex-wrap items-center">
      <Card name="Outils scientifiques" icon="calculator" link="res/tools" />
      <Card name="Formations en ligne" icon="graduation-cap" link="res/study" />
      <Card name="Chaines d'ingénieurie" icon="video" link="res/youtube" />
      <Card name="Groupes et Pages" icon="bookmark" link="res/grps" />
    </section>
  </main>
</template>

<script>
import pathsData from "~/assets/paths.json";
export default {
  async asyncData({ $content }) {
    const posts = await $content("blog")
      .sortBy("createdAt", "desc")
      .only(["title", "slug", "thumb", "updatedAt", "author"])
      .limit(3)
      .fetch();
    return {
      posts,
    };
  },
  head() {
    return {
      title: "Home",
    };
  },
  data() {
    return {
      subjects: pathsData,
    };
  },
  methods: {
    formatDate(date) {
      let da = new Date(date);
      let ans = new Intl.DateTimeFormat("fr-FR", {
        dateStyle: "full",
      }).format(da);
      return ans;
    },
  },
};
</script>

<style scoped>
main {
  min-height: 100vh;
}
h2 {
  @apply flex justify-center items-center text-title font-medium;
}
</style>
