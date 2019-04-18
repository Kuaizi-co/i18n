const resolve = require('path').resolve
const webpack = require('webpack')
const webpackPluginVueI18n = require('../../index')

module.exports = {
  entry: resolve(__dirname, 'template.js'),
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpackPluginVueI18n()
  ]
}
