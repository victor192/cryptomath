<script>
  export default {
    name: 'UiButtonGroup',
    render(h) {
      return h(
        'div',
        {
          class: 'btn-group',
          attrs: {
            role: 'group'
          }
        },
        this.$slots.default
      )
    }
  }
</script>

<style lang="scss" scoped>
  .btn-group {
    display: inline-flex;
  }
</style>
