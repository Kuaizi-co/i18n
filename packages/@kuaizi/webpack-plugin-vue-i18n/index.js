/**
 * webpack plugin for vue-i18n
 * by tommyshao <tomieric@gmail.com>
 */
const path = require('path')
const fs = require('fs-extra')
const getTranslateKey = require('@kuaizi/i18n-share-utils/translate')
const pluginName = Symbol('webpackPluginVueI18n')
const rawArgs = process.argv.slice(2)

class webpackPluginVueI18n {
  constructor ({
    // 输出文件
    output = './src/i18n/zh-CN.js'
  } = {}) {
    this.output = output
    this.enabled = !!~rawArgs.indexOf('--i18n') || !!~rawArgs.indexOf('--debug')
    this.__cache = {}
  }

  generateTranslateKeyFile (content = '') {
    const result = getTranslateKey(content)
    Object.keys(result)
      .forEach(key => {
        this.__cache[key] = result[key]
      })
  }

  writeTranslateKeyFile () {
    const file = path.resolve(process.cwd(), this.output)
    let content = JSON.stringify(this.__cache, null, 2)

    console.log(file)
    console.log('////////////////////')

    if (fs.existsSync(file)) {
      const fileContent = fs.readFileSync(file, 'utf8')
      console.log(fileContent)
      console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>')
      content = fileContent.replace(/\/\*\s?i18n\s?\*\/([^\/]*)\/\*\s?i18n\s?end\s?\*\//gm, `/* i18n */${content}/* i18n end */`)
    } else {
      content = `export default /* i18n */${content}/* i8n end */`
    }

    fs.outputFileSync(file, content)
  }

  apply (compiler) {
    const afterEmit = (compilation, callback = () => {}) => {
      let chunks = compilation.chunks
      let files = []
      chunks.forEach(chunk => {
        files = files.concat(chunk.files)
      })

      files.forEach(file => {
        let asset = compilation.assets[file]
        if (asset) {
          let content = asset.source()
          this.generateTranslateKeyFile(content)
          // let result = this.generateTranslateKeyFile(content)
          // compilation.assets[file] = {
          //   source() {
          //     return result
          //   },
          //   size () {
          //     return result.length
          //   }
          // }
        }
      })

      // write file
      this.writeTranslateKeyFile()
      console.log('i18n 配置生成完成')

      callback()
    }

    if (process.env.NODE_ENV === 'production' && this.enabled) {
      if (compiler.hooks) {
        compiler.hooks.afterEmit.tap(pluginName.toString(), afterEmit)
      } else {
        compiler.plugin('afterEmit', afterEmit)
      }
    }
  }
}

module.exports = webpackPluginVueI18n
