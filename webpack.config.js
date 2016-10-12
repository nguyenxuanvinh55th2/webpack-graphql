'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    'webpack-hot-middleware/client?reload=true',
    path.join(__dirname, 'app/client/index.jsx'),
    'babel-polyfill'
  ],
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: '[name].jsx',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/client/index.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          cacheDirectory: true,
          presets: [ 'es2015', 'react'],
          plugins: [ "transform-runtime" ]
        }
      },
      {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        "presets": ["react", "es2015", "stage-0", "react-hmre"],
        "plugins": ["transform-runtime"]
      }
    },
     {
      test: /\.css$/,
      loader: 'style!css?modules&localIdentName=[name]---[local]---[hash:base64:5]'
    },
      { test: /\.json$/, loader: 'json-loader' }
  ]
  },
  resolve:{
    extensions: ['', '.js', '.jsx','css']
  }
};
