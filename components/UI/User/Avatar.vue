<script>
  import identicon from 'svg-identicon'

  export default {
    name: 'UiUserAvatar',
    props: {
      hash: {
        type: String,
        default: ''
      }
    },
    render(h) {
      const svg = identicon({
        type: 'SQUARE',
        hash: this.hash,
        width: 40,
        size: 10
      })

      return h(
        'div',
        {
          class: 'user-avatar',
          domProps: {
            innerHTML: svg
          }
        }
      )
    }
  }
</script>

<style lang="scss">
  @import "../../../assets/styles/base/grid";
  @import "../../../assets/styles/base/colors";

  .user-avatar {
    width: max-content;
    display: flex;
    justify-content: center;
    align-items: center;
    background: $gray-athens;
    border-radius: nonScalePx(2);

    svg {
      width: nonScalePx(45);
      height: nonScalePx(45);
    }

    @media (max-width: $desktop-break-point) {
      border-radius: pxToVwDesktop(2);

      svg {
        width: pxToVwDesktop(45);
        height: pxToVwDesktop(45);
      }
    }
  }
</style>
