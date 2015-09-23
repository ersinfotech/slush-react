var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var config = require('./config');

module.exports = {
  entry: {
    app: ['./src/app/index'],
    login: ['./src/login/index'],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]_[hash].js',
  },
  resolve: {
    root: [
      path.join(__dirname, 'src', 'app'),
      path.join(__dirname, 'node_modules'),
      __dirname,
    ],
    extensions: ['', '.js', '.coffee'],
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      exclude: /node_modules/,
    }, {
      test: /\.css$/,
      loaders: ['style', 'css'],
    }, {
      test: /\.(jpe?g|png|gif|svg|ico)/i,
      loader: 'file',
    }, {
      test: /\.(ttf|eot|svg|woff|woff2)/,
      loader: 'file',
    }],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'app', 'index.html'),
      config: config,
    }),
    new HtmlWebpackPlugin({
      filename: 'login.html',
      template: path.join(__dirname, 'src', 'login', 'login.html'),
      config: config,
    }),
  ],
};
