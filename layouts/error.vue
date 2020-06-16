<template>
  <div class="container-fluid">
    <div class="error-layout">
      <page-error :error="error" />
    </div>
  </div>
</template>

<script>
import PageError from "~/components/Layout/Error"

export default {
  components: {
    PageError,
  },
  props: ["error"],
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/base/grid";

.error-layout {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
