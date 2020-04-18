<template>
  <div class="header-nav colors__font_white">
    <nuxt-link to="/articles" class="header-nav__link fonts__h5">Articles</nuxt-link>
    <nuxt-link to="/games" class="header-nav__link fonts__h5">Games</nuxt-link>
    <nuxt-link to="/authors" class="header-nav__link fonts__h5">Authors</nuxt-link>
    <nuxt-link to="/problems" class="header-nav__link fonts__h5">Problems</nuxt-link>
    <div class="header-nav__auth">
      <nuxt-link to="/auth/login" role="button" class="btn btn__outline header-nav__auth_login">Log in</nuxt-link>
      <nuxt-link to="auth/register" role="button" class="btn btn__primary">Sign up</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderNav",
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

    &:last-child {
      margin-right: 0;
    }
  }

  &__auth {
    margin-left: nonScalePx(32);

    &_login {
      margin-right: nonScalePx(8);
    }
  }

  @media (max-width: $desktop-break-point) {
    &__link {
      margin-right: pxToVwDesktop(24);
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
