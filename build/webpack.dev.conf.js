var path = require("path");
var merge = require("webpack-merge");
var baseConfig = require("./webpack.base.conf");
var HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(baseConfig, {
  mode: "development",
  entry: "./examples/main.js",
  output: {
    filename: "[name].[hash:6].js",
  },
  devServer: {
    // contentBase: path.join(__dirname, 'dist'),
    compress: true,
    hot: true,
    open: true,
    port: 9000,
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, "..", "examples/index.html"),
      inject: true,
    }),
  ],
});
