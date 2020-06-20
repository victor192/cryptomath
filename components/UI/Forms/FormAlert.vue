<script>
import UiFlatIcon from "~/components/UI/Icons/FlatIcon"

export default {
  name: "UiFormAlert",
  render(h) {
    return h(
      "div",
      {
        class: "form-alert",
      },
      [
        h(UiFlatIcon, {
          props: {
            icon: ["input", "warning"],
          },
        }),
        h(
          "div",
          {
            class: "form-alert__text",
          },
          this.$slots.default
        ),
      ]
    )
  },
}
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/base/grid";
@import "../../../assets/styles/base/colors";

.form-alert {
  position: absolute;
  left: 100%;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  margin-left: nonScalePx(24);
  padding: nonScalePx(10) nonScalePx(24);
  border-radius: nonScalePx(4);
  border-width: nonScalePx(1);
  border-style: solid;
  border-color: $alto;
  font-size: nonScalePx(18);
  line-height: nonScalePx(18 * 1.5);
  white-space: nowrap;
  background-color: $white;
  user-select: none;
  pointer-events: none;
  /*&__error-icon {
      width: nonScalePx(14);
      height: nonScalePx(14);
    }*/

  &__text {
    margin-left: nonScalePx(16);
  }

  &:before,
  &:after {
    content: "";
    width: 0;
    height: 0;
    border-color: transparent $alto;
    border-style: solid;
    border-width: nonScalePx(8) nonScalePx(8) nonScalePx(8) 0;
    position: absolute;
    right: 100%;
    top: 50%;
    margin-top: nonScalePx(-8);
  }

  &:after {
    border-color: transparent $white;
    margin-right: nonScalePx(-1.8);
  }

  @media (max-width: $desktop-break-point) {
    margin-left: pxToVwDesktop(24);
    padding: pxToVwDesktop(10) pxToVwDesktop(24);
    border-radius: pxToVwDesktop(4);
    border-width: pxToVwDesktop(1);
    font-size: pxToVwDesktop(18);
    line-height: pxToVwDesktop(18 * 1.5);

    &__error-icon {
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: pxToVwDesktop(16);
        height: pxToVwDesktop(16);
      }
    }

    &__text {
      margin-left: pxToVwDesktop(16);
    }

    &:before,
    &:after {
      border-width: pxToVwDesktop(8) pxToVwDesktop(8) pxToVwDesktop(8) 0;
      margin-top: pxToVwDesktop(-8);
    }

    &:after {
      margin-right: pxToVwDesktop(-1.8);
    }
  }
}
</style>
