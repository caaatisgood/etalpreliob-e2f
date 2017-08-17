const { resolve } = require('path')
const merge = require('webpack-merge')
const base = require('./webpack.config.base')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

const appRoot = resolve(__dirname, '../src')

const config = merge(base, {
  entry: {
    main: '../src/index.js',
  },

  resolve: {
    alias: {
      configuration: resolve(appRoot, 'config/prod'),
    },
  },

  plugins: [
    new UglifyJSPlugin({
      comments: false,
    }),
  ],
})

module.exports = config
