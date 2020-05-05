<template>
  <div class="header-nav colors__font_white">
    <nuxt-link to="/articles" class="header-nav__link fonts__h5">{{ $t('layout.header.links.articles') }}</nuxt-link>
    <nuxt-link to="/games" class="header-nav__link fonts__h5">{{ $t('layout.header.links.games') }}</nuxt-link>
    <nuxt-link to="/authors" class="header-nav__link fonts__h5">{{ $t('layout.header.links.authors') }}</nuxt-link>
    <nuxt-link to="/problems" class="header-nav__link fonts__h5">{{ $t('layout.header.links.problems') }}</nuxt-link>
    <div class="header-nav__auth">
      <ui-button
        :variant="['outline', 'secondary']"
        to="/auth/login"
        class="header-nav__auth_login"
      >{{ $t('layout.header.links.login') }}</ui-button>
      <ui-button
        :variant="['primary']"
        to="/auth/register"
      >{{ $t('layout.header.links.register') }}</ui-button>
    </div>
  </div>
</template>

<script>
import UiButton from '~/components/UI/Buttons/Button'

export default {
  name: "HeaderNav",
  components: {
    UiButton
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/base/grid";
@import "../../../assets/styles/base/fonts";
@import "../../../assets/styles/base/colors";

.header-nav {
  display: flex;
  align-items: center;

  &__link {
    color: $white;
    margin-right: nonScalePx(24);
    padding-top: nonScalePx(5);

    &:last-child {
      margin-right: 0;
    }
  }

  &__auth {
    display: flex;
    align-items: center;
    margin-left: nonScalePx(32);

    &_login {
      margin-right: nonScalePx(8);
    }
  }

  @media (max-width: $desktop-break-point) {
    &__link {
      margin-right: pxToVwDesktop(24);
      padding-top: pxToVwDesktop(5);
    }

    &__auth {
      margin-left: pxToVwDesktop(32);

      &_login {
        margin-right: pxToVwDesktop(8);
      }
    }
  }
}
</style>
