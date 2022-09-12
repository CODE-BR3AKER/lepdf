<template>
  <div class="flex flex-row items-center space-x-2 mt-16">
    <div class="relative h-8 flex items-center justify-center">
      <div v-if="userLikeCount === 1" class="absolute text-center emoji">
        {{ emoji_1 }}
      </div>
      <div v-if="userLikeCount === 2" class="absolute text-center emoji">
        {{ emoji_2 }}
      </div>
      <div v-if="userLikeCount === 3" class="absolute text-center emoji">
        {{ emoji_3 }}
      </div>
      <button
        @click="addLike"
        class="focus:outline-none flex flex-row items-center text-white"
      >
        <svg
          class="transform transition duration-50 hover:scale-110"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="40"
            height="40"
            rx="5"
            fill="url(#paint0_linear_649_37)"
          />
          <path
            v-if="userLikeCount === 1"
            d="M0.445801 25.8823H40.4458V35C40.4458 37.7614 38.2072 40 35.4458 40H5.4458C2.68438 40 0.445801 37.7614 0.445801 35V25.8823Z"
            fill="url(#paint1_linear_649_38)"
          />
          <path
            v-if="userLikeCount === 2"
            d="M0.891602 14.1177H40.8916V35C40.8916 37.7614 38.653 40 35.8916 40H5.8916C3.13018 40 0.891602 37.7615 0.891602 35V14.1177Z"
            fill="url(#paint1_linear_649_39)"
          />
          <path
            d="M15.4413 12.9412C12.7612 12.9412 10.5884 15.114 10.5884 17.7941C10.5884 22.647 16.3237 27.0588 19.4119 28.085C22.5001 27.0588 28.2354 22.647 28.2354 17.7941C28.2354 15.114 26.0626 12.9412 23.3825 12.9412C21.7413 12.9412 20.2899 13.756 19.4119 15.0032C18.9644 14.3658 18.3699 13.8456 17.6788 13.4867C16.9876 13.1277 16.2201 12.9406 15.4413 12.9412Z"
            fill="currentColor"
          />
          <defs>
            <linearGradient
              id="paint0_linear_649_37"
              x1="3.52941"
              y1="4.70588"
              x2="36.4706"
              y2="40"
              gradientUnits="userSpaceOnUse"
            >
              <stop v-if="!likesMaxed" stop-color="#545454" />
              <stop v-if="!likesMaxed" offset="1" stop-color="#B1B1B1" />
              <stop v-if="likesMaxed" stop-color="#ee0979" />
              <stop v-if="likesMaxed" offset="1" stop-color="#ff6a00" />
            </linearGradient>
            <linearGradient
              id="paint0_linear_649_38"
              x1="3.97521"
              y1="4.70588"
              x2="36.9164"
              y2="40"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#545454" />
              <stop offset="1" stop-color="#B8B8B8" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_649_38"
              x1="5.73992"
              y1="29.4117"
              x2="33.1771"
              y2="34.3822"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#EE0979" />
              <stop offset="1" stop-color="#FF6A00" />
            </linearGradient>
            <linearGradient
              id="paint0_linear_649_39"
              x1="4.42101"
              y1="4.70588"
              x2="37.3622"
              y2="40"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#545454" />
              <stop offset="1" stop-color="#B8B8B8" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_649_39"
              x1="6.18572"
              y1="20.5883"
              x2="34.2493"
              y2="23.3613"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#EE0979" />
              <stop offset="1" stop-color="#FF6A00" />
            </linearGradient>
          </defs>
        </svg>
      </button>
    </div>
    <div class="ml-2 text-color-text">
      <p v-if="$fetchState.pending" class="animate-pulse">...</p>
      <p v-else-if="$fetchState.error">{{ $fetchState.error.message }}</p>
      <p v-else>{{ initialLikes }}</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      initialLikes: null,
      userLikeCount: 0,
      emoji_1: "👍",
      emoji_2: "🙏",
      emoji_3: "🥰",
    };
  },
  async fetch() {
    const { data } = await this.$axios.get(
      `/.netlify/functions/fetch_likes_for_blog?slug=${this.$route.params.slug}`
    );
    this.initialLikes = data.likes;
  },
  fetchOnServer: false,
  computed: {
    likesMaxed() {
      return this.userLikeCount >= 3;
    },
  },
  methods: {
    addLike() {
      if (!this.likesMaxed) {
        this.initialLikes++;
        this.userLikeCount++;
        this.incrementLikes();
      }
    },
    async incrementLikes() {
      await this.$axios.post(
        `/.netlify/functions/register-like?slug=${this.$route.params.slug}`
      );
    },
  },
};
</script>
<style scoped>
.emoji {
  animation-name: myAnimation;
  animation-duration: 900ms;
  animation-fill-mode: forwards;
  animation-timing-function: linear;
}
@keyframes myAnimation {
  0% {
    opacity: 1;
    transform: translateY(-2rem);
  }
  50% {
    opacity: 0.5;
    transform: translateY(-2.5rem);
  }
  100% {
    display: none;
    opacity: 0;
    transform: translateY(-3rem);
  }
}
</style>
