<script>
export default {
  fetch({ store, $axios }) {
    store.dispatch("auth/removeToken")

    $axios.setToken(false, "Bearer")

    if (process.browser) {
      location.reload()
    }
  },
}
</script>
