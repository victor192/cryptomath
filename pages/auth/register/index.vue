<template>
  <section class="container-fluid py-5">
    <div class="auth-register">
      <register-content />
    </div>
  </section>
</template>

<script>
import RegisterContent from "~/components/Auth/Register/Content"

export default {
  components: {
    RegisterContent,
  },
  async fetch({ store, error, redirect }) {
    if (store.getters["profile/isAuthorized"]) {
      redirect("/profile")
    } else {
      try {
        await store.dispatch("auth/setRegisterCaptcha")
      } catch (e) {
        error({ statusCode: 500 })
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.auth-register {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
