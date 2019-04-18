module.exports = [
  {
    name: 'webpack',
    type: 'confirm',
    message: '使用 @kuaizi/webpack-plugin-vue-i18n吗?',
    default: true
  },
  {
    name: 'loader',
    type: 'list',
    message: '请选择使用支持 vue-i18n 的 loader',
    choices: ['@kuaizi/vue-i18n-loader', 'i18n-placeholder-loader']
  }
]
