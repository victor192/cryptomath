<template>
  <section class="container-fluid">
    <div class="auth-register-confirm">
      <register-confirm />
    </div>
  </section>
</template>

<script>
import RegisterConfirm from "~/components/Auth/Register/Confirm"

export default {
  components: {
    RegisterConfirm,
  },
  validate({ store }) {
    return store.state.auth.register.data.id !== null
  },
}
</script>

<style lang="scss" scoped>
.auth-register-confirm {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
