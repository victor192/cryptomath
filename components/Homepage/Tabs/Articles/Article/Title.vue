<script>
import MathJaxTypesetSvg from "~/components/MathJax/TypesetSvg"

export default {
  name: "ArticleTitle",
  components: {
    MathJaxTypesetSvg,
  },
  props: {
    title: {
      type: String,
      default: "",
    },
  },
  render(h) {
    const matches = this.title.match(/\$([^$]+)\$/gm)
    const nodes = []

    if (matches && matches.length > 0) {
      let lastIndex = 0

      for (let match of matches) {
        const index = this.title.indexOf(match)
        const text = this.title.substring(lastIndex, index)

        nodes.push(this._v(text))

        const math = match.replace(/\$/g, "")

        nodes.push(
          h(MathJaxTypesetSvg, {
            props: { math },
          })
        )

        lastIndex = index + match.length
      }

      const remains = this.title.substring(lastIndex)

      if (remains.length > 0) {
        nodes.push(this._v(remains))
      }
    } else {
      nodes.push(this._v(this.title))
    }

    return h(
      "span",
      {
        class: "article-title",
      },
      nodes
    )
  },
}
</script>

<style lang="scss" scoped>
@import "../../../../../assets/styles/base/grid";
@import "../../../../../assets/styles/base/fonts";
@import "../../../../../assets/styles/base/colors";

.article-title {
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;
  font-family: $georgia-regular;
  font-weight: 700;
  font-size: nonScalePx(20);
  line-height: nonScalePx(20 * 1.2);
  color: $downriver;

  @media (max-width: $desktop-break-point) {
    font-size: pxToVwDesktop(20);
    line-height: pxToVwDesktop(20 * 1.2);
  }
}
</style>
