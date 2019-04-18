# @kuaizi/i18n-loader

多语言loader


## vue-cli3.x

```js
module.exports = {
  chainWebpack: config => {
    // i18n
    config.module
      .rule('i18n')
      .test(/\.vue$/)
      .use('@kuaizi/vue-i18n-loader')
        .loader('@kuaizi/vue-i18n-loader')
        .end()
  }
}
```

## webpack

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: '@kuaizi/vue-i18n-loader'
      }
    ]
  }
}
```

## demo

`demo.vue`

```html
<template>
  <a title="::英文::"></a>
<template>

<script>
  export default {
    props: {
      title: {
        type: String,
        default () {
          return '::标题::'
        }
      }
    },

    data () {
      return {
        remark: '::备注::'
      }
    },

    computed () {
      test () {
        return '::测试{ok}::{ok: this.remark}'
      }
    }
  }
</script>
```

## Test

```
yarn test i18n-loader
```
