var path = require('path');
var webpack = require('webpack')
var merge = require('webpack-merge')
var baseConfig = require('./webpack.base.conf')
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var pkg = require('../package.json')
var HTMLWebpackPlugin = require('html-webpack-plugin');

var comments = `${pkg.name}
version: ${pkg.version}
author: ${pkg.author}
${pkg.description}`

module.exports = merge(baseConfig, {
  mode: 'production',
  entry: './examples/main.js',
  output: {
    path: path.resolve(__dirname, '..', 'examples-dist'),
    filename: 'main.[hash:6].js'
  },
  plugins: [
    new webpack.BannerPlugin(comments),
    new UglifyJsPlugin(),
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, '..', 'examples/index.html'),
      inject: true
    })
  ]
});
