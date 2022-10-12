export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: "static",
  ssr: false,
  publicRuntimeConfig: {
    axios: {
      baseURL:
        process.env.NODE_ENV === "production"
          ? process.env.BASE_URL || "http://localhost:8888/"
          : "http://localhost:8888/",
    },
    gtm: {
      id: process.env.GOOGLE_TAG_MANAGER_ID,
    },
  },
  privateRuntimeConfig: {
    axios: {
      baseURL:
        process.env.NODE_ENV === "production"
          ? process.env.BASE_URL || "http://localhost:8888/"
          : "http://localhost:8888/",
    },
  },
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: "lePDF | %s",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "msapplication-TileColor", content: "#2b5797" },
      { name: "theme-color", content: "#ffffff" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "preconnect", href: "drive.google.com" },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png",
      },
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png",
      },
      { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#5bbad5" },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "https://maxst.icons8.com/vue-static/landings/line-awesome/font-awesome-line-awesome/css/all.min.css",
      },
    ],
  },
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],
  loading: {
    color: "#f15523",
    height: "5px",
  },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    "@nuxtjs/netlify-files",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
  ],
  tailwindcss: {
    jit: true,
    exposeConfig: true,
  },
  colorMode: {
    preference: "light",
    classSuffix: "",
  },
  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    "@nuxtjs/axios",
    "nuxt-webfontloader",
    "@nuxtjs/gtm",
    "@nuxtjs/pwa",
    "@nuxt/content",
  ],
  axios: {},
  webfontloader: {
    google: {
      families: [
        "Roboto:100,300,400,700,500,500italic,400italic,300italic,100italic,700italics&display=swap",
      ],
    },
  },
  gtm: {
    pageTracking: true,
    scriptDefer: true,
  },
  pwa: {
    manifest: {
      name: "LePDF",
      short_name: "LePDF",
      description: "pdf classroom for engineering archives",
      icons: [
        {
          src: "/icon-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "/icon.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
      theme_color: "#F15523",
      background_color: "#ffffff",
      lang: "en",
      display: "standalone",
      orientation: "portrait",
      capture_links: "existing-client-navigate",
      launch_handler: { route_to: "existing-client-retain" },
    },
  },
  content: {
    markdown: { remarkPlugins: ["remark-emoji"] },
    fullTextSearchFields: ["Module", "Filename"],
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
  generate: {
    fallback: true,
  },
};
