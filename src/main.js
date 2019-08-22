// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import "@fortawesome/fontawesome-free/css/all.css";
import "animate.css";
import "~/main.css";

import VueVisibleClass from "vue-visible-class";

import DefaultLayout from "~/layouts/Default.vue";

export default function(Vue, { appOptions, router, head, isClient }) {
  // Page transition
  appOptions.render = h =>
    h("transition", { props: { name: "page", mode: "out-in" } }, [
      h("router-view", { attrs: { id: "app" } })
    ]);

  Vue.use(VueVisibleClass, {
    globalClass: "animated"
  });

  Vue.component("Layout", DefaultLayout);

  // Add an external CSS file
  head.link.push({
    rel: "stylesheet",
    href:
      "https://fonts.googleapis.com/css?family=Poppins:400,700,900,900i&display=swap"
  });
}
