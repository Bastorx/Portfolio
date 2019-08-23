const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/App.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.bundle.js",
    publicPath: "/dist/"
  },
  resolve: {
    extensions: [".mjs", ".js", ".jsx", ".json", ".ts", ".tsx"]
  },
  module: {
    rules: [
      { test: /\.tsx?$/, use: "ts-loader" },
      {
        test: /\.s[ac]ss$/,
        use: [
          "style-loader",
          { loader: "css-loader", options: { url: false } },
          "sass-loader"
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "assets/fonts",
              name: "[name].[ext]"
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        loader: "svg-inline-loader"
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: "file-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      minify: {
        removeAttributeQuotes: true,
        collapseInlineTagWhitespace: true,
        collapseWhitespace: true,
        useShortDoctype: true
      }
    })
  ]
};
