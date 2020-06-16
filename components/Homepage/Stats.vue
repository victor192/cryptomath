<template>
  <ui-card-block class="stats-content">
    <span
      slot="header"
      class="fonts__text1 fonts__text1_bold colors__font_pale-sky"
    >
      {{ $t("homepage.stats.title") }}
    </span>
    <template slot="body">
      <div class="stats fonts__text2 colors__font_pale-sky">
        <ui-flat-icon :icon="['stats', 'writing']" size="lg" fill="#6a737c" />
        <nuxt-link :to="localePath('/articles')" class="stats__text">
          {{ $t("homepage.stats.articles") }}
        </nuxt-link>
        <span class="stats__count">{{ stats.articles }}</span>
      </div>
      <div class="stats fonts__text2 colors__font_pale-sky">
        <ui-flat-icon :icon="['stats', 'keys']" size="lg" fill="#6a737c" />
        <nuxt-link :to="localePath('/problems')" class="stats__text">
          {{ $t("homepage.stats.problems") }}
        </nuxt-link>
        <span class="stats__count">10</span>
      </div>
      <div class="stats fonts__text2 colors__font_pale-sky">
        <ui-flat-icon :icon="['stats', 'user']" size="lg" fill="#6a737c" />
        <nuxt-link :to="localePath('/users')" class="stats__text">
          {{ $t("homepage.stats.users") }}
        </nuxt-link>
        <span class="stats__count">{{ stats.users }}</span>
      </div>
      <div class="stats fonts__text2 colors__font_pale-sky">
        <ui-flat-icon :icon="['stats', 'team']" size="lg" fill="#6a737c" />
        <nuxt-link :to="localePath('/organizations')" class="stats__text">
          {{ $t("homepage.stats.organizations") }}
        </nuxt-link>
        <span class="stats__count">{{ stats.organizations }}</span>
      </div>
      <div class="stats fonts__text2 colors__font_pale-sky">
        <ui-flat-icon :icon="['stats', 'block']" size="lg" fill="#6a737c" />
        <nuxt-link :to="localePath('/hubs')" class="stats__text">
          {{ $t("homepage.stats.hubs") }}
        </nuxt-link>
        <span class="stats__count">{{ stats.hubs }}</span>
      </div>
      <div class="stats fonts__text2 colors__font_pale-sky">
        <ui-flat-icon :icon="['stats', 'tag']" size="lg" fill="#6a737c" />
        <nuxt-link :to="localePath('/tags')" class="stats__text">
          {{ $t("homepage.stats.tags") }}
        </nuxt-link>
        <span class="stats__count">{{ stats.tags }}</span>
      </div>
    </template>
  </ui-card-block>
</template>

<script>
import { mapState } from "vuex"

import UiCardBlock from "~/components/UI/Cards/CardBlock"
import UiFlatIcon from "~/components/UI/Icons/FlatIcon"

export default {
  name: "HomepageStats",
  components: {
    UiCardBlock,
    UiFlatIcon,
  },
  computed: {
    ...mapState({
      stats: (state) => state.stats.all,
    }),
  },
}
</script>

<style lang="scss" scoped>
@import "../../assets/styles/base/grid";
@import "../../assets/styles/base/fonts";

.stats-content {
  margin-bottom: nonScalePx(16);

  @media (max-width: $desktop-break-point) {
    margin-bottom: pxToVwDesktop(16);
  }
}

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
      margin-left: pxToVwDesktop(10);
    }
  }
}
</style>
