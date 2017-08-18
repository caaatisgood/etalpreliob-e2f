const { resolve } = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const appRoot = resolve(__dirname, '../src')
const isProd = process.env.NODE_ENV === 'production'
const scssLoaderRules = [
  {
    loader: 'css-loader',
    options: {
      modules: true,
      sourceMap: !isProd,
      importLoaders: 2,
      localIdentName: '[name]__[local]_[hash:base64:6]',
    },
  },
  {
    loader: 'sass-loader',
    query: {
      sourceMap: !isProd,
    },
  },
  {
    loader: 'postcss-loader',
    options: {
      config: {
        path: resolve(appRoot, '../builderconfig', 'postcss.config.js'),
      },
    },
  },
]

module.exports = {
  devtool: isProd
    ? false
    : 'cheap-module-eval-source-map',

  entry: {
    vendor: [
      'react',
      'react-redux',
      'react-router',
    ],
  },

  output: {
    filename: 'bundle.js',
    path: resolve(appRoot, '../dist'),
    publicPath: '/',
  },

  context: appRoot,

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: isProd
          ? ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: scssLoaderRules,
          })
          : [
            'style-loader',
            ...scssLoaderRules,
          ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'stage-0', 'react'],
            plugins: [
              'react-hot-loader/babel',
              'transform-react-jsx',
              [
                'react-css-modules',
                {
                  context: appRoot,
                  filetypes: {
                    '.scss': { syntax: 'postcss-scss' },
                  },
                  generateScopedName: '[name]__[local]_[hash:base64:6]',
                  webpackHotModuleReloading: true,
                },
              ],
            ],
          },
        },
      },
      { test: /\.(png|jpg)$/, use: 'url-loader?limit=15000' },
      { test: /\.eot(\?v=\d+.\d+.\d+)?$/, use: 'file-loader' },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, use: 'url-loader?limit=10000&mimetype=application/font-woff' },
      { test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/, use: 'url-loader?limit=10000&mimetype=application/octet-stream' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, use: 'url-loader?limit=10000&mimetype=image/svg+xml' },
    ],
  },

  resolve: {
    extensions: ['.js'],
    alias: {
      constants: resolve(appRoot, 'constants'),
    },
    modules: [
      appRoot,
      'node_modules',
    ],
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.js',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
      },
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: resolve(appRoot, 'index.html'),
      inject: true,
      hash: true,
    }),
    new webpack.LoaderOptionsPlugin({
      test: /\.js$/,
      options: {
        eslint: {
          configFile: resolve(appRoot, '../.eslintrc.js'),
          cache: false,
        },
      },
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new ExtractTextPlugin({
      filename: '[name].css',
      allChunks: true,
    }),
  ],
}
