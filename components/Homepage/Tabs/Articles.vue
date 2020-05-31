<template>
  <div class="tab-articles">
    <div class="tab-articles__filters">
      <ui-button-group>
        <ui-button
          v-for="sort in sorts"
          :key="sort.type"
          :variant="['outline', 'secondary']"
          :active="sort.type === activeSort.type"
          @click.native="setSort(sort)"
        >
          <span class="fonts__text2">{{ sort.title }}</span>
        </ui-button>
      </ui-button-group>
      <ui-button-group>
        <ui-button
          v-for="filter in filters"
          :key="filter.type"
          :variant="['outline', 'secondary']"
          :active="isFilterActive(filter)"
          @click.native="setFilter(filter)"
        >
          <span class="fonts__text2">{{ filter.title }}</span>
        </ui-button>
      </ui-button-group>
    </div>
    <transition-group
      name="fade-out-in"
      tag="div"
      class="tab-articles__articles"
    >
      <homepage-tab-article
        v-for="article in articles"
        :key="article.id"
        :data="article"
        class="tab-articles__articles_article"
      />
    </transition-group>
    <ui-button
      v-if="isArticles"
      :to="localePath('/articles')"
      :variant="['outline', 'secondary']"
      class="tab-articles__explore"
    >
      {{ $t('homepage.content.articles.explore', {count: articlesTotal}) }}
    </ui-button>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import DatesMixin from "~/mixins/dates"

  import UiButtonGroup from "~/components/UI/Buttons/ButtonGroup";
  import UiButton from "~/components/UI/Buttons/Button";
  import HomepageTabArticle from "~/components/Homepage/Tabs/Articles/Article";

  export default {
    name: 'HomepageTabArticles',
    mixins: [DatesMixin],
    components: {
      UiButton,
      UiButtonGroup,
      HomepageTabArticle
    },
    data() {
      return {
        sorts: [
          {
            type: 'all',
            data: [],
            title: this.$t('homepage.content.articles.sorts.all')
          },
          {
            type: 'top',
            data: [{
              field: 'votes',
              direction: 'desc'
            }],
            title: this.$t('homepage.content.articles.sorts.top')
          },
          {
            type: 'hot',
            data: [{
              field: 'answers',
              direction: 'desc'
            }],
            title: this.$t('homepage.content.articles.sorts.hot')
          }
        ],
        activeSortProxy: {
          type: 'all'
        },
        filters: [
          {
            type: 'day',
            data: [{
              field: 'createdAt',
              value: {
                equals: this.getNowDate()
              }
            }],
            title: this.$t('homepage.content.articles.filters.day')
          },
          {
            type: 'week',
            data: [{
              field: 'createdAt',
              value: {
                start: this.getWeekAgoDate(),
                from: this.getNowDate()
              }
            }],
            title: this.$t('homepage.content.articles.filters.week')
          },
          {
            type: 'month',
            data: [{
              field: 'createdAt',
              value: {
                start: this.getMonthAgoDate(),
                from: this.getNowDate()
              }
            }],
            title: this.$t('homepage.content.articles.filters.month')
          }
        ],
        activeFilterProxy: null
      }
    },
    computed: {
      ...mapState({
        articles: state => state.articles.articles,
        articlesTotal: state => state.articles.context.total
      }),
      isArticles() {
        return this.articlesTotal > 0
      },
      activeSort: {
        get() {
          return this.activeSortProxy
        },
        async set (value) {
          this.activeSortProxy = value
          await this.fetchArticles()
        }
      },
      activeFilter: {
        get() {
          return this.activeFilterProxy
        },
        async set (value) {
          this.activeFilterProxy = value
          await this.fetchArticles()
        }
      }
    },
    methods: {
      ...mapActions({
        setArticles: 'articles/setArticles'
      }),
      async fetchArticles() {
        try {
          await this.setArticles({
            ...(this.activeFilter && {filters: this.activeFilter.data}),
            sorts: this.activeSort.data
          })
        } catch (e) {
          console.error(e.message)
        }
      },
      setSort(sort) {
        this.activeSort = sort
      },
      isFilterActive(filter) {
        return this.activeFilter && this.activeFilter.type === filter.type
      },
      setFilter(filter) {
        if (this.isFilterActive(filter)) {
          this.activeFilter = null
        }
        else {
          this.activeFilter = filter
        }
      },

    }
  }
</script>

<style lang="scss" scoped>
  @import "../../../assets/styles/base/grid";
  @import "../../../assets/styles/base/colors";

  .tab-articles {
    margin-top: nonScalePx(24);
    display: flex;
    flex-direction: column;

    &__filters {
      display: flex;
      justify-content: space-between;
    }

    &__articles {
      float: none;
      display: flex;
      flex-direction: column;
      margin-top: nonScalePx(12);
      border-top-style: solid;
      border-top-width: nonScalePx(1);
      border-top-color: $iron;

      &_article {
        overflow: hidden;
        border-bottom-style: solid;
        border-bottom-width: nonScalePx(1);
        border-bottom-color: $iron;

        &:last-child {
          border-bottom: 0;
        }
      }
    }

    &__explore {
      width: nonScalePx(250);
      align-self: center;
    }

    @media (max-width: $desktop-break-point) {
      margin-top: pxToVwDesktop(24);

      &__articles {
        margin-top: pxToVwDesktop(24);
        border-top-width: pxToVwDesktop(1);
        margin-left: pxToVwDesktop(-24) !important;
        margin-right: pxToVwDesktop(-24) !important;

        &_article {
          border-bottom-width: pxToVwDesktop(1);
        }
      }

      &__explore {
        width: pxToVwDesktop(250);
      }
    }
  }
</style>
