<template>
  <div class="container py-5">
    <div class="about">
      <about-content />
    </div>
  </div>
</template>

<script>
import { makeTitle, makeSEO } from "~/tools/seo"
import AboutContent from "~/components/About/Content"
export default {
  components: { AboutContent },
  head() {
    const title = makeTitle([this.$t("about.title")], this.$t("title"))
    const metaObject = makeSEO(title)

    //  Schema.org
    metaObject["script"] = [
      {
        innerHTML:
          '{"@context":"https://schema.org","@type":"Organization","name":"CryptoMath","url":"https://cryptomath.xyz","logo":"https://cryptomath.xyz/images/twitter_card.png","email":"info@cryptomath.xyz","sameAs":["https://www.facebook.com/mathcrypto","https://twitter.com/mathandcrypto","https://github.com/mathandcrypto","https://cryptomath.xyz"]}',
        type: "application/ld+json",
      },
    ]

    return metaObject
  },
}
</script>

<style lang="scss" scoped>
.about {
  height: 100%;
  display: flex;
}
</style>
