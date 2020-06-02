<template>
  <div class="tab-organizations">
    <div class="tab-organizations__organizations">
      <div class="tab-organizations__organizations_head fonts__text3 colors__font_gray">
        <span>{{ $t('homepage.content.hubs.table.name') }}</span>
        <span class="cell-right">{{ $t('homepage.content.organizations.table.users') }}</span>
        <span class="cell-right">{{ $t('homepage.content.hubs.table.articles') }}</span>
      </div>
      <div
        v-for="organization in organizations"
        :key="organization.id"
        class="tab-organizations__organizations_row"
      >
        <img
          :src="organization.logo"
          :alt="organization.description"
          class="logo"
        />
        <div class="title">
          <a
            :href="organization.url"
            target="_blank"
            class="title__link fonts__text1 fonts__text1_bold"
          >{{ organization.title }}</a>
          <span class="title__description fonts__text2 colors__font_pale-sky">{{ organization.description }}</span>
        </div>
        <span class="cell-right fonts__text1 fonts__text1_bold colors__font_downriver">{{ organization.users }}</span>
        <span class="cell-right fonts__text1 fonts__text1_bold colors__font_downriver">{{ organization.articles }}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import {checkNested} from "~/tools/object"

  import OrganizationsMixin from "~/mixins/organizations"

  export default {
    name: 'HomepageTabOrganizations',
    mixins: [OrganizationsMixin],
    computed: {
      ...mapState({
        organizations: state => state.organizations.organizations.filter(h => checkNested(h, [
          'id',
          'title',
          'description',
          'url',
          'logo',
          'users',
          'articles'
        ]))
      })
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../../assets/styles/base/grid";
  @import "../../../assets/styles/base/colors";

  .tab-organizations {
    margin-top: nonScalePx(24);
    display: flex;
    flex-direction: column;

    &__organizations {
      display: flex;
      flex-direction: column;

      .cell-right {
        text-align: right;
      }

      &_head {
        display: grid;
        grid-template-columns: 4fr 1fr 1fr;
        grid-template-rows: 1fr;
        border-bottom-style: solid;
        border-bottom-width: nonScalePx(1);
        border-bottom-color: $geyser;
        padding-bottom: pxToVwDesktop(10);
        margin-bottom: nonScalePx(15);
      }

      &_row {
        display: grid;
        grid-template-columns: .9fr 3.1fr 1fr 1fr;
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
