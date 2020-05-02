<script>
  export default {
    name: 'UiFormGroup',
    props: {
      labelFor: {
        type: String,
        default: ''
      },
      helpId: {
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
              class: 'form-group__label',
              attrs: {
                for: this.labelFor
              },
            },
            this.$slots.label
          ),
          h(
            'div',
            {
              class: 'form-group__input-holder'
            },
            this.$slots.input
          ),
          ...(this.$slots.help ? [
            h(
              'small',
              {
                class: 'form-group__help',
                attrs: {
                  id: this.helpId
                }
              },
              this.$slots.help
            )
          ] : [])
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
  }

  &__input-holder {
    position: relative;
    margin-top: nonScalePx(8);
  }

  &__help {
    display: block;
    margin-top: nonScalePx(4);
  }

  @media (max-width: $desktop-break-point) {
    &__input-holder {
      margin-top: pxToVwDesktop(8);
    }

    &__help {
      margin-top: pxToVwDesktop(4);
    }
  }
}
</style>
