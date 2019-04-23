export default [
  {
    pattern: />\s*([\u4e00-\u9fa5]+)\s*</gm,
    replacement: '>{{ $t("$1") }}<',
  },
  {
    pattern: /([\w\-]+)="([\u4e00-\u9fa5]+)"/gm,
    replacement: '\:$1="$t(\'$2\')"',
  },
  {
    pattern: /default:\s*'([\u4e00-\u9fa5]+)'/gm,
    replacement: "default() { return this.$t('$1') }",
  },
  {
    pattern: /(\w+):\s*'([\u4e00-\u9fa5]+)'/gm,
    replacement: "$1: this.$t('$2')",
  },
  {
    pattern: /^('|")(.+)('|")$/gm,
    replacement: "this.$t('$2')",
  },
  {
    pattern: /((\w|[\u4e00-\u9fa5]|[^(\'|\")])+)/gm,
    replacement: "{{ $t('$1') }}",
  }
];