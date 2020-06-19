<template>
  <div class="footer-banner p-3 colors__background_mako colors__font_white">
    <p class="fonts__text2">
      The project is currently under development. See
      <nuxt-link :to="localePath('about')" class="text-underline">
        about
      </nuxt-link>
      page for more info.
    </p>
  </div>
</template>

<script>
export default {
  name: "FooterBanner",
}
</script>

<style lang="scss" scoped>
.footer-banner {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    color: inherit;
  }
}
</style>
