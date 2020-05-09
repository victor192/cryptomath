<template>
  <div class="header-logo" @click="goToHomepage">
    <img src="~/assets/images/logo.svg" alt="logo image" />
    <h4 class="header-logo__title fonts__h4 colors__font_white">{{ $t('layout.header.project') }}</h4>
  </div>
</template>

<script>
export default {
  name: "HeaderLogo",
  methods: {
    goToHomepage() {
      this.$router.push(this.localePath({ name: "index" }))
    },
  },
}
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/base/grid";

.header-logo {
  display: flex;
  align-items: center;
  cursor: pointer;

  img {
    width: nonScalePx(40);
    height: nonScalePx(40);
  }

  &__title {
    margin-left: nonScalePx(16);
    margin-top: nonScalePx(5);
  }

  @media (max-width: $desktop-break-point) {
    img {
      width: pxToVwDesktop(40);
      height: pxToVwDesktop(40);
    }

    &__title {
      margin-left: pxToVwDesktop(16);
      margin-top: pxToVwDesktop(5);
    }
  }
}
</style>
