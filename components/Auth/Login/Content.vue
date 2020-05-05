<template>
  <div class="login-content">
    <ui-card class="login-content__form">
      <h5 class="login-content__form_title fonts__h5">{{ $t('auth.login.form.title') }}</h5>
      <div class="login-content__form_dodecahedron">
        <img src="~/assets/images/dodecahedron.png" alt="dodecahedron icon"/>
      </div>
      <div class="login-content__form_fields">
        <transition name="fade">
          <ui-alert
            v-if="globalError.show"
            variant="danger"
            class="alert fonts__text2"
          >{{ globalErrorText }}</ui-alert>
        </transition>
        <!-- Email -->
        <ui-form-group
          label-for="email"
          class="field"
        >
          <template slot="label">
            <span class="fonts__text-label">{{ $t('auth.login.form.email.label') }}</span>
          </template>
          <template slot="input">
            <transition name="fade">
              <ui-form-alert v-if="errors.email">
                <span class="fonts__text2">{{ $t('auth.login.form.email.error') }}</span>
              </ui-form-alert>
            </transition>
            <ui-form-input
              v-model="email"
              id="input"
              type="email"
              :placeholder="$t('auth.login.form.email.placeholder')"
              :is-invalid="errors.email"
              @input="hideErrors('email')"
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
              <span class="fonts__text-label">{{ $t('auth.login.form.password.label') }}</span>
              <nuxt-link to="auth/reminder">{{ $t('auth.login.form.password.reminder') }}</nuxt-link>
            </div>
          </template>
          <template slot="input">
            <transition name="fade">
              <ui-form-alert v-if="errors.password">
                <span class="fonts__text2">{{ $t('auth.login.form.password.error') }}</span>
              </ui-form-alert>
            </transition>
            <ui-form-input
              v-model="password"
              id="password"
              type="password"
              :placeholder="$t('auth.login.form.password.placeholder')"
              :is-invalid="errors.password"
              @input="hideErrors('password')"
            />
          </template>
        </ui-form-group>
        <div class="login-content__form_buttons">
          <ui-button
            :variant="['primary']"
            @click.native="submitLogin"
          >{{ $t('auth.login.form.login') }}</ui-button>
        </div>
      </div>
    </ui-card>
    <ui-card
      class="login-content__register"
      center
    >
      <i18n
        path="auth.login.register.text"
        tag="span"
        class="fonts__text2"
      >
        <nuxt-link slot="link" to="/auth/register">{{ $t('auth.login.register.link') }}</nuxt-link>
      </i18n>
    </ui-card>
  </div>
</template>

<script>
  import {Auth} from '~/api/index'
  import { mapActions } from 'vuex'

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
          password: false
        },
        globalError: {
          show: false,
          source: null,
          type: null
        }
      }
    },
    computed: {
      globalErrorText() {
        if (this.globalError.source === 'user') {
          switch (this.globalError.type) {
            case 'not_found':
              return this.$t('auth.login.form.alerts.user_not_found')
            case 'wrong_password':
              return this.$t('auth.login.form.alerts.user_wrong_password')
          }
        }

        return this.$t('auth.login.form.alerts.internal')
      },
    },
    methods: {
      ...mapActions({
        setToken: 'auth/setToken'
      }),
      validate() {
        if (this.email === '') {
          return [false, 'empty_email']
        }

        if (this.password === '') {
          return [false, 'empty_password']
        }

        return [true, false]
      },
      async submitLogin() {
        this.globalError.show = false

        const [status, error] = this.validate()

        if (status) {
          const payload = {
            email: this.email,
            password: this.password
          }

          try {
            const data = await Auth.login(this.$axios, payload)

            if (data.context.status === 'error') {
              const error = data.context.error

              this.globalError.source = error.source
              this.globalError.type = error.type
              this.globalError.show = true
            }
            else if (data.context.status === 'success') {
              this.setToken(data.data)
              this.$axios.setToken(data.data.accessToken, 'Bearer')
              this.$router.push(this.localePath({name: 'profile'}))
            }
          } catch (error) {
            console.error(error)
          }
        }
        else {
          switch (error) {
            case 'empty_email':
              this.errors.email = true
              break;
            case 'empty_password':
              this.errors.password = true
              break;
          }
        }
      },
      hideErrors(name) {
        if (this.errors[name]) {
          this.errors[name] = false
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
