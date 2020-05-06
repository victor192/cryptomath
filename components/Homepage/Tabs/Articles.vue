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
  </div>
</template>

<script>
  import UiButtonGroup from "~/components/UI/Buttons/ButtonGroup";
  import UiButton from "~/components/UI/Buttons/Button";

  export default {
    name: 'HomepageTabArticles',
    components: {
      UiButton,
      UiButtonGroup
    },
    data() {
      return {
        sorts: [
          {
            type: 'all',
            title: this.$t('homepage.content.articles.sorts.all')
          },
          {
            type: 'top',
            title: this.$t('homepage.content.articles.sorts.top')
          },
          {
            type: 'hot',
            title: this.$t('homepage.content.articles.sorts.hot')
          }
        ],
        activeSortProxy: {
          type: 'all'
        },
        filters: [
          {
            type: 'day',
            title: this.$t('homepage.content.articles.filters.day')
          },
          {
            type: 'week',
            title: this.$t('homepage.content.articles.filters.week')
          },
          {
            type: 'month',
            title: this.$t('homepage.content.articles.filters.month')
          }
        ],
        activeFilterProxy: null
      }
    },
    computed: {
      activeSort: {
        get() {
          return this.activeSortProxy
        },
        set (value) {
          this.activeSortProxy = value
        }
      },
      activeFilter: {
        get() {
          return this.activeFilterProxy
        },
        set (value) {
          this.activeFilterProxy = value
        }
      }
    },
    methods: {
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
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../../assets/styles/base/grid";

  .tab-articles {
    margin-top: nonScalePx(24);
    display: flex;
    flex-direction: column;

    &__filters {
      display: flex;
      justify-content: space-between;
    }

    @media (max-width: $desktop-break-point) {
      margin-top: pxToVwDesktop(24);
    }
  }
</style>
