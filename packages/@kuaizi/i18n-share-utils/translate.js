function getTranslateKey (source) {
  let result = {}
  const reg = /\$t\((\'|\")([^(\'|\")]+)(\'|\")\)/gm
  let matchKey

  while (matchKey = reg.exec(source)) {
    console.log(matchKey[2])
    result[matchKey[2]] = matchKey[2]
  }

  return result
}

getTranslateKey()

module.exports = getTranslateKey
