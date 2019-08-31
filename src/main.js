// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import "@fortawesome/fontawesome-free/css/all.css";
import "~/main.css";

import DefaultLayout from "~/layouts/Default.vue";

export default function(Vue, { appOptions, router, head, isClient }) {
  Vue.component("Layout", DefaultLayout);

  // Add an external CSS file
  head.link.push({
    rel: "stylesheet",
    href:
      "https://fonts.googleapis.com/css?family=Poppins:400,700,900,900i&display=swap"
  });
}
