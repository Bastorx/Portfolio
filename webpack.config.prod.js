const config = require("./webpack.config");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  ...config,
  mode: "production",
  optimization: {
    minimize: true
  },
  plugins: config.plugins.concat([
    new CleanWebpackPlugin(),
    new CopyPlugin([
      { from: "src/public/favicon" },
      { from: "src/public/sitemap" }
    ])
  ])
};
