<template>
  <div class="default-layout">
    <page-header/>
    <nuxt />
    <page-footer/>
  </div>
</template>

<script>
  import PageHeader from "~/components/Layout/Header";
  import PageFooter from "~/components/Layout/Footer";

  export default {
    components: {
      PageFooter,
      PageHeader
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/styles/base/colors";

  .default-layout {
    background-color: $white;
    background-image: url(../assets/images/bg.png);
    background-position: top left;
    background-repeat: repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1 0 auto;
    margin: 0;
  }
</style>
