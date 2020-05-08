<script>
  export default {
    name: 'UiCardBlock',
    render(h) {
      return h(
        'div',
        {
          class: 'card-block'
        },
        [
          h(
            'div',
            {
              class: 'card-block__header'
            },
            this.$slots.header
          ),
          h(
            'div',
            {
              class: 'card-block__body'
            },
            this.$slots.body
          )
        ]
      )
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../../assets/styles/base/grid";
  @import "../../../assets/styles/base/colors";

  .card-block {
    width: 100%;
    display: flex;
    flex-direction: column;
    border-style: solid;
    border-width: pxToVwDesktop(1);
    border-color: $iron;
    border-radius: pxToVwDesktop(3);
    box-shadow: 0 pxToVwDesktop(1) pxToVwDesktop(2) rgba($black, 0.05),
                0 pxToVwDesktop(1) pxToVwDesktop(4) rgba($black, 0.05),
                0 pxToVwDesktop(2) pxToVwDesktop(8) rgba($black, 0.05);
    background-color: $white;

    &__header {
      padding: pxToVwDesktop(12) pxToVwDesktop(15);
      background: #fafafb;
      border-bottom-style: solid;
      border-bottom-width: pxToVwDesktop(1);
      border-bottom-color: $iron;
    }

    &__body {
      display: flex;
      flex-direction: column;
      padding: pxToVwDesktop(15) pxToVwDesktop(15);
    }

    @media (max-width: $desktop-break-point) {
      border-width: pxToVwDesktop(1);
      border-radius: pxToVwDesktop(3);
      box-shadow: 0 pxToVwDesktop(1) pxToVwDesktop(2) rgba($black, 0.05),
                  0 pxToVwDesktop(1) pxToVwDesktop(4) rgba($black, 0.05),
                  0 pxToVwDesktop(2) pxToVwDesktop(8) rgba($black, 0.05);

      &__header {
        padding: pxToVwDesktop(12) pxToVwDesktop(15);
        border-bottom-width: pxToVwDesktop(1);
      }

      &__body {
        padding: pxToVwDesktop(15) pxToVwDesktop(15);
      }
    }
  }
</style>
