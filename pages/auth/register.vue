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
    },
    async asyncData({ store, error }) {
      try {
        await store.dispatch('auth/setRegister')
      } catch (e) {
        error({statusCode: 500})
      }
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
