<template>
  <div class="math-container"/>
</template>

<script>
  export default {
    name: 'MathJaxTypeset',
    props: {
      math: {
        type: String,
        default: ''
      }
    },
    async mounted() {
      const options = MathJax.getMetricsFor(this.$el, true)
      const html = await MathJax.tex2svgPromise(this.math, options)

      this.$el.appendChild(html)
    }
  }
</script>

<style lang="scss">
  mjx-container {
    margin: 0 !important;
  }
</style>

<style lang="scss" scoped>
  @import "../../assets/styles/base/colors";

  .math-container {
    width: 100%;
    background: $white;
  }
</style>
