const { resolve } = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const base = require('./webpack.config.base')

const appRoot = resolve(__dirname, '../src')

const config = merge(base, {
  entry: {
    main: [
      'webpack-hot-middleware/client',
      'webpack/hot/only-dev-server',
      'react-hot-loader/patch',
      '../src/index.js',
    ],
  },

  devServer: {
    hot: true,
  },

  resolve: {
    alias: {
      configuration: resolve(appRoot, 'config/local'),
    },
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
})

module.exports = config
