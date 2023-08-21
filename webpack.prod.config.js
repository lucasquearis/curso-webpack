const path = require("path");
const MiniCssExtractPlugn = require("mini-css-extract-plugin");
const webpack = require("webpack");
const DotenvPlugin = require("dotenv-webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name][contenthash].js",
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugn.loader, "css-loader"],
      },
      {
        test: /\.(png|jpg|jpeg)$/,
        use: "file-loader",
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugn.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-proposal-object-rest-spread"],
          },
        },
      },
      {
        test: /\.html$/,
        use: "html-loader",
      },
      {
        test: /\.txt$/,
        use: "raw-loader",
      },
      {
        test: /\.(ttf|woff|woff2)$/,
        use: "url-loader",
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugn({
      filename: "[name][contenthash].css",
    }),
    new webpack.DefinePlugin({
      VERSION: JSON.stringify("1.0.2"),
      PORT: JSON.stringify(8080),
    }),
    new DotenvPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "public", "index.html"),
      title: "Webpack é top!",
    }),
    new VueLoaderPlugin(),
  ],
  resolve: {
    alias: {
      vue: "@vue/runtime-dom",
    },
    extensions: ["*", ".js", ".vue", ".json", ".tsx", ".ts", ".js"],
  },
};
