<template>
  <div class="articles-content">
    <div class="homepage-content__title">
      <h4 class="fonts__h4 colors__font_shark">{{ $t('articles.content.title') }}</h4>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ArticlesContent'
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/styles/base/grid";
  @import "../../assets/styles/base/colors";

  .articles-content {
    height: 100%;
    background: $white;
    border-style: solid;
    border-width: nonScalePx(1);
    border-color: $iron;
    padding: nonScalePx(24);
    display: flex;
    flex-direction: column;

    &__title {
      height: nonScalePx(90);
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    @media (max-width: $desktop-break-point) {
      border-width: pxToVwDesktop(1);
      padding: pxToVwDesktop(24);

      &__title {
        height: pxToVwDesktop(90);
      }
    }
  }
</style>
