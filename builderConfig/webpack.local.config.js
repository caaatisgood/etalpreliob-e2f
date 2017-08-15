const webpack = require('webpack')
const merge = require('webpack-merge')
const base = require('./webpack.base.config')
const { resolve } = require('path')

const config = merge(base, {
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        loader: 'standard-loader',
        exclude: /node_modules/,
        options: {
          snazzy: true,
          parser: 'babel-eslint'
        }
      }
    ]
  },
  devServer: {
    contentBase: resolve(__dirname, '../src'),
    historyApiFallback: true,
    hot: true
  }
})

config.plugins.push(new webpack.HotModuleReplacementPlugin())

module.exports = config
