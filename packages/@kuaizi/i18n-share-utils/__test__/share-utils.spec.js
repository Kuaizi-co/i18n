const getTranslateKey = require('../translate')

describe('test getTranslateKey', () => {
  test('test getTranslateKey', () => {
    const template = `
    this.$t('测试');
    {{ $t('abc') }}
    <a :title="$t('标题')"></a>
  `
    const result = `{
  "测试": "测试",
  "abc": "abc",
  "标题": "标题"
}`
    const translateText = JSON.stringify(getTranslateKey(template) || null, null, 2)

    expect(translateText).toBe(result)
  })
})
