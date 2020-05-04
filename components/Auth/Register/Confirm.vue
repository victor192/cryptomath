<template>
  <ui-card class="register-confirm-content colors__background_apple-green colors__font_mako">
    <h5 class="register-confirm-content__title fonts__h5">{{ $t('auth.register.confirm.title') }}</h5>
    <div class="register-confirm-content__body fonts__text1">{{ $t('auth.register.confirm.body', {display_name: registerData.displayName}) }}</div>
    <div class="fonts__text2">{{ $t('auth.register.confirm.email', {email: registerData.email}) }}</div>
  </ui-card>
</template>

<script>
  import { mapState } from 'vuex'

  import UiCard from "~/components/UI/Cards/Card"

  export default {
    name: 'RegisterConfirm',
    components: {
      UiCard
    },
    computed: {
      ...mapState({
        registerData: state => state.auth.register.data
      }),
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../../assets/styles/base/grid";
  @import "../../../assets/styles/base/colors";

  .register-confirm-content {
    width: nonScalePx(600);

    &__title {
      margin-bottom: nonScalePx(40);
    }

    &__body {
      margin-bottom: nonScalePx(10);
    }

    @media (max-width: $desktop-break-point) {
      width: pxToVwDesktop(600);

      &__title {
        margin-bottom: pxToVwDesktop(40);
      }

      &__body {
        margin-bottom: pxToVwDesktop(10);
      }
    }
  }
</style>
