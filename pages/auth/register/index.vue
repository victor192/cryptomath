<template>
  <section class="container-fluid auth-register-container">
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
    async fetch({ store, error }) {
      try {
        await store.dispatch('auth/setRegisterCaptcha')
      } catch (e) {
        error({statusCode: 500})
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../../assets/styles/base/grid";

  .auth-register-container {
    padding: nonScalePx(50);

    @media (max-width: $desktop-break-point) {
      padding: pxToVwDesktop(50);
    }
  }

  .auth-register {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
