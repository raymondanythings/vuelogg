import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { marked } from "marked";

const markedMixin = {
  methods: {
    $md: function (input) {
      return marked(input);
    },
    $htmlParse: function (input) {
      const re = /<script[^>]*>((\n|\r|.)*?)<\/script>/gim;
      const headTag = /<head[^>]*>((\n|\r|.)*?)<\/head>/gim;
      const parsedHtml = input
        .replace(re)
        .replace(headTag)
        .replaceAll("undefined", "");
      return parsedHtml;
    },
  },
};

// import "highlight.js/styles/monokai.css";
import "./static/css/reset.css";
import "./static/css/index.css";

createApp(App).use(store).use(router).mixin(markedMixin).mount("#app");
