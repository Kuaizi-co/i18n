export default [
  {
    pattern: />\s*(.+)\s*</gm,
    replacement: '>{{ $t(\'$1\') }}<',
  },
  {
    pattern: /([\w\-]+)=("|')(.+)("|')/gm,
    replacement: '\:$1="$t(\'$3\')"',
  },
  {
    pattern: /default:\s*'(.+)'/gm,
    replacement: "default() { return this.$t('$1') }",
  },
  {
    pattern: /(\w+):\s*'(.+)'/gm,
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
