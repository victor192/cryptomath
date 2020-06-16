<template>
  <div class="content articles-content">
    <div class="articles-content__title">
      <h4 class="fonts__h4 colors__font_shark">
        {{ $t("articles.content.title") }}
      </h4>
      <!-- todo: write an article button -->
    </div>
    <articles-actionbar class="articles-content__actionbar" />
  </div>
</template>

<script>
import ArticlesActionbar from "~/components/Articles/Content/Actionbar"

export default {
  name: "ArticlesContent",
  components: {
    ArticlesActionbar,
  },
}
</script>

<style lang="scss" scoped>
@import "../../assets/styles/base/grid";
@import "../../assets/styles/base/colors";

.articles-content {
  height: 100%;
  display: flex;
  flex-direction: column;

  &__title {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__actionbar {
    margin-top: nonScalePx(24);
  }

  @media (max-width: $desktop-break-point) {
    &__actionbar {
      margin-top: pxToVwDesktop(24);
    }
  }
}
</style>
