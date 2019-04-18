# @kuaizi/i18n

* `i18n-cli`
* `i18n-loader`
* `vue-cli-plugin-i18n`
* `webpack-plugin-i18n`

## i18n-cli

提供一键翻译 `excel` 文件

## i18n-loader

> 参考 [i18n-placeholder-loader](https://github.com/veici/i18n-placeholder-loader)

自动替换占位符

[使用文档](./packages/@kuaizi/i18n-loader/README.md)

## vue-cli-plugin-i18n

vue-cli3.x插件，注入配置 `i18n-loader`

## webpack-plugin-i18n

i18n-loader的插件版本，在build才替换

## Test 自动化测试

```bash
# 测试全部包
> yarn test

# 测试一个模块
> yarn test i18n-loader

# 测试多个模块
> yarn test i18n-loader,i18n-cli
```
