<template>
  <ui-card-block
    variant="default"
    class="problems-content"
  >
    <span slot="header" class="fonts__text1 fonts__text1_bold colors__font_trout">{{ $t('homepage.problems.title') }}</span>
    <template slot="body">
      <div class="problems-header fonts__text3 colors__font_trout">
        <span>{{ $t('homepage.problems.header.name') }}</span>
        <span>{{ $t('homepage.problems.header.reward') }}</span>
      </div>
      <div class="problems-item fonts__text2 colors__font_downriver">
        <span class="problems-item__title fonts__georgia_regular">Bitcoin scalability problem</span>
        <span class="problems-item__reward fonts__helvetica_bold">1000 BTC</span>
      </div>
      <div class="problems-item fonts__text2 colors__font_downriver">
        <span class="problems-item__title fonts__georgia_regular">Hodge conjecture</span>
        <span class="problems-item__reward fonts__helvetica_bold">200 BTC</span>
      </div>
      <div class="problems-item fonts__text2 colors__font_downriver">
        <span class="problems-item__title fonts__georgia_regular">P versus NP problem</span>
        <span class="problems-item__reward fonts__helvetica_bold">100 BTC</span>
      </div>
      <div class="problems-item fonts__text2 colors__font_downriver">
        <span class="problems-item__title fonts__georgia_regular">Riemann hypothesis</span>
        <span class="problems-item__reward fonts__helvetica_bold">90 BTC</span>
      </div>
      <div class="problems-item fonts__text2 colors__font_downriver">
        <span class="problems-item__title fonts__georgia_regular">Navier–Stokes existence and smoothness</span>
        <span class="problems-item__reward fonts__helvetica_bold">80 BTC</span>
      </div>
      <div class="problems-item fonts__text2 colors__font_downriver">
        <span class="problems-item__title fonts__georgia_regular">Blockchain self-regulation</span>
        <span class="problems-item__reward fonts__helvetica_bold">1000 ETH</span>
      </div>
      <div class="problems-item fonts__text2 colors__font_downriver">
        <span class="problems-item__title fonts__georgia_regular">The elliptic curve discrete logarithm problem</span>
        <span class="problems-item__reward fonts__helvetica_bold">750 ETH</span>
      </div>
    </template>
  </ui-card-block>
</template>

<script>
  import UiCardBlock from "~/components/UI/Cards/CardBlock";

  export default {
    name: 'HomepageProblems',
    components: {
      UiCardBlock
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/styles/base/grid";

  .problems-content {
    margin-bottom: nonScalePx(16);

    @media (max-width: $desktop-break-point) {
      margin-bottom: pxToVwDesktop(16);
    }
  }

  .problems-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: nonScalePx(8);

    @media (max-width: $desktop-break-point) {
      margin-bottom: pxToVwDesktop(8);
    }
  }

  .problems-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: nonScalePx(10);

    &:last-child {
      margin-bottom: 0;
    }

    &__title {
      font-weight: 700;
      white-space: normal;
      word-break: break-word;
    }

    &__reward {
      min-width: nonScalePx(90);
    }

    @media (max-width: $desktop-break-point) {
      margin-bottom: pxToVwDesktop(10);

      &__reward {
        text-align: right;
        min-width: pxToVwDesktop(90);
      }
    }
  }
</style>
