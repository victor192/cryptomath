<template>
  <div class="container py-5">
    <div class="about">
      <about-content />
    </div>
  </div>
</template>

<script>
import AboutContent from "~/components/About/Content"
export default {
  components: { AboutContent },
}
</script>

<style lang="scss" scoped>
.about {
  height: 100%;
  display: flex;
}
</style>
