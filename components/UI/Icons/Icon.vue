<script>
  import UiImageWrapper from "~/components/Ui/Icons/ImageWrapper"

  export default {
    name: 'UiIconWarning',
    components: {
      UiImageWrapper
    },
    props: {
      size: {
        type: String,
        default: 'sm'
      },
      alt: {
        type: String,
        default: 'icon image'
      },
      icon: {
        type: Array,
        required: true
      },
      fill: {
        type: String,
        default: 'black'
      }
    },
    methods: {
      isSize(value) {
        return this.size === value
      }
    },
    render(h) {
      const iconPath = this.icon.join('/') + '.svg'

      return h(
        UiImageWrapper,
        [
          h(
            'img',
            {
              class: {
                'icon': true,
                'icon-sm': this.isSize('sm'),
                'icon-md': this.isSize('md')
              },
              attrs: {
                src: require('~/assets/images/icons/' + iconPath),
                alt: this.alt
              }
            },
          )
        ]
      )
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../../assets/styles/base/grid";

  .icon {
    overflow: hidden;
    width: nonScalePx(24);
    height: nonScalePx(24);

    &-sm {
      width: nonScalePx(16);
      height: nonScalePx(16);
    }

    &-md {
      width: nonScalePx(20);
      height: nonScalePx(20);
    }

    @media (max-width: $desktop-break-point) {
      width: pxToVwDesktop(24);
      height: pxToVwDesktop(24);

      &-sm {
        width: pxToVwDesktop(16);
        height: pxToVwDesktop(16);
      }

      &-md {
        width: pxToVwDesktop(20);
        height: pxToVwDesktop(20);
      }
    }
  }
</style>
