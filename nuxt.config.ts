import vuetify from "vite-plugin-vuetify";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // import styles
  css: ["@/assets/main.scss"],
  // enable takeover mode
  typescript: { shim: false },
  build: { transpile: ["vuetify"] },
  modules: [
    '@nuxtjs/tailwindcss',
    "@kevinmarrec/nuxt-pwa",
    async (options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) =>
        // @ts-ignore
        config.plugins.push(vuetify())
      );
    },'@nuxtjs/supabase'
  ],

  app: {
    head: {
      title: "Hypermedia",
      meta: [
        {name : "description", content: "Project for Hypermedia course at Politecnico di Milano"},
      ],
      link: [
        { rel: "stylesheet", href: "https://rsms.me/inter/inter.css" },
        // { rel: "preconnect", href: "https://rsms.me/" },
      ],
    },
  },
  serverHandlers: [
    {
      route: '/server', 
      handler: '~/server/index.js', 
      middleware: true
    }
  ]
});
