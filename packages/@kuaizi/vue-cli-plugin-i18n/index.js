const webpackPluginVueI18n = require('@kuaizi/webpack-plugin-vue-i18n')
const path = require('path')

const resolve = file => path.resolve(process.cwd(), file)

module.exports = (api, options, rootOptions) => {
  api.chainWebpack(config => {

    const pkg = require(resolve('package.json'))
    const pluginConfig = pkg['vue-cli-i18n'] || {}

    if (pluginConfig.loader === '@kuaizi/vue-i18n-loader') {
      // i18n
      config.module
      .rule('i18n')
      .test(/\.vue$/g)
      .use('@kuaizi/vue-i18n-loader')
        .loader('@kuaizi/vue-i18n-loader')
        .end()
    }

    if (pluginConfig.loader === 'i18n-placeholder-loader') {
      config.module
        .rule('i18n-placeholder')
        .test(/\.vue$/g)
        .use('i18n-placeholder-loader')
          .loader('i18n-placeholder-loader')
          .end()
    }

    if (pluginConfig.webpack) {
      config.plugin('webpack-plugin-vue-i18n')
          .use(new webpackPluginVueI18n(options.pluginOptions['vue-i18n']))
    }
  })
}
