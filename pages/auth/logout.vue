<script>
  export default {
    fetch({ store, $axios, route}) {
      store.dispatch('auth/removeToken')

      $axios.setToken(false, 'Bearer')

      if (process.browser) {
        location.reload()
      }
    }
  }
</script>
