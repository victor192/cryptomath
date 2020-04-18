<template>
  <div class="login-content">
    <div class="login-content__form">
      <h5 class="login-content__form_title fonts__h5">Log in</h5>
      <div class="login-content__form_dodecahedron">
        <img src="~/assets/images/dodecahedron.png" alt="dodecahedron icon"/>
      </div>
      <div class="form">
        <div class="form__row">
          <label for="email" class="form__row_label">Email</label>
          <div class="form__row_input-holder">
            <input type="email" id="email"/>
          </div>
        </div>
        <div class="form__row">
          <div class="password-label">
            <label for="password" class="form__row_label">Password</label>
            <nuxt-link to="auth/reminder">Forgot password?</nuxt-link>
          </div>
          <div class="form__row_input-holder">
            <input type="password" id="password"/>
          </div>
        </div>
        <div class="form__buttons">
          <button class="btn btn__primary">Log in</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'LoginContent'
  }
</script>

<style lang="scss" scoped>
  @import "../../../assets/styles/base/grid";
  @import "../../../assets/styles/base/fonts";
  @import "../../../assets/styles/base/colors";

  .login-content {
    width: nonScalePx(460);
    display: flex;
    flex-direction: column;

    &__form {
      width: 100%;
      background: $white;
      box-shadow: nonScalePx(0) nonScalePx(2) nonScalePx(4) nonScalePx(0) rgba($black, 0.1);
      border-radius: nonScalePx(4);
      padding: nonScalePx(24);
      display: flex;
      flex-direction: column;
      position: relative;

      &_title {
        margin-bottom: nonScalePx(50);
      }

      &_dodecahedron {
        position: absolute;
        right: nonScalePx(10);
        bottom: nonScalePx(10);
        filter: opacity(5%);

        img {
          width: nonScalePx(250);
          height: nonScalePx(250);
        }
      }

      .password-label {
        display: flex;
        justify-content: space-between;

        a {
          font-family: $helvetica-bold;
          font-size: nonScalePx(16);
        }
      }
    }

    @media (max-width: $desktop-break-point) {
      width: pxToVwDesktop(460);

      &__form {
        box-shadow: pxToVwDesktop(0) pxToVwDesktop(2) pxToVwDesktop(4) pxToVwDesktop(0) rgba($black, 0.1);
        border-radius: pxToVwDesktop(4);
        padding: pxToVwDesktop(24);

        &_title {
          margin-bottom: pxToVwDesktop(50);
        }

        &_dodecahedron {
          right: pxToVwDesktop(10);
          bottom: pxToVwDesktop(10);

          img {
            width: pxToVwDesktop(250);
            height: pxToVwDesktop(250);
          }
        }

        .password-label {
          a {
            font-size: pxToVwDesktop(16);
          }
        }
      }
    }
  }
</style>
