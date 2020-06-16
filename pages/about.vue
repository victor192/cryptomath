<template>
  <div class="container about-container">
    About page
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/styles/base/grid";

.about-container {
  padding-top: nonScalePx(50);
  padding-bottom: nonScalePx(50);

  @media (max-width: $desktop-break-point) {
    padding-top: pxToVwDesktop(50);
    padding-bottom: pxToVwDesktop(50);
  }
}
</style>
