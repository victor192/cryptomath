<template>
  <ui-card class="tags-content">
    <div class="tags-content__header fonts__text1 fonts__text1_bold colors__font_mako">{{ $t('homepage.tags.title') }}</div>
    <div class="tags-header fonts__text3 colors__font_mako">
      <span>{{ $t('homepage.tags.header.name') }}</span>
      <span>{{ $t('homepage.tags.header.articles') }}</span>
    </div>
    <div
      v-for="tag in tags"
      :key="tag.id"
      class="tags-item fonts__text2"
    >
      <ui-badge
        variant="tag"
        :to="tagLink(tag)"
      >{{ tag.name }}</ui-badge>
      <span class="fonts__text2_bold colors__font_pale-sky">{{ tag.articles }}</span>
    </div>
  </ui-card>
</template>

<script>
  import { mapState } from 'vuex'
  import {checkNested} from "~/tools/object";

  import UiCard from "~/components/UI/Cards/Card";
  import UiBadge from "~/components/UI/Badges/Badge";

  export default {
    name: 'HomepageTags',
    components: {
      UiCard,
      UiBadge
    },
    computed: {
      ...mapState({
        tags: state => state.stats.tags.filter(tag => checkNested(tag, ['id', 'name', 'articles']))
      })
    },
    methods: {
      tagLink(tag) {
        return this.localePath({name: 'tags-id', params: {id: tag.id}})
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/styles/base/grid";

  .tags-content {
    margin-bottom: nonScalePx(16);

    &__header {
      margin-bottom: nonScalePx(10);
    }

    @media (max-width: $desktop-break-point) {
      margin-bottom: pxToVwDesktop(16);

      &__header {
        margin-bottom: pxToVwDesktop(10);
      }
    }
  }

  .tags-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: nonScalePx(8);

    @media (max-width: $desktop-break-point) {
      margin-bottom: pxToVwDesktop(8);
    }
  }

  .tags-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: nonScalePx(10);

    &:last-child {
      margin-bottom: 0;
    }

    @media (max-width: $desktop-break-point) {
      margin-bottom: pxToVwDesktop(10);
    }
  }
</style>
