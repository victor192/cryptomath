require("dotenv").config()

export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: "The CryptoMath project",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "CryptoMath is a system of publishing articles related to mathematics and blockchain with the possibility of funding the author using cryptocurrencies. We also support a Q&A service with a reward for the solution.",
      },
      {
        name: "keywords",
        content:
          "blockchain, bitcoin, mathematics, math, researches, scientific articles, cryptography, articles, questions, answers, math problems, programming",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    script: [
      {
        id: "MathJax-script",
        src: "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg-full.js",
      },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: ["~/assets/styles/main.scss"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: "~/plugins/client-init.js", mode: "client" }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    "@nuxtjs/dotenv",
    [
      "nuxt-i18n",
      {
        locales: [
          {
            code: "en",
            iso: "en-US",
            file: "en.json",
            name: "English",
          },
        ],
        lazy: true,
        langDir: "locales/",
        strategy: "prefix_and_default",
        defaultLocale: "en",
        vueI18n: {
          fallbackLocale: "en",
        },
      },
    ],
    [
      "@nuxtjs/axios",
      {
        baseURL: process.env.API_URL,
      },
    ],
  ],
  /*
   ** Build configuration
   */
  build: {
    postcss: {
      preset: {
        autoprefixer: {
          grid: true,
        },
      },
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
  /*
   ** Environment variables
   */
  env: {
    apiURL: process.env.API_URL,
  },
  router: {
    middleware: ["auth"],
  },
}
