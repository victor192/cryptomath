<template>
  <div class="default-layout">
    <page-header/>
    <nuxt />
  </div>
</template>

<script>
  import PageHeader from "@/components/Layout/Header";
  export default {
    components: {PageHeader}
  }
</script>

<style lang="scss" scoped>
  @import "../assets/styles/base/grid";
  @import "../assets/styles/base/colors";

  .default-layout {
    height: 100vh;
    background-color: $white;
    background-image: linear-gradient(rgba($white,.95), rgba($white,.98)), url(../assets/images/bg.jpg);
    background-position: top left;
    background-repeat: repeat;
    background-size: nonScalePx(300);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1 0 auto;
    padding-top: nonScalePx(64);
    margin: 0;

    @media (max-width: $desktop-break-point) {
      background-size: pxToVwDesktop(300);
      padding-top: pxToVwDesktop(64);
    }
  }
</style>
