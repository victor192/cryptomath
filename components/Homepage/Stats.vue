<template>
  <ui-card-block>
    <span slot="header" class="fonts__text1 colors__font_pale-sky">{{ $t('homepage.stats.title') }}</span>
    <template slot="body">
      <div class="stats fonts__text2 colors__font_pale-sky">
        <ui-icon
          :icon="['stats', 'writing']"
          size="lg"
        />
        <nuxt-link
          :to="localePath('/articles')"
          class="stats__text"
        >{{ $t('homepage.stats.articles') }}</nuxt-link>
        <span class="stats__count">3</span>
      </div>
      <div class="stats fonts__text2 colors__font_pale-sky">
        <ui-icon
          :icon="['stats', 'keys']"
          size="lg"
        />
        <nuxt-link
          :to="localePath('/problems')"
          class="stats__text"
        >{{ $t('homepage.stats.problems') }}</nuxt-link>
        <span class="stats__count">10</span>
      </div>
      <div class="stats fonts__text2 colors__font_pale-sky">
        <ui-icon
          :icon="['stats', 'editor']"
          size="lg"
        />
        <nuxt-link
          :to="localePath('/users')"
          class="stats__text"
        >{{ $t('homepage.stats.authors') }}</nuxt-link>
        <span class="stats__count">2</span>
      </div>
      <div class="stats fonts__text2 colors__font_pale-sky">
        <ui-icon
          :icon="['stats', 'block']"
          size="lg"
        />
        <nuxt-link
          :to="localePath('/hubs')"
          class="stats__text"
        >{{ $t('homepage.stats.hubs') }}</nuxt-link>
        <span class="stats__count">2</span>
      </div>
      <div class="stats fonts__text2 colors__font_pale-sky">
        <ui-icon
          :icon="['stats', 'tag']"
          size="lg"
        />
        <nuxt-link
          :to="localePath('/tags')"
          class="stats__text"
        >{{ $t('homepage.stats.tags') }}</nuxt-link>
        <span class="stats__count">3</span>
      </div>
      <div class="stats fonts__text2 colors__font_pale-sky">
        <ui-icon
          :icon="['stats', 'infinity']"
          size="lg"
        />
        <nuxt-link
          :to="localePath('/games')"
          class="stats__text"
        >{{ $t('homepage.stats.games') }}</nuxt-link>
        <span class="stats__count">5</span>
      </div>
    </template>
  </ui-card-block>
</template>

<script>
  import UiCardBlock from "~/components/UI/Cards/CardBlock";
  import UiIcon from "~/components/UI/Icons/Icon"

  export default {
    name: 'HomepageStats',
    components: {
      UiCardBlock,
      UiIcon
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/styles/base/grid";
  @import "../../assets/styles/base/fonts";

  .stats {
    display: flex;
    align-items: flex-end;
    margin-bottom: nonScalePx(15);

    &:last-child {
      margin-bottom: 0;
    }

    &__text {
      font-family: $helvetica-bold;
      margin-left: nonScalePx(10);
    }

    &__count {
      font-family: $helvetica-bold;
      margin-left: auto;
    }

    @media (max-width: $desktop-break-point) {
      margin-bottom: pxToVwDesktop(15);

      &__text {
        margin-left: pxToVwDesktop(10)
      }
    }
  }
</style>
