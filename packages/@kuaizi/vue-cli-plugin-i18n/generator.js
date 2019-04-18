module.exports = (api, options) => {
  api.extendPackage({
    "vue-cli-i18n": {
      webpack: options.webpack,
      loader: options.loader
    }
  })

  if (options.webpack) {
    api.extendPackage({
      scripts: {
        "i18n": "vue-cli-service build --i18n"
      }
    })
  }
}
