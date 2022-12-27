const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const ForkTSCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
require("dotenv").config({ path: "./envs/.env.dev" });

module.exports = {
  mode: "development",
  entry: "./src/index",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/bundle.js",
    assetModuleFilename: "public/[name][ext]",
    clean: true,
  },
  resolve: {
    extensions: [".js", ".jsx", ".tsx", ".ts", ".css", ".scss"],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: "tsconfig.json",
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /.(ts|js|tsx|jsx|png|jpg|svg|gif|ico)?$/,
        exclude: /node_modules/,
        use: [{ loader: "babel-loader" }],
      },
      {
        test: /.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10000,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./public/index.html",
    }),
    new ForkTSCheckerWebpackPlugin(),
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(process.env),
    }),
  ],
  devServer: {
    port: 3000,
    static: "./",
  },
};
