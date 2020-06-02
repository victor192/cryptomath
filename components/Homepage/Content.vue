<template>
  <div class="homepage-content">
    <div class="homepage-content__title">
      <h4 class="fonts__h4 colors__font_shark">{{ $t('homepage.content.title') }}</h4>
    </div>
    <div class="homepage-content__tabs fonts__text1">
      <div
        v-for="tab in tabs"
        :key="tab.name"
        class="homepage-content__tabs_tab"
        :class="{'homepage-content__tabs_tab-active': tab.name === activeTab.name}"
        @click="setTab(tab)">
        {{ tab.title }}
      </div>
    </div>
    <transition name="component-fade" mode="out-in">
      <component :is="activeTab.component"/>
    </transition>
  </div>
</template>

<script>
  import HomepageTabArticles from '~/components/Homepage/Tabs/Articles'
  import HomepageTabHubs from '~/components/Homepage/Tabs/Hubs'
  import HomepageTabOrganizations from '~/components/Homepage/Tabs/Organizations'

  export default {
    name: 'HomepageContent',
    components: {
      'homepage-tab-articles': HomepageTabArticles,
      'homepage-tab-hubs': HomepageTabHubs,
      'homepage-tab-organizations': HomepageTabOrganizations
    },
    data() {
      return {
        tabs: [
          {
            name: 'articles',
            component: 'homepage-tab-articles',
            title: this.$t('homepage.content.tabs.articles')
          },
          {
            name: 'hubs',
            component: 'homepage-tab-hubs',
            title: this.$t('homepage.content.tabs.hubs')
          },
          {
            name: 'organizations',
            component: 'homepage-tab-organizations',
            title: this.$t('homepage.content.tabs.organizations')
          }
        ],
        activeTabProxy: {
          name: 'articles',
          component: 'homepage-tab-articles'
        }
      }
    },
    computed: {
      activeTab: {
        get() {
          return this.activeTabProxy
        },
        set (value) {
          this.activeTabProxy = value
        }
      }
    },
    methods: {
      setTab(tab) {
        this.activeTab = tab
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/styles/base/grid";
  @import "../../assets/styles/base/fonts";
  @import "../../assets/styles/base/colors";

  .homepage-content {
    height: 100%;
    background: $white;
    border-style: solid;
    border-width: nonScalePx(1);
    border-color: $iron;
    padding: nonScalePx(24);
    display: flex;
    flex-direction: column;

    &__title {
      height: nonScalePx(90);
      display: flex;
      align-items: center;
    }

    &__tabs {
      display: flex;
      align-items: center;
      border-bottom-style: solid;
      border-bottom-width: nonScalePx(1);
      border-bottom-color: $geyser;
      color: $rolling-stone;

      &_tab-active {
        position: relative;
        color: $black;
        border-bottom-color: $black !important;
      }

      &_tab {
        padding-top: nonScalePx(20);
        padding-bottom: nonScalePx(20);
        margin-right: nonScalePx(20);
        border-bottom-style: solid;
        border-bottom-color: transparent;
        border-bottom-width: nonScalePx(2);
        cursor: pointer;
        font-family: $helvetica-bold;
        text-transform: uppercase;
        transition: all .3s ease-out;

        &:hover {
          @extend .homepage-content__tabs_tab-active;
        }
      }
    }

    @media (max-width: $desktop-break-point) {
      border-width: pxToVwDesktop(1);
      padding: pxToVwDesktop(24);

      &__title {
        height: pxToVwDesktop(90);
      }

      &__tabs {
        border-bottom-width: pxToVwDesktop(1);

        &_tab {
          padding-top: pxToVwDesktop(20);
          padding-bottom: pxToVwDesktop(20);
          margin-right: pxToVwDesktop(20);
          border-bottom-width: pxToVwDesktop(2);
        }
      }
    }
  }
</style>
