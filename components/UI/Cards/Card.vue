<script>
  export default {
    name: 'UiCard',
    props: {
      center: {
        type: Boolean,
        default: false
      }
    },
    render(h) {
      return h(
        'div',
        {
          class: {
            'card': true,
            'card__center': this.center
          }
        },
        this.$slots.default
      )
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../../assets/styles/base/grid";
  @import "../../../assets/styles/base/colors";

  .card {
    width: 100%;
    background: $white;
    display: flex;
    flex-direction: column;
    box-shadow: nonScalePx(0) nonScalePx(2) nonScalePx(4) nonScalePx(0) rgba($black, 0.1);
    border-radius: nonScalePx(4);
    padding: nonScalePx(24);

    &__center {
      align-items: center;
    }

    @media (max-width: $desktop-break-point) {
      box-shadow: pxToVwDesktop(0) pxToVwDesktop(2) pxToVwDesktop(4) pxToVwDesktop(0) rgba($black, 0.1);
      border-radius: pxToVwDesktop(4);
      padding: pxToVwDesktop(24);
    }
  }
</style>
