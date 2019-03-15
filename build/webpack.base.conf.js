var path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [path.resolve(__dirname, '..', 'src'), path.resolve(__dirname, '..', 'examples')],
      }
    ]
  }
};
