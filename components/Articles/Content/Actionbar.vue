<template>
  <div class="articles-actionbar">
    <div class="articles-actionbar__total fonts__text1">
      {{ $t("articles.content.actionbar.total", { total: articlesTotal }) }}
    </div>
    <div class="articles-actionbar__filters">
      <ui-button-group>
        <ui-button
          v-for="action in actions"
          :key="action.type"
          :variant="['outline', 'secondary']"
        >
          <span class="fonts__text2">{{ action.title }}</span>
        </ui-button>
      </ui-button-group>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"

import UiButtonGroup from "~/components/UI/Buttons/ButtonGroup"
import UiButton from "~/components/UI/Buttons/Button"

export default {
  name: "ArticlesActionbar",
  components: {
    UiButtonGroup,
    UiButton,
  },
  data() {
    return {
      actions: [
        {
          type: "new",
          sorts: [
            {
              field: "createdAt",
              direction: "desc",
            },
          ],
          title: this.$t("articles.content.actionbar.actions.new"),
        },
        {
          type: "active",
          sorts: [
            {
              field: "answers",
              direction: "desc",
            },
          ],
          title: this.$t("articles.content.actionbar.actions.active"),
        },
        {
          type: "unaswered",
          filters: [
            {
              field: "answers",
              value: {
                equals: 0,
              },
            },
          ],
          title: this.$t("articles.content.actionbar.actions.unaswered"),
        },
      ],
    }
  },
  computed: {
    ...mapState({
      articlesTotal: (state) => state.articles.context.total,
    }),
  },
}
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/base/grid";

.articles-actionbar {
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__total {
    flex: 1 auto;
    margin-right: nonScalePx(12);
  }

  &__filters {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media (max-width: $desktop-break-point) {
    &__total {
      margin-right: pxToVwDesktop(12);
    }
  }
}
</style>
