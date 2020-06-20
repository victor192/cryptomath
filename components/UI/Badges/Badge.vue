<script>
import UiLink from "~/components/UI/Links/Link"

export default {
  name: "UiBadge",
  props: {
    variant: {
      type: String,
      default: "tag",
    },
    to: {
      type: [String, Object],
      default: null,
    },
  },
  methods: {
    isVariant(value) {
      return this.variant === value
    },
    getClassObject() {
      return {
        badge: true,
        badge__hub: this.isVariant("hub"),
        badge__tag: this.isVariant("tag"),
      }
    },
  },
  render(h) {
    const tag = this.to ? UiLink : "span"
    const dataObject = {
      class: this.getClassObject(),
      ...(this.to && {
        props: {
          to: this.to,
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

.badge {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  border-style: solid;
  border-width: nonScalePx(1);
  border-radius: nonScalePx(3);
  padding: nonScalePx(4) nonScalePx(6);
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

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
    border-width: pxToVwDesktop(1);
    border-radius: pxToVwDesktop(3);
    padding: pxToVwDesktop(4) pxToVwDesktop(6);
  }
}
</style>
