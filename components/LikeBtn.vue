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
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="34"
            height="34"
            rx="5"
            fill="url(#paint0_linear_1801_10)"
          />
          <path
            v-if="userLikeCount == 1"
            d="M0 22H34V29C34 31.7614 31.7614 34 29 34H5C2.23858 34 0 31.7614 0 29V22Z"
            fill="url(#paint1_linear_1801_11)"
          />
          <path
            v-if="userLikeCount == 2"
            d="M0 12H34V29C34 31.7614 31.7614 34 29 34H5C2.23858 34 0 31.7614 0 29V12Z"
            fill="url(#paint1_linear_1801_12)"
          />
          <path
            d="M13.125 11C10.8469 11 9 12.8469 9 15.125C9 19.25 13.875 23 16.5 23.8723C19.125 23 24 19.25 24 15.125C24 12.8469 22.1531 11 19.875 11C18.48 11 17.2463 11.6926 16.5 12.7528C16.1196 12.211 15.6143 11.7688 15.0268 11.4637C14.4393 11.1586 13.787 10.9995 13.125 11Z"
            fill="currentColor"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1801_10"
              x1="3"
              y1="4"
              x2="31"
              y2="34"
              gradientUnits="userSpaceOnUse"
            >
              <stop v-if="!likesMaxed" stop-color="#545454" />
              <stop v-if="!likesMaxed" offset="1" stop-color="#B1B1B1" />
              <stop v-if="likesMaxed" stop-color="#ee0979" />
              <stop v-if="likesMaxed" offset="1" stop-color="#ff6a00" />
            </linearGradient>
            <linearGradient
              id="paint0_linear_1801_11"
              x1="3"
              y1="4"
              x2="31"
              y2="34"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#545454" />
              <stop offset="1" stop-color="#B8B8B8" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_1801_11"
              x1="4.5"
              y1="25"
              x2="27.8216"
              y2="29.2249"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#EE0979" />
              <stop offset="1" stop-color="#FF6A00" />
            </linearGradient>
            <linearGradient
              id="paint0_linear_1801_12"
              x1="3"
              y1="4"
              x2="31"
              y2="34"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#545454" />
              <stop offset="1" stop-color="#B8B8B8" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_1801_12"
              x1="4.5"
              y1="17.5"
              x2="28.354"
              y2="19.8571"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#EE0979" />
              <stop offset="1" stop-color="#FF6A00" />
            </linearGradient>
          </defs>
        </svg>
        <!--
        <svg
          class="transform transition duration-50 hover:scale-110"
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="34"
            height="34"
            rx="5"
            fill="url(#paint0_linear_1176_4)"
          />
          <path
            v-if="userLikeCount == 1"
            d="M0 22H34V29C34 31.7614 31.7614 34 29 34H5C2.23858 34 0 31.7614 0 29V22Z"
            fill="url(#paint1_linear_1176_4)"
          />
          <path
            v-if="userLikeCount == 2"
            d="M0 12H34V29C34 31.7614 31.7614 34 29 34H5C2.23858 34 0 31.7614 0 29V12Z"
            fill="url(#paint1_linear_1197_12)"
          />
          <path
            d="M22.8419 16.9679C22.8174 16.8457 22.7587 16.7331 22.6726 16.6431C22.5864 16.5531 22.4764 16.4895 22.3554 16.4597L17.8337 15.3286L19.5059 11.4258C19.5642 11.2904 19.5753 11.1393 19.5374 10.9968C19.4995 10.8543 19.4148 10.7287 19.297 10.6401C19.1794 10.5509 19.0351 10.504 18.8876 10.5068C18.74 10.5097 18.5977 10.5622 18.4836 10.6559L11.233 16.5882C11.1384 16.6656 11.0672 16.7677 11.0273 16.8832C10.9874 16.9987 10.9804 17.123 11.0071 17.2423C11.0338 17.3615 11.0931 17.471 11.1783 17.5585C11.2636 17.646 11.3716 17.7081 11.4901 17.7378L15.9189 18.8458L13.714 22.7044C13.6572 22.8047 13.6275 22.9181 13.6281 23.0333C13.6287 23.1486 13.6594 23.2617 13.7173 23.3614C13.7752 23.461 13.8581 23.5438 13.9579 23.6014C14.0577 23.6591 14.1709 23.6896 14.2862 23.6899C14.4288 23.6901 14.5677 23.6438 14.6817 23.558L22.5914 17.6257C22.6911 17.551 22.7675 17.4495 22.8118 17.333C22.8561 17.2166 22.8666 17.09 22.8419 16.9679V16.9679Z"
            fill="currentColor"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1176_4"
              x1="3"
              y1="4"
              x2="31"
              y2="34"
              gradientUnits="userSpaceOnUse"
            >
              <stop v-if="!likesMaxed" stop-color="#545454" />
              <stop v-if="!likesMaxed" offset="1" stop-color="#B1B1B1" />
              <stop v-if="likesMaxed" stop-color="#39786D" />
              <stop v-if="likesMaxed" offset="1" stop-color="#28534B" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_1176_4"
              x1="4.5"
              y1="25"
              x2="27.8216"
              y2="29.2249"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#39786D" />
              <stop offset="1" stop-color="#28534B" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_1197_12"
              x1="4.5"
              y1="17.5"
              x2="28.354"
              y2="19.8571"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#39786D" />
              <stop offset="1" stop-color="#28534B" />
            </linearGradient>
          </defs>
        </svg>-->
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
