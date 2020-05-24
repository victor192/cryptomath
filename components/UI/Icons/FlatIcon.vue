<script>
  import {getIconObject} from "~/assets/icons";

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
      },
      spin: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      getIconClasses(size) {
        const classes = ['flat-icon']

        switch (size) {
          case 'sm':
            classes.push('flat-icon-sm')
            break
          case 'md':
            classes.push('flat-icon-md')
            break
          case 'lg':
            classes.push('flat-icon-lg')
            break
          case '2x':
            classes.push('flat-icon-2x')
            break
          case '5x':
            classes.push('flat-icon-5x')
            break
        }

        if (this.spin) {
          classes.push('flat-icon-spin')
        }

        return classes
      }
    },
    render(h) {
      const iconObject = getIconObject(this.icon)

      if (iconObject) {
        const width = this.width || iconObject.width
        const height = this.height || iconObject.height
        const fill = this.fill || iconObject.fill
        const classes = this.getIconClasses(this.size)
        const dom = iconObject.dom(width, height, fill, classes.join(' '))

        return h(
          'span',
          {
            class: 'flat-icon-wrapper',
            domProps: {
              innerHTML: dom
            }
          }
        )
      }
      else {
        return null
      }
    }
  }
</script>

<style lang="scss" scoped>
  .flat-icon-wrapper {
    width: max-content;
    height: max-content;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>

<style lang="scss">
  @import "../../../assets/styles/base/grid";

  .flat-icon {
    width: auto;
    height: max-content;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: fill .3s;

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

    &-spin {
      animation: spin 1s linear infinite;
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
