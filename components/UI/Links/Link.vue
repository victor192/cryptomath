<script>
  export default {
    name: 'UiLink',
    props: {
      to: {
        type: [String, Object],
        default: null
      },
      role: {
        type: [String, Boolean],
        default: false
      }
    },
    render(h) {
      return h('nuxt-link', {
        attrs: {
          to: this.to,
          ...(this.role && {role: this.role})
        }
      }, this.$slots.default)
    }
  }
</script>
