# @kuaizi/i18n

> 作为一个具有国际业务的Sass供应商，多语言是最基本的刚需，如何方便保持页面维护和支持多语言，由最初的直接用中文作为key值思路，`@veici` 最早实现的 `i18n-placeholder-loader`，衍生去整合我们的多语言工具链

**包含的工具：**

* `i18n-loader`
* `vue-cli-plugin-i18n`
* `webpack-plugin-i18n`
* `i18n-cli`
* `vue-i18n-helper`

## vue-i18n-loader

> 参考 [i18n-placeholder-loader](https://github.com/veici/i18n-placeholder-loader)

自动替换占位符

[使用文档](./packages/@kuaizi/vue-i18n-loader/README.md)

## vue-cli-plugin-i18n

vue-cli3.x插件，注入配置 `i18n-loader`

[使用文档](./packages/@kuaizi/vue-cli-plugin-i18n/README.md)

## webpack-plugin-i18n

i18n-loader的插件版本，在build才替换

[使用文档](./packages/@kuaizi/webpack-plugin-vue-i18n/README.md)

## i18n-cli

提供一键翻译 `excel` 文件

[使用文档](./packages/@kuaizi/i18n-cli/README.md)

## vue-i18n-helper

提供i18n扩展的vscode快捷键

[使用文档](./packages/@kuaizi/vue-i18n-helper/README.md)

## Test 自动化测试

```bash
# 测试全部包
> yarn test

# 测试一个模块
> yarn test i18n-loader

# 测试多个模块
> yarn test i18n-loader,i18n-cli
```

## publish

```bash
# 打版本
> npx lerna version prerelease --amend --conventional-commits
# 发布
> npx lerna publish --force-publish --yes --no-git-tag-version
# 预发版
> npx lerna publish --canary --force-publish --yes --no-git-tag-version
# 发布下一个版本
> npx lerna publish --dist-tag next --force-publish --yes
```
