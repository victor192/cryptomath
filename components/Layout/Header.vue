<template>
  <header class="page-header colors__background_shark">
    <div class="container">
      <div class="page-header__content">
        <header-logo />
        <header-nav class="page-header__content_nav" />
      </div>
    </div>
    <div class="page-header__stopwar colors__background_mako">
      <img src="~/assets/images/ua.svg" alt="Ukraine flag" >
      <div class="stopwar-content">
        <p
          class="fonts__text1 colors__font_silver-sand stopwar-content__main-text"
        >
          Our project supports all Ukrainians during this hypocritical Russian
          aggression against their independence, freedom and life. We oppose
          Putin's imperialism. No war!
        </p>
        <p class="fonts__text1 colors__font_silver-sand">
          To support Ukraine in their time of need visit this
          <a href="https://war.ukraine.ua/support-ukraine/" target="_blank">page</a>.
        </p>
      </div>
    </div>
  </header>
</template>

<script>
import HeaderLogo from "~/components/Layout/Header/Logo"
import HeaderNav from "~/components/Layout/Header/Nav"

export default {
  name: "PageHeader",
  components: {
    HeaderLogo,
    HeaderNav,
  },
}
</script>

<style lang="scss" scoped>
@import "../../assets/styles/base/grid";

.page-header {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__content {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: nonScalePx(64);

    &_nav {
      margin-left: auto;
    }
  }

  &__stopwar {
    width: 100%;
    padding: nonScalePx(12) nonScalePx(24);
    display: flex;

    img {
      width: nonScalePx(84);
      height: nonScalePx(60);
    }

    .stopwar-content {
      display: flex;
      flex-direction: column;
      margin-left: nonScalePx(24);

      &__main-text {
        margin-bottom: nonScalePx(20);
      }
    }
  }

  @media (max-width: $desktop-break-point) {
    &__content {
      height: pxToVwDesktop(64);
    }

    &__stopwar {
      width: 100%;
      padding: pxToVwDesktop(12) pxToVwDesktop(24);

      img {
        width: pxToVwDesktop(84);
        height: pxToVwDesktop(60);
      }

      .stopwar-content {
        display: flex;
        margin-left: pxToVwDesktop(24);

        &__main-text {
          margin-bottom: pxToVwDesktop(20);
        }
      }
    }
  }
}
</style>
