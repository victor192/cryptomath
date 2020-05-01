<template>
  <div class="login-content">
    <ui-card class="login-content__form">
      <h5 class="login-content__form_title fonts__h5">Log in</h5>
      <div class="login-content__form_dodecahedron">
        <img src="~/assets/images/dodecahedron.png" alt="dodecahedron icon"/>
      </div>
      <div class="login-content__form_fields">
        <ui-alert
          v-if="errors.global.show"
          variant="danger"
          class="alert fonts__text2"
        >{{ errors.global.message() }}</ui-alert>
        <!-- Email -->
        <ui-form-group
          label-for="email"
          class="field"
        >
          <template slot="label">Email</template>
          <template slot="input">
            <ui-form-alert v-if="errors.email">
              <span class="fonts__text2">Enter email</span>
            </ui-form-alert>
            <ui-form-input
              v-model="email"
              id="input"
              type="email"
              placeholder="Enter your email"
              :is-invalid="errors.email"
            />
          </template>
        </ui-form-group>
        <!--  Password  -->
        <ui-form-group
          label-for="password"
          class="field"
        >
          <template slot="label">
            <div class="password-label">
              <span>Password</span>
              <nuxt-link to="auth/reminder">Forgot password?</nuxt-link>
            </div>
          </template>
          <template slot="input">
            <ui-form-alert v-if="errors.password">
              <span class="fonts__text2">Enter password</span>
            </ui-form-alert>
            <ui-form-input
              v-model="password"
              id="password"
              type="password"
              placeholder="Enter your password"
            />
          </template>
        </ui-form-group>
        <div class="form__buttons">
          <ui-button
            :variant="['primary']"
          >Log in</ui-button>
        </div>
      </div>
    </ui-card>
    <ui-card
      class="login-content__register"
      center
    >
      <span class="fonts__text2">Have no account yet? <nuxt-link to="/auth/register">Sign up</nuxt-link></span>
    </ui-card>
  </div>
</template>

<script>
import UiCard from "~/components/UI/Cards/Card"
import UiButton from "~/components/UI/Buttons/Button";
import UiFormGroup from "~/components/UI/Forms/FormGroup";
import UiFormInput from "~/components/UI/Forms/FormInput";
import UiAlert from "~/components/UI/Alerts/Alert";
import UiFormAlert from "~/components/UI/Forms/FormAlert";

export default {
  name: 'LoginContent',
  components: {
    UiFormAlert,
    UiCard,
    UiAlert,
    UiFormInput,
    UiFormGroup,
    UiButton
  },
  data() {
    return {
      email: '',
      password: '',
      errors: {
        email: false,
        password: false,
        global: {
          show: false,
          message: () => ''
        }
      }
    }
  }
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

      &_fields {
        display: flex;
        flex-direction: column;
        z-index: 2;

        .alert {
          margin-bottom: nonScalePx(16);
        }

        .field {
          margin-bottom: nonScalePx(16);

          &:last-child {
            margin-bottom: 0;
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

      &_buttons {
        margin-top: nonScalePx(32);
        width: 100%;
      }
    }

    &__register {
      margin-top: nonScalePx(16);
    }

    @media (max-width: $desktop-break-point) {
      width: pxToVwDesktop(460);

      &__form {
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

        &_fields {
          .alert {
            margin-bottom: pxToVwDesktop(16);
          }

          .field {
            margin-bottom: pxToVwDesktop(16);
          }

          .password-label {
            a {
              font-size: pxToVwDesktop(16);
            }
          }
        }

        &_buttons {
          margin-top: pxToVwDesktop(32);
        }
      }

      &__register {
        margin-top: pxToVwDesktop(16);
      }
    }
  }
</style>
