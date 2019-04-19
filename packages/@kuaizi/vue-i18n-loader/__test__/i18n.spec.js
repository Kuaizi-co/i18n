const pattern = require('@kuaizi/i18n-share-utils')

describe('test pattern', () => {

  const mockData = [
    {
      source: `<a>::测试::</a>`,
      result: `<a>{{$t('测试', {})}}</a>`
    },
    {
      source: '<a title="::测试::">测试</a>',
      result: `<a :title="$t('测试', {})">测试</a>`
    },
    {
      source: `default: '::测试::'`,
      result: `default() { return this.$t('测试', {}) }`
    },
    {
      source: `test: '::测试::'`,
      result: `test: this.$t('测试', {})`
    },
    {
      source: `::测试 {ok}::`,
      result: `{{$t('测试 {ok}', {})}}`
    }
  ]

  const mockData2 = [
    {
      source: `<a>::测试 {ok}::{ok: 1}</a>`,
      result: `<a>{{$t('测试 {ok}', {ok: 1})}}</a>`
    },
    {
      source: '<a title="::测试 {ok}::{ok: 1}">测试</a>',
      result: `<a :title="$t('测试 {ok}', {ok: 1})">测试</a>`
    },
    {
      source: `default: '::测试 {ok}::{ok: 1}'`,
      result: `default() { return this.$t('测试 {ok}', {ok: 1}) }`
    },
    {
      source: `test: '::测试 {ok}::{ok: 1}'`,
      result: `test: this.$t('测试 {ok}', {ok: 1})`
    },
    {
      source: `::测试 {ok}::{ok: 1}`,
      result: `{{$t('测试 {ok}', {ok: 1})}}`
    }
  ]

  pattern.forEach((p, i) => {
    test(mockData[i].source + ' => ' + mockData[i].result, () => {
      mockData[i] && expect(mockData[i].source.replace(p.pattern, p.replacement)).toBe(mockData[i].result)
    })

    test(mockData2[i].source + ' => ' + mockData2[i].result, () => {
      mockData2[i] && expect(mockData2[i].source.replace(p.pattern, p.replacement)).toBe(mockData2[i].result)
    })
  })
})
