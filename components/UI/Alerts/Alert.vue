<script>
export default {
  name: "UiAlert",
  props: {
    variant: {
      type: String,
      default: "danger",
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
          alert: true,
          alert__danger: this.isVariant("danger"),
        },
      },
      this.$slots.default
    )
  },
}
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/base/grid";
@import "../../../assets/styles/base/colors";

.alert {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: nonScalePx(14);
  border-radius: nonScalePx(2);

  &__danger {
    background: $carousel-pink;
    color: $razzmatazz;
  }

  @media (max-width: $desktop-break-point) {
    padding: pxToVwDesktop(14);
    border-radius: pxToVwDesktop(2);
  }
}
</style>
