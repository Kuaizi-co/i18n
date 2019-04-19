# @kuaizi/vue-cli-plugin-i18n

### 依赖

* [i18n-placeholder-loader](https://github.com/veici/i18n-placeholder-loader)
* [@kuaizi/vue-i18n-loader](../vue-i18n-loader/README.md)
* [@kuaizi/webpack-plugin-vue-i18n](../webpack-plugin-vue-i18n/README.md)

## 使用

```bash
> vue add @kuaizi/vue-cli-plugin-i18n
> 使用 @kuaizi/webpack-plugin-vue-i18n吗?(Y)
> √ @kuaizi/vue-i18n-loader
    i18n-placeholder-loader
# 执行生成中文键值对照文件
> yarn i18n
```

## 配置启用插件

### package.json

```js
{
  "vue-cli-i18n": {
    // 开启 @kuaizi/webpack-plugin-vue-i18n
    "webpack": true,
    // 配置使用loader支持，['@kuaizi/vue-i18n-loader', 'i18n-placeholder-loader']
    "loader": "i18n-placeholder-loader"
  }
}
```

## 插件参数配置

### vue.config.js

```
module.exports = {
  pluginOptions: {
    "vue-i18n": {
      output: "./src/i18n/newZH.js"
    }
  }
}
```
