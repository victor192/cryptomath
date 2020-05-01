<script>
  export default {
    name: 'UiButton',
    props: {
      variant: {
        type: Array,
        default: () => ['primary']
      },
      to: {
        type: [String, Object],
        default: null
      },
      submit: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      isVariant(value) {
        return this.variant.includes(value)
      },
      getClassObject() {
        const prefix = this.isVariant('outline') ? 'btn__outline_' : 'btn__'

        return {
          'btn': true,
          [prefix + 'primary']: this.isVariant('primary'),
          [prefix + 'secondary']: this.isVariant('secondary')
        }
      },
      getAttributes() {
        const attributes = {}

        if (this.to) {
          attributes.to = this.to
          attributes.role = 'button'
        }
        else if (this.submit) {
          attributes.type = 'submit'
        }

        return attributes
      }
    },
    render(h) {
      const tag = this.to ? 'nuxt-link' : 'button'
      const dataObject = {
        class: this.getClassObject(),
        attrs: this.getAttributes()
      }

      return h(tag, dataObject, this.$slots.default)
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../../assets/styles/base/grid";
  @import "../../../assets/styles/base/colors";
  @import "../../../assets/styles/base/fonts";

  .btn {
    width: 100%;
    padding: nonScalePx(12) nonScalePx(24);
    border-radius: nonScalePx(4);
    border-style: solid;
    border-width: nonScalePx(1);
    text-align: center;
    user-select: none;
    font-family: $helvetica-neue, $helvetica-regular;
    font-size: nonScalePx(15);
    white-space: nowrap;
    cursor: pointer;
    transition: all .3s;

    &__outline {
      background: transparent;

      &_secondary {
        border-color: $geyser;
        color: $geyser;

        &:hover {
          border-color: $white;
          color: $white;
        }
      }
    }

    &__primary {
      border-color: $downriver;
      background: $downriver;
      color: $geyser;

      &:hover {
        background: $downlake;
        border-color: $geyser;
        color: $white;
      }
    }

    @media (max-width: $desktop-break-point) {
      padding: pxToVwDesktop(12) pxToVwDesktop(24);
      border-radius: pxToVwDesktop(4);
      border-width: pxToVwDesktop(1);
      font-size: pxToVwDesktop(15);
    }
  }
</style>
