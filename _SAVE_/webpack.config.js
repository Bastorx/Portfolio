const path = require("path");
const webpack = require("webpack");

module.exports = {
  target: "web",
  entry: "./src/app.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[hash].js",
    publicPath: "/"
  },
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      chunks: "all",
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            const packageName = module.context.match(
              /[\\/]node_modules[\\/](.*?)([\\/]|$)/
            )[1];
            return `npm.${packageName.replace("@", "")}`;
          }
        }
      }
    }
  },
  resolve: {
    extensions: [".mjs", ".js", ".jsx", ".json", ".ts", ".tsx"]
  },
  module: {
    rules: [
      { test: /\.tsx?$/, use: "ts-loader" },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.s[ac]ss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(woff(2)?|ttf|eot|png|jp(e)?g|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]"
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        include: path.resolve(__dirname, "./node_modules/react-flags-select"),
        exclude: path.resolve(__dirname, "./src"),
        use: ["url-loader"]
      },
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        use: ["@svgr/webpack"]
      }
    ]
  },
  plugins: [new webpack.HashedModuleIdsPlugin()]
};
