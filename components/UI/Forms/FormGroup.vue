<script>
  export default {
    name: 'UiFormGroup',
    props: {
      labelFor: {
        type: String,
        default: ''
      }
    },
    render(h) {
      return h(
        'div',
        {
          class: 'form-group'
        },
        [
          h(
            'label',
            {
              attrs: {
                for: this.labelFor
              },
              class: 'form-group__label'
            },
            this.$slots.label
          ),
          h(
            'div',
            {
              class: 'form-group__input-holder'
            },
            this.$slots.input
          )
        ]
      )
    }
  }
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/base/grid";
@import "../../../assets/styles/base/fonts";

.form-group {
  display: flex;
  flex-direction: column;

  &__label {
    display: inline-block;
    font-family: $helvetica-neue;
    font-size: nonScalePx(16);
    line-height: nonScalePx(16 * 1.2);
  }

  &__input-holder {
    position: relative;
    margin-top: nonScalePx(8);
  }

  @media (max-width: $desktop-break-point) {
    &__label {
      font-size: pxToVwDesktop(16);
      line-height: pxToVwDesktop(16 * 1.2);
    }

    &__input-holder {
      margin-top: pxToVwDesktop(8);
    }
  }
}
</style>
