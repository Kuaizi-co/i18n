const fs = require('fs-extra')
const resolve = require('path').resolve
const webpack = require('webpack')
const webpackConfig = require('./webpack/config')

const file = './webpack/src/i18n/zh-CN.js'

test('webpack-plugin-vue-i18n', () => {
  webpack(webpackConfig, (err) => {
    console.log('xxxx webpack-plugin-vue-i18n')
    err && console.log('webpack error:') && console.log(err)
    if (fs.existsSync(resolve(process.cwd(), file))) {
      expect(1).toBe(1)
    } else {
      expect(0).toBe(1)
    }
  })
})
