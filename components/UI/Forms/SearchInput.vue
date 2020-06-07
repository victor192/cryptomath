<script>
  import UiFlatIcon from "~/components/Ui/Icons/FlatIcon"

  export default {
    name: 'UiSearchInput',
    props: {
      placeholder: {
        type: String,
        default: ''
      },
      value: {
        type: String,
        default: ''
      },
      loading: {
        type: Boolean,
        default: false
      },
      isCompliance: {
        Boolean: Boolean,
        default: false
      }
    },
    data() {
      return {
        active: false,
        focused: false
      }
    },
    computed: {
      isTyping() {
        return this.value.length > 0
      }
    },
    methods: {
      onSubmit(event)  {
        if(event instanceof KeyboardEvent && event.key !== 'Enter') {
          return
        }

        if (this.isTyping) {
          this.$emit('onSearchSubmit', this.value)
        }
        else if (this.isCompliance) {
          this.$emit('onSearchClosed')
        }
      },
      onClosed() {
        this.$emit('onSearchClosed')
      }
    },
    render(h) {
      const input = h(
        'input',
        {
          class: 'search-input__input',
          domProps: {
            type: 'text',
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
              setTimeout(() => this.focused = false, 100)
            },
            keyup: this.onSubmit
          }
        }
      )
      const search = h(UiFlatIcon, {
        class: 'search-input__loop',
        props: {
          icon: ['input', 'search'],
          fill: this.focused ? '#0058A3' : '#959595',
        },
        nativeOn: {
          click: this.onSubmit
        }
      })
      const spinner = h(UiFlatIcon, {
        props: {
          icon: ['input', 'circleNotch'],
          spin: true,
          fill: '#111111'
        }
      })
      const close = h(
          'transition',
          {
            props: {
              name: 'fade',
              mode: 'in-out'
            }
          },
          [
            h(
              'div',
              {
                class: 'search-input__close'
              },
              [
                h(
                  UiFlatIcon, {
                    class: 'search-input__close_icon',
                    props: {
                      icon: ['input', 'close'],
                      fill: '#111111'
                    },
                    nativeOn: {
                      click: this.onClosed
                    }
                  }
                ),
                h('span', {
                  class: 'search-input__close_divider'
                })
              ]
            )
          ]
      )
      const children = [
        input,
        ...((this.isTyping || this.isCompliance) ? [close] : []),
        ...(this.loading ? [spinner] : [search])
      ]

      return h(
        'div',
        {
          class: {
            'search-input': true,
            'search-input-active': this.active,
            'search-input-focus': this.focused
          }
        },
        children
      )
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../../assets/styles/base/grid";
  @import "../../../assets/styles/base/colors";
  @import "../../../assets/styles/base/fonts";

  .search-input {
    display: flex;
    align-items: center;
    height: nonScalePx(48);
    width: 100%;
    background: $white;
    border-radius: nonScalePx(4);
    border-style: solid;
    border-color: $geyser;
    border-width: nonScalePx(1);
    padding-right: nonScalePx(18);
    padding-left: nonScalePx(24);
    transition: border .4s;

    &-active {
      border-color: $dusty-gray;
    }

    &-focus {
      border-color: $endeavour;
      box-shadow: 0 0 0 nonScalePx(1) $endeavour;
    }

    &__input {
      width: 100%;
      color: $gray-cod;
      font-family: $helvetica-regular;
      font-size: nonScalePx(18);
      line-height: nonScalePx(24);

      &::placeholder {
        color: $dusty-gray;
      }
    }

    &__close {
      margin-left: nonScalePx(10);
      display: flex;
      align-items: center;

      &_icon {
        cursor: pointer;
      }

      &_divider {
        width: nonScalePx(1);
        height: nonScalePx(24);
        background: $alto;
        margin-left: nonScalePx(17);
        margin-right: nonScalePx(17);
      }
    }

    &__loop {
      cursor: pointer;
    }

    @media (max-width: $desktop-break-point) {
      height: pxToVwDesktop(48);
      border-radius: pxToVwDesktop(4);
      padding-right: pxToVwDesktop(18);
      padding-left: pxToVwDesktop(24);

      &-focus {
        box-shadow: 0 0 0 pxToVwDesktop(1) $endeavour;
      }

      &__input {
        font-size: pxToVwDesktop(18);
        line-height: pxToVwDesktop(24);
      }

      &__close {
        margin-left: pxToVwDesktop(10);

        &_divider {
          width: pxToVwDesktop(1);
          height: pxToVwDesktop(24);
          margin-left: pxToVwDesktop(17);
          margin-right: pxToVwDesktop(17);
        }
      }
    }
  }
</style>
