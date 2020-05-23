<template>
  <div class="tab-associations">
    <div class="tab-associations__funds">
      <div class="tab-associations__funds_head fonts__text3 colors__font_gray">
        <span>{{ $t('homepage.content.hubs.table.name') }}</span>
        <span class="cell-right">{{ $t('homepage.content.hubs.table.articles') }}</span>
      </div>
      <div
        v-for="fund in funds"
        :key="fund.id"
        class="tab-associations__funds_row"
      >
        <img :src="fundLogoSrc(fund.id)" :alt="fund.description" class="logo"/>
        <div class="title">
          <a
            :href="fund.url"
            target="_blank"
            class="title__link fonts__text1 fonts__text1_bold"
          >{{ fund.title }}</a>
          <span class="title__description fonts__text2 colors__font_pale-sky">{{ fund.description }}</span>
        </div>
        <span class="cell-right fonts__text1 fonts__text1_bold colors__font_downriver">{{ fund.articles }}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import {checkNested} from "~/tools/object"

  import FundsMixin from "~/mixins/funds"

  export default {
    name: 'HomepageTabAssociations',
    mixins: [FundsMixin],
    computed: {
      ...mapState({
        funds: state => state.funds.funds.filter(h => checkNested(h, [
          'id',
          'title',
          'description',
          'url',
          'articles'
        ]))
      })
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../../assets/styles/base/grid";
  @import "../../../assets/styles/base/colors";

  .tab-associations {
    margin-top: nonScalePx(24);
    display: flex;
    flex-direction: column;

    &__funds {
      display: flex;
      flex-direction: column;

      .cell-right {
        text-align: right;
      }

      &_head {
        display: grid;
        grid-template-columns: 4fr 1fr;
        grid-template-rows: 1fr;
        border-bottom-style: solid;
        border-bottom-width: nonScalePx(1);
        border-bottom-color: $geyser;
        padding-bottom: pxToVwDesktop(10);
        margin-bottom: nonScalePx(15);
      }

      &_row {
        display: grid;
        grid-template-columns: 0.6fr 3.4fr 1fr;
        grid-template-rows: 1fr;
        margin-bottom: nonScalePx(20);

        .logo {
          width: nonScalePx(68);
          height: nonScalePx(68);
        }

        .title {
          display: flex;
          flex-direction: column;

          &__link {
            padding-top: nonScalePx(2);
            margin-bottom: nonScalePx(8);
            color: $tundora;

            &:hover {
              color: $danube;
            }
          }

          &__description {
            margin-bottom: nonScalePx(8);
          }
        }
      }
    }
  }
</style>
