<script>
  const btoa = require('btoa')
  import {getIconObject} from "~/assets/icons"

  export default {
    name: 'UiFlatIcon',
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
      width: {
        type: [Number, Object],
        default: null
      },
      height: {
        type: [Number, Object],
        default: null
      },
      fill: {
        type: [String, Object],
        default: null
      }
    },
    methods: {
      isSize(value) {
        return this.size === value
      }
    },
    render(h) {
      const iconObject = getIconObject(this.icon)

      if (iconObject) {
        const width = this.width || iconObject.width
        const height = this.height || iconObject.height
        const fill = this.fill || iconObject.fill
        const raw = 'data:image/svg+xml;base64,' + btoa(iconObject.dom(width, height, fill))

        return h(
          'span',
          {
            class: 'icon-wrapper',
          },
          [
            h(
              'img',
              {
                class: {
                  'icon': true,
                  'icon-sm': this.isSize('sm'),
                  'icon-md': this.isSize('md'),
                  'icon-lg': this.isSize('lg'),
                  'icon-2x': this.isSize('2x'),
                  'icon-5x': this.isSize('5x')
                },
                attrs: {
                  src: raw,
                  alt: this.alt
                }
              },
            )
          ]
        )
      }
      else {
        return null
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../../assets/styles/base/grid";

  .icon-wrapper {
    width: max-content;
    height: max-content;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .icon {
    overflow: hidden;

    &-sm {
      width: nonScalePx(16);
      height: nonScalePx(16);
    }

    &-md {
      width: nonScalePx(20);
      height: nonScalePx(20);
    }

    &-lg {
      width: nonScalePx(24);
      height: nonScalePx(24);
    }

    &-2x {
      width: nonScalePx(40);
      height: nonScalePx(40);
    }

    &-5x {
      width: nonScalePx(64);
      height: nonScalePx(64);
    }

    @media (max-width: $desktop-break-point) {
      &-sm {
        width: pxToVwDesktop(16);
        height: pxToVwDesktop(16);
      }

      &-md {
        width: pxToVwDesktop(20);
        height: pxToVwDesktop(20);
      }

      &-lg {
        width: pxToVwDesktop(24);
        height: pxToVwDesktop(24);
      }

      &-2x {
        width: pxToVwDesktop(40);
        height: pxToVwDesktop(40);
      }

      &-5x {
        width: pxToVwDesktop(64);
        height: pxToVwDesktop(64);
      }
    }
  }
</style>
