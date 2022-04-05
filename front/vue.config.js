const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/scss/variables/_variables.scss";
          @import "@/assets/scss/mixin/_mixin.scss";
        `,
      },
    },
  },
  chainWebpack: (config) => {
    config.module
      .rule("html")
      .test(/\.html$/)
      .use("html-loader")
      .loader("html-loader");
  },
});
