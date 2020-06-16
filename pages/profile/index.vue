<template>
  <span>Profile page. This page is under construction.</span>
</template>

<script>
export default {
  fetch({ store, redirect }) {
    if (!store.getters["profile/isAuthorized"]) {
      redirect("/")
    }
  },
}
</script>
