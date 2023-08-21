const path = require("path");

module.exports = {
  entry: "./src/api.ts",
  output: {
    path: path.resolve(__dirname, "dist", "api"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  target: "node",
  mode: "production",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
      },
    ],
  },
};
