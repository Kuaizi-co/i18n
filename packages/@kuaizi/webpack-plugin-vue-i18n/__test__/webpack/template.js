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
          return this.$t('item.title')
          return this.$t('文字')
        }
      }
    }
  </script>
`
