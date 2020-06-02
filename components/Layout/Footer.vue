<template>
  <div class="page-footer colors__background_shark">
    <div class="container">
      <div class="page-footer__content">
        <div class="page-footer__content_pyramid">
          <img src="~/assets/images/pyramid.svg" alt="pyramid icon"/>
        </div>
        <!--  General -->
        <div class="page-footer__content_item">
          <h5 class="caption fonts__h5 colors__font_silver-sand">{{ $t('layout.footer.general.title') }}</h5>
          <nuxt-link
            class="link fonts__text1 fonts__text1_bold"
            :to="localePath('/articles')"
          >{{ $t('layout.footer.general.articles') }}</nuxt-link>
          <nuxt-link
            class="link fonts__text1 fonts__text1_bold"
            :to="localePath('/problems')"
          >{{ $t('layout.footer.general.problems') }}</nuxt-link>
          <nuxt-link
            class="link fonts__text1 fonts__text1_bold"
            :to="localePath('/users')"
          >{{ $t('layout.footer.general.authors') }}</nuxt-link>
          <nuxt-link
            class="link fonts__text1 fonts__text1_bold"
            :to="localePath('/organizations')"
          >{{ $t('layout.footer.general.organizations') }}</nuxt-link>
        </div>
        <!--  Services -->
        <div class="page-footer__content_item">
          <h5 class="caption fonts__h5 colors__font_silver-sand">{{ $t('layout.footer.services.title') }}</h5>
          <nuxt-link
            class="link fonts__text1 fonts__text1_bold"
            :to="localePath('/hubs')"
          >{{ $t('layout.footer.services.hubs') }}</nuxt-link>
          <nuxt-link
            class="link fonts__text1 fonts__text1_bold"
            :to="localePath('/tags')"
          >{{ $t('layout.footer.services.tags') }}</nuxt-link>
          <div class="link fonts__text1 fonts__text1_bold">{{ $t('layout.footer.services.search') }}</div>
        </div>
        <!--  Useful links  -->
        <div class="page-footer__content_item">
          <h5 class="caption fonts__h5 colors__font_silver-sand">{{ $t('layout.footer.useful_links.title') }}</h5>
          <div class="link fonts__text1 fonts__text1_bold">{{ $t('layout.footer.useful_links.about') }}</div>
          <nuxt-link
            :to="localePath('/terms')"
            target="_blank"
            class="link fonts__text1 fonts__text1_bold"
          >{{ $t('layout.footer.useful_links.terms') }}</nuxt-link>
          <div class="link fonts__text1 fonts__text1_bold">{{ $t('layout.footer.useful_links.contact_us') }}</div>
        </div>
        <!--  Languages  -->
        <div class="page-footer__content_item">
          <h5 class="caption fonts__h5 colors__font_silver-sand">{{ $t('layout.footer.languages') }}</h5>
          <nuxt-link
            v-for="locale in $i18n.locales"
            :key="locale.code"
            :to="switchLocalePath(locale.code)"
            class="link fonts__text1 fonts__text1_bold"
          >{{ locale.name }}</nuxt-link>
        </div>
        <!--  Social  -->
        <div class="page-footer__content_item">
          <h5 class="caption fonts__h5 colors__font_silver-sand">{{ $t('layout.footer.social') }}</h5>
          <div class="social">
            <a
              href="https://twitter.com/mathandcrypto"
              target="_blank"
              class="social__link"
            >
              <ui-flat-icon
                :icon="['social', 'twitter']"
                size="2x"
                fill="#bbc0c4"
              />
            </a>
            <a
              href="https://telegram.me/mathcrypto"
              target="_blank"
              class="social__link"
            >
              <ui-flat-icon
                :icon="['social', 'telegram']"
                size="2x"
                fill="#bbc0c4"
              />
            </a>
            <a
              href="https://www.facebook.com/mathcrypto"
              target="_blank"
              class="social__link"
            >
              <ui-flat-icon
                :icon="['social', 'facebook']"
                size="2x"
                fill="#bbc0c4"
              />
            </a>
            <a
              href="https://github.com/mathandcrypto"
              target="_blank"
              class="social__link"
            >
              <ui-flat-icon
                :icon="['social', 'github']"
                size="2x"
                fill="#bbc0c4"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import UiFlatIcon from "~/components/UI/Icons/FlatIcon";
  export default {
    name: 'PageFooter',
    components: {
      UiFlatIcon
    }
  }
</script>

<style lang="scss">
  @import "../../assets/styles/base/grid";
  @import "../../assets/styles/base/colors";

  .page-footer {
    width: 100%;
    display: flex;
    padding-top: nonScalePx(30);
    padding-bottom: nonScalePx(30);

    &__content {
      min-height: nonScalePx(220);
      position: relative;
      display: flex;
      flex: 1 1 auto;

      &_pyramid {
        position: absolute;
        right: 0;
        bottom: 0;
        filter: opacity(15%);

        img {
          width: nonScalePx(150);
          height: nonScalePx(150);
        }
      }

      &_item {
        flex-grow: 1;
        display: flex;
        flex-direction: column;

        .caption {
          text-transform: uppercase;
          margin-bottom: nonScalePx(12);
        }

        .link {
          color: $gray-oslo;
          margin-bottom: nonScalePx(15);

          &:hover {
            color: $silver-sand;
          }

          &:last-child {
            margin-bottom: 0;
          }
        }

        .social {
          display: inline-flex;
          flex-wrap: wrap;
          z-index: 2;

          &__link {
            margin-right: nonScalePx(14);

            .flat-icon-wrapper {
              svg {
                &:hover {
                  fill: white;
                }
              }
            }

            &:last-child {
              margin-right: 0;
            }
          }
        }
      }
    }

    @media (max-width: $desktop-break-point) {
      padding-top: pxToVwDesktop(30);
      padding-bottom: pxToVwDesktop(30);

      &__content {
        min-height: pxToVwDesktop(220);

        &_pyramid {
          img {
            width: pxToVwDesktop(200);
            height: pxToVwDesktop(200);
          }
        }

        &_item {
          .caption {
            margin-bottom: pxToVwDesktop(12);
          }

          .link {
            margin-bottom: pxToVwDesktop(15);
          }

          .social {
            &__link {
              margin-right: pxToVwDesktop(14);
            }
          }
        }
      }
    }
  }
</style>
