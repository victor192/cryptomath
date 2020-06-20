<template>
  <div class="advertise-content fonts__helvetica colors__font_pale-sky">
    <span class="text-center">Advertise block</span>
  </div>
</template>

<script>
export default {
  name: "HomepageAdvertise",
}
</script>

<style lang="scss" scoped>
@import "../../assets/styles/base/grid";

.advertise-content {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f7f7f7;
  height: nonScalePx(600);
  font-size: nonScalePx(24);

  @media (max-width: $desktop-break-point) {
    height: pxToVwDesktop(600);
    font-size: pxToVwDesktop(24);
  }
}
</style>
