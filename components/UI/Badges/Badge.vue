<script>
  export default {
    name: 'UiBadge',
    props: {
      variant: {
        type: String,
        default: 'tag'
      },
      to: {
        type: [String, Object],
        default: null
      },
    },
    methods: {
      isVariant(value) {
        return this.variant === value
      },
      getClassObject() {
        return {
          'badge': true,
          'badge__hub': this.isVariant('hub'),
          'badge__tag': this.isVariant('tag')
        }
      },
      getAttributes() {
        const attributes = {}

        if (this.to) {
          attributes.to = this.to
        }

        return attributes
      }
    },
    render(h) {
      const tag = this.to ? 'nuxt-link' : 'span'
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

  .badge {
    display: inline-block;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-style: solid;
    border-width: nonScalePx(1);
    border-radius: nonScalePx(3);
    padding: nonScalePx(4) nonScalePx(6);
    transition: color .15s ease-in-out,
                background-color .15s ease-in-out,
                border-color .15s ease-in-out,
                box-shadow .15s ease-in-out;

    &__tag {
      border-color: $black-squeeze;
      color: $astral;
      background-color: #e1ecf4;

      &:hover {
        border-color: #d1e5f1;
        color: #2c5777;
        background-color: #d1e5f1;
      }
    }

    &__hub {
      border-color: $bali-hai;
      color: $bali-hai;

      &:hover {
        border-color: $astral;
        color: $astral;
      }
    }

    @media (max-width: $desktop-break-point) {
      padding: pxToVwDesktop(4) pxToVwDesktop(6);
    }
  }
</style>
