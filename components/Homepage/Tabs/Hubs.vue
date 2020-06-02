<template>
  <div class="tab-hubs">
    <ui-search-input
      v-model="search.query"
      @onSearchClosed="closeSearch"
      @onSearchSubmit="startSearch"
      :placeholder="$t('homepage.content.hubs.search.placeholder')"
      class="tab-hubs__search"
      :loading="search.loading"
      :is-compliance="search.isCompliance"
    />
    <div class="tab-hubs__hubs">
      <div class="tab-hubs__hubs_head fonts__text3 colors__font_gray">
        <span>{{ $t('homepage.content.hubs.table.name') }}</span>
        <span class="cell-right">{{ $t('homepage.content.hubs.table.tags') }}</span>
        <span class="cell-right">{{ $t('homepage.content.hubs.table.articles') }}</span>
      </div>
      <div
        v-for="hub in hubs"
        :key="hub.id"
        class="tab-hubs__hubs_row"
      >
        <img
          :src="hub.logo"
          :alt="hub.name"
          class="logo"
        />
        <div class="title">
          <nuxt-link
            :to="hubLink(hub)"
            class="title__link fonts__text1 fonts__text1_bold"
          >{{ getHubTitle(hub) }}</nuxt-link>
          <span class="title__description fonts__text2 colors__font_pale-sky">{{ getHubDescription(hub) }}</span>
          <div class="title__tags fonts__text2">
            <ui-badge
              v-for="tag in getTags(hub.tags.data)"
              :key="tag.id"
              :to="tagLink(tag)"
              variant="tag"
              class="title__tags_tag"
            >{{ tag.name }}</ui-badge>
          </div>
        </div>
        <span class="cell-right fonts__text1 fonts__text1_bold colors__font_downriver">{{ hub.tags.total }}</span>
        <span class="cell-right fonts__text1 fonts__text1_bold colors__font_downriver">{{ hub.articles }}</span>
      </div>
    </div>
    <ui-button
      v-if="isHubs"
      :to="localePath('/hubs')"
      :variant="['outline', 'secondary']"
      class="tab-hubs__explore"
    >
      {{ $t('homepage.content.hubs.explore', {count: hubsTotal}) }}
    </ui-button>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import {checkNested} from "~/tools/object"

  import HubsMixin from "~/mixins/hubs"
  import TagsMixin from "~/mixins/tags"
  import UiFlatIcon from "~/components/UI/Icons/FlatIcon"
  import UiBadge from "~/components/UI/Badges/Badge"
  import UiSearchInput from "~/components/UI/Forms/SearchInput";
  import UiButton from "~/components/UI/Buttons/Button";

  export default {
    name: 'HomepageTabHubs',
    mixins: [HubsMixin, TagsMixin],
    components: {
      UiButton,
      UiSearchInput,
      UiFlatIcon,
      UiBadge
    },
    data() {
      return {
        search: {
          query: '',
          loading: false,
          isCompliance: false
        }
      }
    },
    computed: {
      ...mapState({
        hubs: state => state.hubs.hubs.filter(h => checkNested(h, [
          'id',
          'name',
          'description',
          'logo',
          [
            'tags',
            [
              'data',
              'total'
            ]
          ]
        ])),
        hubsTotal: state => state.hubs.context.total
      }),
      isHubs() {
        return this.hubsTotal > 0
      }
    },
    methods: {
      ...mapActions({
        setHubs: 'hubs/setHubs'
      }),
      getTags(tags) {
        return tags.filter(t => checkNested, ['id', 'name'])
      },
      setSearchLoading(isCompliance) {
        this.search.isCompliance = isCompliance

        setTimeout(() => {
          this.search.loading = false
        }, 100)
      },
      async closeSearch() {
        this.search.query = ''
        this.search.loading = true

        try {
          await this.setHubs({})

          this.setSearchLoading(false)
        } catch (e) {
          console.error(e.message)
        }
      },
      async startSearch() {
        this.search.loading = true

        try {
          await this.setHubs({search: this.search.query})

          this.setSearchLoading(true)
        } catch(e) {
          console.error(e.message)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../../assets/styles/base/grid";
  @import "../../../assets/styles/base/colors";

  .tab-hubs {
    margin-top: nonScalePx(24);
    display: flex;
    flex-direction: column;

    &__search {
      margin-bottom: nonScalePx(24);
    }

    &__hubs {
      display: flex;
      flex-direction: column;

      .cell-right {
        text-align: right;
      }

      &_head {
        display: grid;
        grid-template-columns: 4fr repeat(2, 1fr);
        grid-template-rows: 1fr;
        border-bottom-style: solid;
        border-bottom-width: nonScalePx(1);
        border-bottom-color: $geyser;
        padding-bottom: pxToVwDesktop(10);
        margin-bottom: nonScalePx(15);
      }

      &_row {
        display: grid;
        grid-template-columns: 0.6fr 3.4fr repeat(2, 1fr);
        grid-template-rows: 1fr;
        margin-bottom: nonScalePx(20);

        .logo {
          width: nonScalePx(64);
          height: nonScalePx(64);
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

          &__tags {
            display: flex;
            flex-wrap: wrap;

            &_tag {
              margin-right: nonScalePx(6);
              margin-bottom: nonScalePx(6);

              &:last-child {
                margin-right: 0;
              }
            }
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

      &__hubs {
        &_head {
          border-bottom-width: pxToVwDesktop(1);
          padding-bottom: pxToVwDesktop(10);
          margin-bottom: pxToVwDesktop(15);
        }

        &_row {
          margin-bottom: pxToVwDesktop(20);

          .logo {
            width: pxToVwDesktop(64);
            height: pxToVwDesktop(64);
          }

          .title {
            &__link {
              padding-top: pxToVwDesktop(2);
              margin-bottom: pxToVwDesktop(8);
            }

            &__description {
              margin-bottom: pxToVwDesktop(8);
            }

            &__tags {
              &_tag {
                margin-right: pxToVwDesktop(6);
                margin-bottom: pxToVwDesktop(6);
              }
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
