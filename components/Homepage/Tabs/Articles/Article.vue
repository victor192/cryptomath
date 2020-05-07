<template>
  <div class="article">
    <div class="article__stats">
      <div
        class="article__stats_item colors__font_pale-sky"
        :class="{'article__stats_item-answered': isAnswered}"
      >
        <span class="fonts__text2">
          <strong>{{ data.stats.answers }}</strong>
        </span>
        <span class="fonts__text4">{{ $t('homepage.content.articles.article.stats.answers') }}</span>
      </div>
      <div class="article__stats_item colors__font_pale-sky">
        <span
          class="fonts__text2"
          :class="{'colors__font_persian-red': isNegativeVotes}"
        >{{ data.stats.votes }}</span>
        <span class="fonts__text4">{{ $t('homepage.content.articles.article.stats.votes') }}</span>
      </div>
    </div>
    <div class="article__content">
      <article-title :title="data.title"/>
      <div class="article__content_info">
        <div class="categorization">
          <div class="categorization__hubs fonts__text2">
            <ui-badge
              v-for="hub in data.hubs"
              :key="hub.id"
              variant="hub"
              class="categorization__hubs_hub"
              :to="hubLink(hub)"
            >{{ hub.name }}</ui-badge>
          </div>
          <div class="categorization__hubs categorization__tags fonts__text2">
            <ui-badge
              v-for="tag in data.tags"
              :key="tag.id"
              variant="tag"
              class="categorization__hubs_hub"
              :to="tagLink(tag)"
            >{{ tag.name }}</ui-badge>
          </div>
        </div>
        <div class="author">
          <div class="author__action-time fonts__text2 colors__font_gray-oslo">
            <article-time :date-string="data.createdAt"/>
          </div>
          <div class="author__user">
            <nuxt-link :to="userLink">
              <ui-user-avatar
                :hash="data.author.hash"
              />
            </nuxt-link>
            <div class="author__user_details">
              <nuxt-link
                :to="userLink"
                class="fonts__text2"
              >{{ data.author.displayName}}</nuxt-link>
              <div class="flairs">
                <div class="flairs__reputation fonts__text2 colors__font_gray-oslo">1</div>
                <ui-icon
                  :icon="['user', 'medal-gray']"
                  size="sm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        v-if="fundsText"
        class="article__content_funds fonts__text3 colors__font_pale-sky"
      >{{ fundsText }}</div>
    </div>
  </div>
</template>

<script>
  import {checkNested} from "~/tools/object"
  import ArticleTitle from "~/components/Homepage/Tabs/Articles/Article/Title";
  import ArticleTime from "~/components/Homepage/Tabs/Articles/Article/Time"
  import UiBadge from "~/components/UI/Badges/Badge";
  import UiUserAvatar from '~/components/UI/User/Avatar'
  import UiIcon from "~/components/Ui/Icons/Icon"

  export default {
    name: 'HomepageTabArticle',
    components: {
      ArticleTitle,
      ArticleTime,
      UiBadge,
      UiUserAvatar,
      UiIcon
    },
    props: {
      data: {
        type: Object,
        default: () => ({
          id: 0,
          title: '',
          stats: {
            answers: 0,
            votes: 0
          },
          hubs: [],
          tags: [],
          createdAt: '2020-04-25T11:30:30',
          author: {
            hash: '23c6b4ac5756c0adfc5ecdc4a15b9d83',
            displayName: ''
          }
        }),
        validator: value => checkNested(value, [
          'id',
          'title',
          'createdAt',
          [
            'stats',
            [
              'answers',
              'votes'
            ]
          ],
          [
            'author',
            [
              'hash',
              'displayName'
            ]
          ],
          'hubs',
          'tags'
        ])
      }
    },
    computed: {
      isAnswered() {
        return this.data.stats.answers > 0
      },
      isNegativeVotes() {
        return this.data.stats.votes < 0
      },
      userLink() {
        return this.localePath({name: 'users-id', params: {id: this.data.author.id}})
      },
      fundsText() {
        switch(this.data.id) {
          case 1:
            return '0.0000245 BTC is funded'
          case 2:
            return '4.82768 USDT is funded'
          case 3:
            return '2 GRAM is funded'
        }

        return false
      }
    },
    methods: {
      hubLink(hub) {
        return this.localePath({name: 'hubs-id', params: {id: hub.id}})
      },
      tagLink(tag) {
        return this.localePath({name: 'tags-id', params: {id: tag.id}})
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../../../assets/styles/base/grid";
  @import "../../../../assets/styles/base/colors";
  @import "../../../../assets/styles/base/fonts";

  .article {
    display: flex;
    padding: nonScalePx(12) nonScalePx(24);

    &__stats {
      width: nonScalePx(68);
      margin-right: nonScalePx(16);
      display: flex;
      flex-direction: column;

      &_item-answered {
        border-style: solid;
        border-width: nonScalePx(1);
        border-radius: nonScalePx(3);
        border-color: $fern;
        color: $green-chateau;
      }

      &_item {
        width: 100%;
        height: nonScalePx(52);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding: nonScalePx(7);
        margin-bottom: nonScalePx(10);
      }
    }

    &__content {
      flex: 1 auto;
      width: auto;
      display: flex;
      flex-direction: column;

      &_info {
        margin-top: nonScalePx(15);
        display: flex;

        .categorization {
          flex-grow: 1;
          display: flex;
          flex-direction: column;

          &__hubs {
            display: flex;
            flex-wrap: wrap;

            &_hub {
              margin-right: nonScalePx(6);
              margin-bottom: nonScalePx(6);

              &:last-child {
                margin-right: 0;
              }
            }
          }

          &__tags {
            margin-top: nonScalePx(6) !important;
          }
        }

        .author {
          width: nonScalePx(230);
          display: flex;
          flex-direction: column;

          &__action-time {
            margin-bottom: nonScalePx(5);
          }

          &__user {
            display: flex;

            &_details {
              margin-top: nonScalePx(4);
              margin-left: nonScalePx(6);
              display: flex;
              flex-direction: column;
              justify-content: space-between;

              .flairs {
                display: flex;

                &__reputation {
                  font-family: $helvetica-bold;
                  margin-right: nonScalePx(5);
                }
              }
            }
          }
        }
      }

      &_funds {
        margin-top: nonScalePx(5);
      }
    }

    @media (max-width: $desktop-break-point) {
      padding: pxToVwDesktop(12) pxToVwDesktop(24);

      &__stats {
        width: pxToVwDesktop(68);
        margin-right: pxToVwDesktop(16);

        &_item-answered {
          border-width: pxToVwDesktop(1);
          border-radius: pxToVwDesktop(3);
        }

        &_item {
          height: pxToVwDesktop(52);
          padding: pxToVwDesktop(7);
          margin-bottom: pxToVwDesktop(10);
        }
      }

      &__content {
        &_info {
          margin-top: pxToVwDesktop(15);

          .categorization {
            &__hubs {
              &_hub {
                margin-right: pxToVwDesktop(6);
                margin-bottom: pxToVwDesktop(6);
              }
            }

            &__tags {
              margin-top: pxToVwDesktop(6) !important;
            }
          }

          .author {
            width: pxToVwDesktop(230);

            &__action-time {
              margin-bottom: pxToVwDesktop(5);
            }

            &__user {
              &_details {
                margin-top: pxToVwDesktop(4);
                margin-left: pxToVwDesktop(6);

                .flairs {
                  &__reputation {
                    margin-right: pxToVwDesktop(5);
                  }
                }
              }
            }
          }
        }

        &_funds {
          margin-top: pxToVwDesktop(5);
        }
      }
    }
  }
</style>
