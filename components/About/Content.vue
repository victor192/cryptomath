<template>
  <div class="content about-content">
    <div class="about-content__octahedron">
      <img src="~/assets/images/octahedron.svg" alt="octahedron icon">
    </div>
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
    <p class="about-content__text fonts__text1 mt-3">
      My name is <a href="https://t.me/victor92sh">Viktor</a>. I am founder of
      the project and the only developer for this project. In the near future,
      we plan to release the MVP version of the product with the prospect of
      further development. My work on the project is based on pure enthusiasm,
      but if you find the idea interesting, i will be grateful for your help.
      You can donate any amount to the following addresses:
    </p>
    <div class="about-content__donates fonts__text1 mt-3">
      <span>BTC</span>
      <span>3PzngoyNNwvmwSZiDepdk7NvwXKfeLWWjW</span>
      <span>ETH</span>
      <span>0xd6C01d0Ff1f0F207aD883ECB6647B62C3C8c2E48</span>
      <span>BCH</span>
      <span>bitcoincash:qqs5y32mm2a9nvmxqvlss68xu5vkqxj0y5kuv8x0w6</span>
      <span>LTC</span>
      <span>MACGBHo8xTPvY1RfYV68X7DeQ52gADEi6C</span>
      <span>ADA</span>
      <span>Ae2tdPwUPEZMrpkWM2HukR8xKBvwTZMZPvRaFVDzpjwjLooV4KirMgpbxHD</span>
    </div>
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
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-left: nonScalePx(100);
  padding-right: nonScalePx(100);

  &__octahedron {
    position: absolute;
    right: nonScalePx(50);
    bottom: nonScalePx(50);
    filter: opacity(8%);

    img {
      width: nonScalePx(400);
      height: nonScalePx(400);
    }
  }

  &__text {
    line-height: nonScalePx(22 * 1.3);
  }

  &__donates {
    display: grid;
    grid-template-columns: 1fr 4fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    gap: nonScalePx(8);
  }

  @media (max-width: $desktop-break-point) {
    padding-left: pxToVwDesktop(100);
    padding-right: pxToVwDesktop(100);

    &__octahedron {
      right: pxToVwDesktop(50);
      bottom: pxToVwDesktop(50);

      img {
        width: pxToVwDesktop(400);
        height: pxToVwDesktop(400);
      }
    }

    &__text {
      line-height: pxToVwDesktop(22 * 1.3);
    }

    &__donates {
      gap: pxToVwDesktop(8);
    }
  }
}
</style>
