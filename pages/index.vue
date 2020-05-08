<template>
  <div class="container homepage-container">
    <div class="homepage">
      <div class="homepage__content">
        <homepage-content/>
      </div>
      <div class="homepage__sidebar">
        <homepage-stats/>
      </div>
    </div>
  </div>
</template>

<script>
  import HomepageContent from '~/components/Homepage/Content'
  import HomepageStats from "~/components/Homepage/Stats"

  export default {
    components: {
      HomepageStats,
      HomepageContent
    },
    async fetch({store, error}) {
      try {
        await store.dispatch('articles/setArticles', {
          limit: 10,
          offset: 0
        })
      } catch (e) {
        error({statusCode: 500})
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/styles/base/grid";

  .homepage-container {
    padding-top: nonScalePx(50);
    padding-bottom: nonScalePx(50);

    @media (max-width: $desktop-break-point) {
      padding-top: pxToVwDesktop(50);
      padding-bottom: pxToVwDesktop(50);
    }
  }

  .homepage {
    height: 100vh;
    display: flex;

    &__content {
      flex: 1;
      display: flex;
      flex-direction: column;
    }

    &__sidebar {
      width: nonScalePx(350);
      margin-left: nonScalePx(24);
      display: flex;
      flex-direction: column;
    }

    @media (max-width: $desktop-break-point) {
      &__sidebar {
        margin-left: pxToVwDesktop(24);
        width: pxToVwDesktop(350);
      }
    }
  }
</style>
