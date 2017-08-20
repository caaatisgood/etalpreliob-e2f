const merge = require('webpack-merge')  // eslint-disable-line
const base = require('./webpack.config.base')
const local = require('./webpack.config.local')
const prod = require('./webpack.config.prod')

if (process.env.NODE_ENV === 'production') {
  module.exports = merge(base, prod)
} else {
  module.exports = merge(base, local)
}
