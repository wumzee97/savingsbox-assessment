import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
export default defineNuxtConfig({
  //...

  devtools: { enabled: true },
  app: {
    head: {
      script: [
        {
          src: "https://code.jquery.com/jquery-3.6.0.slim.min.js", // Include jQuery
        },
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js", // Include Bootstrap JS
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap",
        },
      ],
    },
  },
  css: [
    "bootstrap/dist/css/bootstrap.min.css", // Bootstrap CSS
    "bootstrap-icons/font/bootstrap-icons.css", // Bootstrap Icons
    "~/assets/css/main.css",
  ],
  plugins: ["~/plugins/bootstrap.client.ts"],

  build: {
    transpile: ["vuetify"],
  },

  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    "nuxt-toastify",
  ],

  toastify: {
    autoClose: 2000,
    position: "top-right",
    theme: "auto",
  },

  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },

  compatibilityDate: "2024-10-21",
});
