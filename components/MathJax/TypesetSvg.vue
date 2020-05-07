<template>
  <div class="math-container">{{ math }}</div>
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

      html.setAttribute('data-type', 'svg')
      this.$el.innerHTML = ''
      this.$el.appendChild(html)
      this.$emit('onTypesetted')
    }
  }
</script>

<style lang="scss">
  @import "../../assets/styles/base/grid";

  mjx-container[data-type="svg"] {
    display: inline-block !important;
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
