<template>
  <div class="container py-5">
    <div class="homepage">
      <div class="homepage__content">
        <homepage-content />
      </div>
      <div class="homepage__sidebar">
        <homepage-stats />
        <homepage-problems />
        <homepage-tags />
        <homepage-advertise />
      </div>
    </div>
  </div>
</template>

<script>
import HomepageContent from "~/components/Homepage/Content"
import HomepageStats from "~/components/Homepage/Stats"
import HomepageProblems from "~/components/Homepage/Problems"
import HomepageTags from "~/components/Homepage/Tags"
import HomepageAdvertise from "~/components/Homepage/Advertise"

export default {
  components: {
    HomepageStats,
    HomepageContent,
    HomepageProblems,
    HomepageTags,
    HomepageAdvertise,
  },
  async fetch({ store, error }) {
    try {
      await store.dispatch("articles/setArticles", {
        limit: 10,
        offset: 0,
      })
      await store.dispatch("hubs/setHubs", {
        limit: 10,
        offset: 0,
      })
      await store.dispatch("tags/setTags", {
        limit: 10,
        offset: 0,
      })
    } catch (err) {
      error({
        statusCode: 500,
        message: err.message,
      })
    }
  },
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/base/grid";

.homepage {
  height: 100%;
  display: flex;

  &__content {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  &__sidebar {
    width: nonScalePx(350);
    margin-left: nonScalePx(24);
    display: flex;
    flex-direction: column;
  }

  @media (max-width: $desktop-break-point) {
    &__sidebar {
      margin-left: pxToVwDesktop(24);
      width: pxToVwDesktop(350);
    }
  }
}
</style>
