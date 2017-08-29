var webpack = require('webpack');

module.exports = {
  entry: {
    fullscreen: './fullscreen.js'
  },
  output: {
    filename: '[name].min.js',
    path: __dirname
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
};
