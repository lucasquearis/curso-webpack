const path = require("path");
const MiniCssExtractPlugn = require("mini-css-extract-plugin");
// const TerserPlugin = require("terser-webpack-plugin");
const webpack = require("webpack");
const DotenvPlugin = require("dotenv-webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name][contenthash].js",
  },
  mode: "development",
  module: {
    rules: [
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
        use: ["style-loader", "css-loader", "sass-loader"],
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
    new HtmlWebpackPlugin(),
  ],
};