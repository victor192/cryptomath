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
    width: max-content;
    height: max-content;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
