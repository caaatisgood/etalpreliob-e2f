const webpack = require('webpack')
const merge = require('webpack-merge')
const base = require('./webpack.base.config')

const config = merge(base, {
  entry: {
    main: [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      '../src/index.js',
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
})

module.exports = config
