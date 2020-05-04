<template>
  <div class="math-container"/>
</template>

<script>
  export default {
    name: 'MathJaxTypesetSvg',
    props: {
      math: {
        type: String,
        default: ''
      }
    },
    async mounted() {
      const options = MathJax.getMetricsFor(this.$el, true)
      const html = await MathJax.tex2svgPromise(this.math, options)

      this.$emit('onTypesetted')
      this.$el.appendChild(html)
    }
  }
</script>

<style lang="scss">
  @import "../../assets/styles/base/grid";

  mjx-container {
    margin: 0 !important;
    font-size: nonScalePx(18);

    @media (max-width: $desktop-break-point) {
      font-size: pxToVwDesktop(18);
    }
  }
</style>

<style lang="scss" scoped>
  .math-container {
    display: inline;
    width: max-content;
  }
</style>
