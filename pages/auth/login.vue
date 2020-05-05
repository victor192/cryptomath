<template>
  <section class="container-fluid">
    <div class="auth-login">
      <login-content/>
    </div>
  </section>
</template>

<script>
  import LoginContent from '~/components/Auth/Login/Content'

  export default {
    fetch({store, redirect}) {
      if (store.getters['profile/isAuthorized']) {
        redirect('/profile')
      }
    },
    components: {
      LoginContent
    }
  }
</script>

<style lang="scss">
  @import "../../assets/styles/base/grid";

  .auth-login {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
