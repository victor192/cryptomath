<script>
export default {
  name: "UiCardBlock",
  props: {
    variant: {
      type: String,
      default: "light",
    },
  },
  methods: {
    isVariant(value) {
      return this.variant === value
    },
  },
  render(h) {
    return h(
      "div",
      {
        class: {
          "card-block": true,
          "card-block__light": this.isVariant("light"),
          "card-block__default": this.isVariant("default"),
        },
      },
      [
        h(
          "div",
          {
            class: {
              "card-block__header": true,
              "card-block__light_header": this.isVariant("light"),
              "card-block__default_header": this.isVariant("default"),
            },
          },
          this.$slots.header
        ),
        h(
          "div",
          {
            class: {
              "card-block__body": true,
              "card-block__default_body": this.isVariant("default"),
            },
          },
          this.$slots.body
        ),
      ]
    )
  },
}
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/base/grid";
@import "../../../assets/styles/base/colors";

.card-block {
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: nonScalePx(4);

  &__header {
    padding: nonScalePx(12) nonScalePx(15);
    display: flex;
  }

  &__body {
    display: flex;
    flex-direction: column;
    padding: nonScalePx(15) nonScalePx(15);
  }

  &__light {
    border-style: solid;
    border-width: nonScalePx(1);
    border-color: $iron;
    box-shadow: 0 nonScalePx(1) nonScalePx(2) rgba($black, 0.05),
      0 nonScalePx(1) nonScalePx(4) rgba($black, 0.05),
      0 nonScalePx(2) nonScalePx(8) rgba($black, 0.05);
    background-color: $white;

    &_header {
      background: $gray-athens;
      border-bottom-style: solid;
      border-bottom-width: nonScalePx(1);
      border-bottom-color: $iron;
    }
  }

  &__default {
    background: $alabaster;
    padding-left: nonScalePx(20);
    padding-right: nonScalePx(20);

    &_header {
      border-bottom-style: solid;
      border-bottom-width: nonScalePx(1);
      border-bottom-color: $geyser;
      padding: nonScalePx(12) 0;
    }

    &_body {
      padding: nonScalePx(12) 0;
    }
  }

  @media (max-width: $desktop-break-point) {
    border-radius: pxToVwDesktop(4);

    &__header {
      padding: pxToVwDesktop(12) pxToVwDesktop(15);
    }

    &__body {
      padding: pxToVwDesktop(15) pxToVwDesktop(15);
    }

    &__light {
      border-width: pxToVwDesktop(1);
      box-shadow: 0 pxToVwDesktop(1) pxToVwDesktop(2) rgba($black, 0.05),
        0 pxToVwDesktop(1) pxToVwDesktop(4) rgba($black, 0.05),
        0 pxToVwDesktop(2) pxToVwDesktop(8) rgba($black, 0.05);

      &_header {
        border-bottom-width: pxToVwDesktop(1);
      }
    }

    &__default {
      padding-left: pxToVwDesktop(20);
      padding-right: pxToVwDesktop(20);

      &_header {
        border-bottom-width: pxToVwDesktop(1);
        padding: pxToVwDesktop(12) 0;
      }

      &_body {
        padding: pxToVwDesktop(12) 0;
      }
    }
  }
}
</style>
