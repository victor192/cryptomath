<template>
  <div class="container articles-container">
    <div class="articles">
      <div class="articles__content">
        <articles-content />
      </div>
      <div class="articles__filters">
        Filters
      </div>
    </div>
  </div>
</template>

<script>
import ArticlesContent from "~/components/Articles/Content"

export default {
  components: {
    ArticlesContent,
  },
  async fetch({ store, error }) {
    try {
      await store.dispatch("articles/setArticles", {
        limit: 10,
        offset: 0,
        extended: true,
      })
    } catch (e) {
      error({
        statusCode: 500,
        message: e.message,
      })
    }
  },
}
</script>

<style lang="scss" scoped>
@import "../../assets/styles/base/grid";

.articles-container {
  padding-top: nonScalePx(50);
  padding-bottom: nonScalePx(50);

  @media (max-width: $desktop-break-point) {
    padding-top: pxToVwDesktop(50);
    padding-bottom: pxToVwDesktop(50);
  }
}

.articles {
  height: 100%;
  display: flex;

  &__content {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  &__filters {
    width: nonScalePx(300);
    margin-left: nonScalePx(24);
    display: flex;
    flex-direction: column;
  }
}
</style>
