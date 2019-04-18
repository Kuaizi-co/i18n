const webpack = require('webpack')
const webpackConfig = require('./config')

webpack(webpackConfig, err => {
  err && console.log(err)
})
