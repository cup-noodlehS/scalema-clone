const { defineConfig } = require("@vue/cli-service");
const path = require("path");

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        source: path.resolve(__dirname, "src"),
        public: path.resolve(__dirname, "public"),
      },
    },
  },
});
