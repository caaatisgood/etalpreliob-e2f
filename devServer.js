const webpack = require('webpack')
const express = require('express')
const request = require('request')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const bodyParser = require('body-parser')
const fs = require('fs')
const PORT = process.env.PORT || 8080
const config = require('./builderconfig/webpack.config.local.js')
const compiler = webpack(config)
const server = express()
const router = express.Router()
require('colors')

router.post('/mock/*', (req, res) => {
  const requestQueryParams = req.path
    .split('/')
    .slice(1)
    .join('/')

  res.send(JSON.parse(fs.readFileSync(requestQueryParams.replace(/\?.*$/, ''), 'utf8')))
})

router.get('/mock/*', (req, res) => {
  const requestQueryParams = req.path
    .split('/')
    .slice(1)
    .join('/')

  res.send(JSON.parse(fs.readFileSync(requestQueryParams.replace(/\?.*$/, ''), 'utf8')))
})

router.get('/', (req, res) => {
  res.sendFile('./src/index.html', { root: __dirname })
})

server.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  historyApiFallback: true,
  headers: { 'Access-Control-Allow-Origin': '*' },
  stats: {
    colors: true,
  },
}))
server.use(webpackHotMiddleware(compiler))
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use('/', express.static('mock'))
server.use(router)

server.listen(PORT, (err) => {
  if (err) {
    console.log(err)
  } else {
    console.info('using config/local.js'.green)
    console.info(`==> Listening on port ${PORT}. Open up ` + `http://localhost:${PORT}/`.green + ' in your browser.\n')
  }
})
