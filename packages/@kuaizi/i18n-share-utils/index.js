module.exports = [
  {
    pattern: />\s*::([^::]+)::({(.+)})?\s*</gm,
    replacement: `>{{$t('$1', {$3})}}<`
  },
  {
    pattern: /(\w+)="::([^::]+)::({(.+)})?"/gm,
    replacement: `:$1="$t('$2', {$4})"`
  },
  {
    pattern: /default:\s*'::([^::]+)::({(.+)})?'/gm,
    replacement: `default() { return this.$t('$1', {$3}) }`
  },
  {
    pattern: /(\w+):\s*'::([^::]+)::({(.+)})?'/gm,
    replacement: `$1: this.$t('$2', {$4})`
  }
]
