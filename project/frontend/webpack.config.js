const path = require("path");
const webpack = require("webpack");
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'development',
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./static/frontend"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  optimization: {
    minimize: true,
  },
  plugins: [
    new Dotenv()
  ],
};

// plugins: [
//   new Dotenv(),
//   new webpack.DefinePlugin({
//     "process.env": {
//       // This has effect on the react lib size
//       NODE_ENV: JSON.stringify("production"),
//     },
//   }),
// ],
// };