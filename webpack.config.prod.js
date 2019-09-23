const config = require("./webpack.config");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  ...config,
  mode: "production",
  optimization: {
    ...config.optimization,
    minimize: true
  },
  plugins: config.plugins.concat([
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
      // template:
      //   "!!prerender-loader?string&documentUrl=http://prerender!./src/index.html",
      minify: {
        removeAttributeQuotes: true,
        collapseInlineTagWhitespace: true,
        collapseWhitespace: true,
        useShortDoctype: true
      }
    }),
    new CleanWebpackPlugin(),
    new CopyPlugin([
      { from: "src/public/favicon" },
      { from: "src/public/sitemap" },
      { from: "src/public/locales", to: "locales" }
    ])
  ])
};
