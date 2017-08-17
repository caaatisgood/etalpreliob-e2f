const webpack = require('webpack')
const merge = require('webpack-merge')
const base = require('./webpack.base.config')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

const config = merge(base, {
  entry: {
    main: '../src/index.js',
  },

  plugins: [
    new UglifyJSPlugin({
      comments: false,
    }),
  ],
})

module.exports = config
