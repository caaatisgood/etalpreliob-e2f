const { resolve } = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const base = require('./webpack.config.base')

const appRoot = resolve(__dirname, '../src')

const config = merge(base, {
  entry: {
    main: [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      '../src/index.js',
    ],
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
