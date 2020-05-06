<template>
  <div class="container homepage-container">
    <div class="homepage">
      <div class="homepage__content">
        <homepage-content/>
      </div>
      <div class="homepage__sidebar">
        33354
      </div>
    </div>
  </div>
</template>

<script>
  import HomepageContent from '~/components/Homepage/Content'

  export default {
    components: {
      HomepageContent
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
      background: red;
    }

    &__sidebar {
      width: nonScalePx(350);
      display: flex;
      flex-direction: column;
    }

    @media (max-width: $desktop-break-point) {
      &__sidebar {
        width: pxToVwDesktop(350);
      }
    }
  }
</style>
