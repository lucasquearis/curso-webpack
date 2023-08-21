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
  optimization: {
    runtimeChunk: true,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: "ts-loader",
        include: path.resolve(__dirname, "src"),
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
        include: path.resolve(__dirname, "src"),
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugn.loader, "css-loader"],
        include: path.resolve(__dirname, "src"),
      },
      {
        test: /\.(png|jpg|jpeg)$/,
        loader: "file-loader",
        include: path.resolve(__dirname, "src"),
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugn.loader, "css-loader", "sass-loader"],
        include: path.resolve(__dirname, "src"),
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
        include: path.resolve(__dirname, "src"),
      },
      {
        test: /\.html$/,
        loader: "html-loader",
        include: path.resolve(__dirname, "src"),
      },
      {
        test: /\.txt$/,
        loader: "raw-loader",
        include: path.resolve(__dirname, "src"),
      },
      {
        test: /\.(ttf|woff|woff2)$/,
        loader: "url-loader",
        include: path.resolve(__dirname, "src"),
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
