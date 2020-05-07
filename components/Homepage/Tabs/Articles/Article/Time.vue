<script>
  import parseISO from 'date-fns/parseISO'
  import format from 'date-fns/format'
  import { enUS } from 'date-fns/locale'

  export default {
    name: 'ArticleTitle',
    props: {
      dateString: {
        type: String,
        default: '2020-04-25T11:30:30'
      }
    },
    render(h) {
      const date = parseISO(this.dateString)

      return this._v(this.$t('homepage.content.articles.article.created_at', {
        date: format(date, "MMM d''yy", {locale: enUS}),
        time: format(date, 'HH:mm', {locale: enUS})
      }))
    }
  }
</script>
