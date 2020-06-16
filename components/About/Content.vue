<template>
  <div class="content about-content">
    <h4 class="fonts__h4 colors__font_shark">
      The CryptoMath project
    </h4>
    <p class="about-content__text fonts__text1 mt-3">
      <span class="fonts__helvetica_bold">CryptoMath</span> is a system of
      publishing articles related to mathematics and blockchain with the
      possibility of funding the author using cryptocurrencies. We also support
      a question and answer service with a reward for the solution.
    </p>
    <p class="about-content__text fonts__text1 mt-3">
      Every visitor is free to
      <nuxt-link :to="localePath('/auth/register')">
        register
      </nuxt-link>
      and publish their
      <nuxt-link :to="localePath('/articles')">
        articles
      </nuxt-link>
      or fully use the
      <nuxt-link :to="localePath('/problems')">
        problems
      </nuxt-link>
      service.
      <nuxt-link :to="localePath('/users')">
        Users
      </nuxt-link>
      can join
      <nuxt-link :to="localePath('/organizations')">
        organizations
      </nuxt-link>
      that have more funds to finance
      <nuxt-link :to="localePath('/articles')">
        projects
      </nuxt-link>
      and find solutions to
      <nuxt-link :to="localePath('/problems')">
        problems
      </nuxt-link>. Each
      article or problem can be classified by multiple
      <nuxt-link :to="localePath('/hubs')">
        hubs
      </nuxt-link>
      and
      <nuxt-link :to="localePath('/tags')">
        tags
      </nuxt-link>.
    </p>
    <p class="about-content__text fonts__text1 mt-3">
      Our goal is to remove barriers to the dissemination of knowledge. We aim
      to provide scientists and researchers in mathematics and blockchain
      technologies with free access to publications and fundraising for their
      projects.
    </p>
  </div>
</template>

<script>
export default {
  name: "AboutContent",
}
</script>

<style lang="scss" scoped>
@import "../../assets/styles/base/grid";

.about-content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-left: nonScalePx(100);
  padding-right: nonScalePx(100);

  &__text {
    line-height: nonScalePx(22 * 1.3);
  }

  @media (max-width: $desktop-break-point) {
    padding-left: pxToVwDesktop(100);
    padding-right: pxToVwDesktop(100);

    &__text {
      line-height: pxToVwDesktop(22 * 1.3);
    }
  }
}
</style>
