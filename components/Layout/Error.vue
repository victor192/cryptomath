<template>
  <ui-card
    class="error-content"
    center
  >
    <img
      class="error-content__empty"
      src="~/assets/images/empty_set.svg"
      alt="empty set"
    >
    <h1 class="error-content__code colors__font_shark">{{ error.statusCode }}</h1>
    <h5 class="fonts__h5 colors__font_pale-sky">{{ $t('errors.text') }}</h5>
  </ui-card>
</template>

<script>
  import UiCard from "~/components/UI/Cards/Card";

  export default {
    name: 'PageError',
    components: {UiCard},
    props: {
      error: {
        type: Object,
        default: () => ({
          statusCode: 404
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/styles/base/grid";
  @import "../../assets/styles/base/fonts";

  .error-content {
    display: flex;
    flex-direction: column;
    width: nonScalePx(460);

    &__empty {
      width: nonScalePx(200);
      height: nonScalePx(200);
    }

    &__code {
      margin-top: nonScalePx(20);
      font-size: nonScalePx(92);
      font-family: $helvetica-bold;
    }

    @media (max-width: $desktop-break-point) {
      width: pxToVwDesktop(460);

      &__empty {
        width: pxToVwDesktop(200);
        height: pxToVwDesktop(200);
      }

      &__code {
        margin-top: pxToVwDesktop(20);
        font-size: pxToVwDesktop(92);
      }
    }
  }
</style>
