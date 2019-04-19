# @kuaizi/webpack-plugin-vue-i18n

> 不支持 $t(item.title)，item.title会被压缩 e.title

## 用法

```js
const resolve = require('path').resolve
const webpackPluginVueI18n = require('@kuaizi/webpack-plugin-vue-i18n')

module.exports = {
  entry: resolve(__dirname, 'test.js'),
  plugins: [
    new webpackPluginVueI18n({
      // 默认为'./src/i18n/zh-CN.js'
      output: './src/i18n/zh-CN.js'
    })
  ]
}
```

对于已存在 `./src/i18n/zh-CN.js` 文件需加注释标识 `/* i18n */`，方便插件做内容替换

```js
export default Object.assign(/* i18n */ {
  '测试': '测试'
}/* i18n end */, zh, zhElement)
```


## 测试

### 输入文件
```js
module.exports = `
  {{ $t('测试') }}
  <a :title="$t('标题22')">标题22</a>
  <script>
    export default {
      props: {
        data: {
          type: Array,
          default () {
            return this.$t('属性')
          }
        }
      },

      data () {
        return {
          value: this.$t('搜索')
        }
      },

      computed: {
        text () {
          return this.$t('文字')
        }
      }
    }
  </script>
`
```

### 输出文件

* `./src/i18n/zh-CN.js`

```js
export default /* i18n */{
  "测试": "测试",
  "标题22": "标题22",
  "属性": "属性",
  "搜索": "搜索",
  "文字": "文字"
}/* i8n end */
```

### 命令

```bash
# set NODE_ENV=production&& yarn test webpack-plugin-vue-i18n --debug
> cd __test__/webpack
> set NODE_ENV=production&& node index --i18n
```
