<template>
  <div class="tab-organizations">
    <ui-search-input
      v-model="search.query"
      :placeholder="$t('homepage.content.organizations.search.placeholder')"
      class="tab-organizations__search"
      :loading="search.loading"
      :is-compliance="search.isCompliance"
      @onSearchClosed="closeSearch"
      @onSearchSubmit="startSearch"
    />
    <div class="tab-organizations__organizations">
      <div
        class="tab-organizations__organizations_head fonts__text3 colors__font_gray"
      >
        <span>{{ $t("homepage.content.hubs.table.name") }}</span>
        <span class="cell-right">{{
          $t("homepage.content.organizations.table.users")
        }}</span>
        <span class="cell-right">{{
          $t("homepage.content.hubs.table.articles")
        }}</span>
      </div>
      <div
        v-for="organization in organizations"
        :key="organization.id"
        class="tab-organizations__organizations_row"
      >
        <a :href="organization.url" target="_blank">
          <img :src="organization.logo" :alt="organization.url" class="logo" />
        </a>
        <div class="title">
          <nuxt-link
            :to="organizationLink(organization)"
            class="title__link fonts__text1 fonts__text1_bold"
          >
            {{ organization.title }}
          </nuxt-link>
          <span class="title__description fonts__text2 colors__font_pale-sky">{{
            organization.description
          }}</span>
        </div>
        <span
          class="cell-right fonts__text1 fonts__text1_bold colors__font_downriver"
        >{{ organization.users }}</span>
        <span
          class="cell-right fonts__text1 fonts__text1_bold colors__font_downriver"
        >{{ organization.articles }}</span>
      </div>
    </div>
    <ui-button
      v-if="isOrganizations"
      :to="localePath('/organizations')"
      :variant="['outline', 'secondary']"
      class="tab-organizations__explore"
    >
      {{
        $t("homepage.content.organizations.explore", {
          count: organizationsTotal,
        })
      }}
    </ui-button>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex"
import { checkNested } from "~/tools/object"

import OrganizationsMixin from "~/mixins/organizations"
import UiSearchInput from "~/components/UI/Forms/SearchInput"
import UiButton from "~/components/UI/Buttons/Button"

export default {
  name: "HomepageTabOrganizations",
  components: {
    UiSearchInput,
    UiButton,
  },
  mixins: [OrganizationsMixin],
  data() {
    return {
      search: {
        query: "",
        loading: false,
        isCompliance: false,
      },
    }
  },
  computed: {
    ...mapState({
      organizations: (state) =>
        state.organizations.organizations.filter((h) =>
          checkNested(h, [
            "id",
            "title",
            "description",
            "url",
            "logo",
            "users",
            "articles",
          ])
        ),
      organizationsTotal: (state) => state.organizations.context.total,
    }),
    isOrganizations() {
      return this.organizationsTotal > 0
    },
  },
  methods: {
    ...mapActions({
      setOrganizations: "organizations/setOrganizations",
    }),
    setSearchLoading(isCompliance) {
      this.search.isCompliance = isCompliance

      setTimeout(() => {
        this.search.loading = false
      }, 100)
    },
    async closeSearch() {
      this.search.query = ""
      this.search.loading = true

      try {
        await this.setOrganizations({})

        this.setSearchLoading(false)
      } catch (e) {
        console.error(e.message)
      }
    },
    async startSearch() {
      this.search.loading = true

      try {
        await this.setOrganizations({ search: this.search.query })

        this.setSearchLoading(true)
      } catch (e) {
        console.error(e.message)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/base/grid";
@import "../../../assets/styles/base/colors";

.tab-organizations {
  margin-top: nonScalePx(24);
  display: flex;
  flex-direction: column;

  &__search {
    margin-bottom: nonScalePx(24);
  }

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
      grid-template-columns: 0.8fr 3.2fr 1fr 1fr;
      grid-template-rows: 1fr;
      margin-bottom: nonScalePx(20);

      .logo {
        width: nonScalePx(88);
        height: nonScalePx(88);
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

  &__explore {
    width: nonScalePx(250);
    align-self: center;
  }

  @media (max-width: $desktop-break-point) {
    margin-top: pxToVwDesktop(24);

    &__search {
      margin-bottom: pxToVwDesktop(24);
    }

    &__organizations {
      &_head {
        border-bottom-width: pxToVwDesktop(1);
        padding-bottom: pxToVwDesktop(10);
        margin-bottom: pxToVwDesktop(15);
      }

      &_row {
        margin-bottom: pxToVwDesktop(20);

        .logo {
          width: pxToVwDesktop(88);
          height: pxToVwDesktop(88);
        }

        .title {
          &__link {
            padding-top: pxToVwDesktop(2);
            margin-bottom: pxToVwDesktop(8);
          }

          &__description {
            margin-bottom: pxToVwDesktop(8);
          }
        }
      }
    }

    &__explore {
      width: pxToVwDesktop(250);
    }
  }
}
</style>
