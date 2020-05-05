<template>
  <b>User profile</b>
</template>

<script>
  export default {
    fetch({store, redirect}) {
      if (!store.getters['profile/isAuthorized']) {
        redirect('/')
      }
    },
  }
</script>
