var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = require('./config');

module.exports = {
  entry: {
    app: [__dirname + '/src/app/index'],
    login: [__dirname + '/src/login/index'],
  },
  output: {
    path: __dirname + '/_dist',
    filename: '[name]_[hash].js',
  },
  resolve: {
    root: [
      __dirname + '/src/app',
      __dirname + '/node_modules',
      __dirname,
    ],
    extensions: ['', '.js'],
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      exclude: /node_modules/,
    }, {
      test: /\.css$/,
      loaders: ['style', 'css?modules'],
      include: /components/,
    }, {
      test: /\.(jpe?g|png|gif|svg|ico)/i,
      loader: 'file',
    }, {
      test: /\.(ttf|eot|svg|woff|woff2)/,
      loader: 'file',
    }, {
      test: /\.(pdf)/,
      loader: 'file',
    }, {
      test: /\.(swf|xap)/,
      loader: 'file',
    }],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + '/src/app/index.html',
      favicon: __dirname + '/src/app/favicon.ico',
      inject: false,
    }),
    new HtmlWebpackPlugin({
      filename: 'login.html',
      template: __dirname + '/src/login/login.html',
      inject: false,
    }),
    new HtmlWebpackPlugin({
      filename: 'forget.html',
      template: __dirname + '/src/login/forget.html',
      inject: false,
    }),
  ],
};
