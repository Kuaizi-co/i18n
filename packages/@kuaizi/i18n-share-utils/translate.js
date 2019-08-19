function getTranslateKey (source) {
  let result = {}
  const reg = /(\$|\.)t\((\'|\")([^\)\'\"]+)(\'|\")(,([^\)\'\"]+))?\)/gm
  let matchKey

  while (matchKey = reg.exec(source)) {
    result[matchKey[3]] = matchKey[3]
  }

  return result
}

getTranslateKey()

module.exports = getTranslateKey
