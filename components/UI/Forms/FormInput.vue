<script>
import UiFlatIcon from "~/components/Ui/Icons/FlatIcon"

export default {
  name: "UiFormInput",
  props: {
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      default: "",
    },
    isInvalid: {
      type: Boolean,
      default: false,
    },
    value: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      focused: false,
      active: false,
    }
  },
  render(h) {
    const children = [
      h("input", {
        class: "form-input__input",
        domProps: {
          type: this.type,
          value: this.value,
          placeholder: this.placeholder,
        },
        on: {
          input: (event) => {
            this.$emit("input", event.target.value)
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
          },
        },
      }),
      h(
        "transition",
        {
          props: {
            name: "fade",
          },
        },
        [
          ...(this.isInvalid
            ? [
                h(UiFlatIcon, {
                  props: {
                    icon: ["input", "warning"],
                  },
                }),
              ]
            : []),
        ]
      ),
    ]

    return h(
      "div",
      {
        class: {
          "form-input": true,
          "form-input-invalid": this.isInvalid,
          "form-input-active": this.active,
          "form-input-focus": this.focused,
        },
      },
      children
    )
  },
}
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/base/grid";
@import "../../../assets/styles/base/fonts";
@import "../../../assets/styles/base/colors";

.form-input {
  display: flex;
  align-items: center;
  height: nonScalePx(48);
  width: 100%;
  background: $white;
  border-radius: nonScalePx(4);
  border-style: solid;
  border-color: $alto;
  border-width: nonScalePx(1);
  padding-right: nonScalePx(16);
  padding-left: nonScalePx(24);
  transition: border 0.3s;

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
    line-height: nonScalePx(24);

    &::placeholder {
      color: $dusty-gray;
    }
  }

  @media (max-width: $desktop-break-point) {
    height: pxToVwDesktop(48);
    border-radius: pxToVwDesktop(4);
    border-width: pxToVwDesktop(1);
    padding-right: pxToVwDesktop(16);
    padding-left: pxToVwDesktop(24);

    &__input {
      font-size: pxToVwDesktop(18);
      line-height: pxToVwDesktop(24);
    }
  }
}
</style>
