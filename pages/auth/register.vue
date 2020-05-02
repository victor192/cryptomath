<template>
  <section class="container-fluid">
    <div class="auth-register">
      <register-content/>
    </div>
  </section>
</template>

<script>
  import RegisterContent from '~/components/Auth/Register/Content'

  export default {
    components: {
      RegisterContent
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/styles/base/grid";

  .auth-register {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: nonScalePx(24);

    @media (max-width: $desktop-break-point) {
      padding: pxToVwDesktop(24);
    }
  }
</style>
