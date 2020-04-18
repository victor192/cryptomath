<template>
  <header class="page-header colors__background_shark">
    <div class="container">
      <div class="page-header__content">
        <header-logo />
        <header-nav class="page-header__content_nav" />
      </div>
    </div>
  </header>
</template>

<script>
import HeaderLogo from "@/components/Layout/Header/Logo";
import HeaderNav from "@/components/Layout/Header/Nav";

export default {
  name: "PageHeader",
  components: {
    HeaderLogo,
    HeaderNav,
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/base/grid";

.page-header {
  height: nonScalePx(64);
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;

  &__content {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: nonScalePx(40);

    &_nav {
      margin-left: auto;
    }
  }

  @media (max-width: $desktop-break-point) {
    height: pxToVwDesktop(64);

    &__content {
      height: pxToVwDesktop(40);
    }
  }
}
</style>
