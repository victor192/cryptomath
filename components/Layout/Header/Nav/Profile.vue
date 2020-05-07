<template>
  <div class="nav-profile">
    <nuxt-link
      class="nav-profile__item"
      :to="localePath('/profile')"
    >
      <ui-user-avatar :hash="data.hash"/>
      <div class="nav-profile__item_reputation fonts__text2">1</div>
      <ui-icon
        class="nav-profile__item_medal"
        :icon="['user', 'medal-white']"
        size="md"
      />
    </nuxt-link>
    <nuxt-link
      class="nav-profile__item"
      :to="localePath('/auth/logout')"
      >
      <ui-icon
        :icon="['user', 'logout']"
        size="lg"
      />
    </nuxt-link>
  </div>
</template>

<script>
  import UiUserAvatar from '~/components/UI/User/Avatar'
  import UiIcon from "~/components/Ui/Icons/Icon"

  export default {
    name: 'NavProfile',
    components: {
      UiUserAvatar,
      UiIcon
    },
    props: {
      data: {
        type: Object,
        default: () => ({
          id: 0,
          hash: ''
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../../../assets/styles/base/grid";
  @import "../../../../assets/styles/base/colors";
  @import "../../../../assets/styles/base/fonts";

  .nav-profile {
    height: 100%;
    display: flex;

    &__item {
      flex-shrink: 0;
      height: 100%;
      display: flex;
      align-items: center;
      padding-left: nonScalePx(10);
      padding-right: nonScalePx(10);

      &:hover {
        background: $mako;
      }

      &_reputation {
        margin-left: nonScalePx(15);
        font-family: $helvetica-bold;
        color: $white;
      }

      &_medal {
        margin-left: nonScalePx(8);
      }
    }

    @media (max-width: $desktop-break-point) {
      &__item {
        padding-left: pxToVwDesktop(10);
        padding-right: pxToVwDesktop(10);

        &_reputation {
          margin-top: pxToVwDesktop(5);
          margin-left: pxToVwDesktop(15);
        }

        &_medal {
          margin-left: pxToVwDesktop(8);
        }
      }
    }
  }
</style>
