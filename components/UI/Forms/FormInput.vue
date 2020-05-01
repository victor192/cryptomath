<script>
  import UiIcon from "~/components/Ui/Icons/Icon"

  export default {
    name: 'UiFormInput',
    components: {
      UiIcon
    },
    props: {
      type: {
        type: String,
        default: 'text'
      },
      placeholder: {
        type: String,
        default: ''
      },
      isInvalid: {
        type: Boolean,
        default: false
      },
      value: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        focused: false,
        active: false
      }
    },
    render(h) {
      const children = [
        h(
          'input',
          {
            class: 'form-input__input',
            domProps: {
              type: this.type,
              value: this.value,
              placeholder: this.placeholder
            },
            on: {
              input: (event) => {
                this.$emit('input', event.target.value)
              },
              mouseover: () => {
                this.active = true
              },
              mouseout: () => {
                this.active = false
              },
              focus: () => {
                this.focused = true
              },
              blur: () => {
                this.focused = false
              }
            }
          }
        )
      ]

      if (this.isInvalid) {
        children.push(
          h(
            UiIcon,
            {
              props: {
                icon: ['input', 'warning']
              }
            }
          )
        )
      }

      return h(
        'div',
        {
          class: {
            'form-input': true,
            'form-input-invalid': this.isInvalid,
            'form-input-active': this.active,
            'form-input-focus': this.focused
          }
        },
        children
      )
    }
  }
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/base/grid";
@import "../../../assets/styles/base/fonts";
@import "../../../assets/styles/base/colors";

.form-input {
  display: flex;
  align-items: center;
  width: 100%;
  background: $white;
  border-radius: nonScalePx(4);
  border-style: solid;
  border-color: $alto;
  border-width: nonScalePx(1);
  padding-top: nonScalePx(10);
  padding-right: nonScalePx(16);
  padding-bottom: nonScalePx(10);
  padding-left: nonScalePx(24);
  transition: border .3s;

  &-invalid {
    border-color: $razzmatazz;
  }

  &-active {
    border-color: $dusty-gray;
  }

  &-focus {
    border-color: $downriver;
  }

  &__input {
    width: 100%;
    color: $gray-cod;
    font-family: $helvetica-regular;
    font-size: nonScalePx(18);
    line-height: nonScalePx(18 * 1.5);

    &::placeholder {
      color: $dusty-gray;
    }
  }

  @media (max-width: $desktop-break-point) {
    border-radius: pxToVwDesktop(4);
    border-width: pxToVwDesktop(1);
    padding-top: pxToVwDesktop(10);
    padding-right: pxToVwDesktop(16);
    padding-bottom: pxToVwDesktop(10);
    padding-left: pxToVwDesktop(24);

    &__input {
      font-size: pxToVwDesktop(18);
      line-height: pxToVwDesktop(18 * 1.5);
    }
  }
}
</style>
