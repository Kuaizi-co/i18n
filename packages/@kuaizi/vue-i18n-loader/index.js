const pattern = require('@kuaizi/i18n-share-utils')

module.exports = function loader(source) {
  pattern.forEach(v => {
    source = source.replace(v.pattern, v.replacement)
  })
  return source
}
