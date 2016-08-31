var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var env = process.env.WEBPACK_ENV;


var config = {
  devtool: 'source-map',
  entry: [
    './client/index.js'
  ],
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js',
    publicPath: __dirname + 'assets'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },
  plugins: []
}

module.exports = config;
