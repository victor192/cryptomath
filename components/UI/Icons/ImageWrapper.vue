<script>
  export default {
    name: 'UiImageWrapper',
    render(h) {
      return h(
        'div',
        {
          class: 'image-wrapper'
        },
        this.$slots.default
      )
    }
  }
</script>

<style lang="scss" scoped>
  .image-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
