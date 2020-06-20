<script>
import UiLink from "~/components/UI/Links/Link"

export default {
  name: "UiButton",
  props: {
    variant: {
      type: Array,
      default: () => ["primary"],
    },
    to: {
      type: [String, Object],
      default: null,
    },
    submit: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      baseVariants: ["primary", "secondary", "light"],
    }
  },
  methods: {
    isVariant(value) {
      return this.variant.includes(value)
    },
    getBaseVariant() {
      for (let variant of this.baseVariants) {
        if (this.isVariant(variant)) {
          return variant
        }
      }

      return "primary"
    },
    getClassObject() {
      const isOutline = this.isVariant("outline")
      const prefix = isOutline ? "btn__outline_" : "btn__"
      const baseVariant = this.getBaseVariant()
      const variantClass = prefix + baseVariant + (this.active ? "-active" : "")

      return {
        btn: true,
        btn__outline: isOutline,
        [variantClass]: true,
      }
    },
  },
  render(h) {
    const tag = this.to ? UiLink : "button"
    const dataObject = {
      class: this.getClassObject(),
      ...(this.submit && {
        attrs: {
          type: "submit",
        },
      }),
      ...(this.to && {
        props: {
          to: this.to,
          role: "button",
        },
      }),
    }

    return h(tag, dataObject, this.$slots.default)
  },
}
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/base/grid";
@import "../../../assets/styles/base/colors";
@import "../../../assets/styles/base/fonts";

.btn-group > .btn {
  flex: 1 1 auto;
}

.btn-group > .btn:first-child {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-right-width: 0;
}

.btn-group > .btn:not(:first-child):not(:last-child) {
  border-radius: 0;
  border-left-width: nonScalePx(1);

  @media (max-width: $desktop-break-point) {
    border-left-width: pxToVwDesktop(1);
  }
}

.btn-group > .btn:last-child {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-left-width: 0;
}

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
  transition: all 0.3s;

  &__outline {
    background: transparent !important;

    &_secondary {
      border-color: $gray-oslo;
      color: $mako;

      &:hover {
        color: $abbey;
        background-color: $gray-athens !important;
      }
    }

    &_secondary-active {
      border-color: $gray-oslo;
      color: $mako;
      background-color: $iron !important;
    }

    &_light {
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
