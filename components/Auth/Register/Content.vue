<template>
  <div class="register-content">
    <ui-card class="register-content__form">
      <div class="register-content__form_title">
        <h5 class="fonts__h5">{{ $t('auth.register.form.title') }}</h5>
        <span class="help fonts__text3 colors__font_gray">{{ $t('auth.register.form.help') }}</span>
      </div>
      <div class="register-content__form_torus">
        <img src="~/assets/images/torus.svg" alt="torus icon"/>
      </div>
      <div class="register-content__form_fields">
        <transition name="fade">
          <ui-alert
            v-if="globalError.show"
            variant="danger"
            class="alert fonts__text2"
          >{{ globalErrorText }}</ui-alert>
        </transition>
        <!-- Display name -->
        <ui-form-group
          label-for="display-name"
          help-id="display-name-help"
          class="field"
        >
          <template slot="label">
            <span class="fonts__text-label">{{ $t('auth.register.form.display_name.label') }}</span>
          </template>
          <template slot="input">
            <transition name="fade">
              <ui-form-alert v-if="errors.displayName">
                <span class="fonts__text2">{{ $t('auth.register.form.display_name.error') }}</span>
              </ui-form-alert>
            </transition>
            <ui-form-input
              v-model="displayName"
              id="display-name"
              aria-describedby="display-name-help"
              type="text"
              :is-invalid="errors.displayName"
              @input="hideErrors('displayName')"
            />
          </template>
          <template slot="help">
            <span class="fonts__text4 colors__font_pale-sky">{{ $t('auth.register.form.display_name.help') }}</span>
          </template>
        </ui-form-group>
        <!--  Email -->
        <ui-form-group
          label-for="email"
          help-id="email-help"
          class="field"
        >
          <template slot="label">
            <span class="fonts__text-label">{{ $t('auth.register.form.email.label') }}</span>
          </template>
          <template slot="input">
            <transition name="fade">
              <ui-form-alert v-if="errors.email.error && errors.email.type">
                <span class="fonts__text2">{{ emailErrorText }}</span>
              </ui-form-alert>
            </transition>
            <ui-form-input
              v-model="email"
              id="email"
              aria-describedby="email-help"
              type="email"
              :is-invalid="errors.email.error"
              @input="hideErrors('email')"
            />
          </template>
          <template slot="help">
            <span class="fonts__text4 colors__font_pale-sky">{{ $t('auth.register.form.email.help') }}</span>
          </template>
        </ui-form-group>
        <!--  Password  -->
        <ui-form-group
          label-for="password"
          help-id="password-help"
          class="field"
        >
          <template slot="label">
            <span class="fonts__text-label">{{ $t('auth.register.form.password.label') }}</span>
          </template>
          <template slot="input">
            <transition name="fade">
              <ui-form-alert v-if="errors.password.error && errors.password.type">
                <span class="fonts__text2">{{ passwordErrorText }}</span>
              </ui-form-alert>
            </transition>
            <ui-form-input
              v-model="password"
              id="password"
              aria-describedby="password-help"
              type="password"
              :is-invalid="errors.password.error"
              @input="hideErrors('password')"
            />
          </template>
          <template slot="help">
            <span class="fonts__text4 colors__font_pale-sky">{{ $t('auth.register.form.password.help') }}</span>
          </template>
        </ui-form-group>
        <!--  Captcha -->
        <ui-form-group
          label-for="captcha"
          help-id="captcha-help"
          class="field"
        >
          <template slot="label">
            <span class="fonts__text-label">{{ $t('auth.register.form.captcha.label') }}</span>
          </template>
          <template slot="input">
            <div class="captcha-math colors__background_white">
              <math-jax-typeset-svg :math="register.captcha.math"/>
            </div>
            <div class="captcha-input">
              <transition name="fade">
                <ui-form-alert v-if="errors.captcha.error">
                  <span class="fonts__text2">{{ captchaErrorText }}</span>
                </ui-form-alert>
              </transition>
              <ui-form-input
                v-model="captcha"
                id="captcha"
                aria-describedby="captcha-help"
                type="number"
                :is-invalid="errors.captcha.error"
                @input="hideErrors('captcha')"
              />
            </div>
          </template>
          <template slot="help">
            <span class="fonts__text4 colors__font_pale-sky">{{ $t('auth.register.form.captcha.help') }}</span>
          </template>
        </ui-form-group>
        <div class="register-content__form_buttons">
          <ui-button
            :variant="['primary']"
            @click.native="submitRegister"
          >{{ $t('auth.register.form.sign_up') }}</ui-button>
        </div>
        <div class="register-content__form_terms">
          <i18n
            path="auth.register.form.terms.text"
            tag="span"
            class="fonts__text4 colors__font_pale-sky"
            >
            <a href="https://blockchair.com/terms" target="_blank" slot="terms_link">{{ $t('auth.register.form.terms.terms') }}</a>
            <a href="https://blockchair.com/privacy" target="_blank" slot="privacy_link">{{ $t('auth.register.form.terms.privacy') }}</a>
          </i18n>
        </div>
      </div>
    </ui-card>
    <ui-card
      class="register-content__login"
      center
    >
      <i18n
        path="auth.register.login.text"
        tag="span"
        class="fonts__text2"
      >
        <nuxt-link slot="link" to="/auth/login">{{ $t('auth.register.login.link') }}</nuxt-link>
      </i18n>
    </ui-card>
  </div>
</template>

<script>
  import {Auth} from '~/api/index'
  import { mapState, mapActions } from 'vuex'

  import UiCard from "~/components/UI/Cards/Card"
  import UiAlert from "~/components/UI/Alerts/Alert";
  import UiFormGroup from "~/components/UI/Forms/FormGroup";
  import UiFormInput from "~/components/UI/Forms/FormInput";
  import MathJaxTypesetSvg from "~/components/MathJax/TypesetSvg";
  import UiButton from "~/components/UI/Buttons/Button";
  import UiFormAlert from "~/components/UI/Forms/FormAlert";

  export default {
    name: 'RegisterContent',
    components: {
      MathJaxTypesetSvg,
      UiCard,
      UiAlert,
      UiFormGroup,
      UiFormAlert,
      UiFormInput,
      UiButton
    },
    data() {
      return {
        displayName: '',
        email: '',
        password: '',
        captcha: '',
        errors: {
          displayName: false,
          email: {
            error: false,
            type: null
          },
          password: {
            error: false,
            type: null
          },
          captcha: {
            error: false,
            type: null
          }
        },
        globalError: {
          show: false,
          source: null,
          type: null
        }
      }
    },
    computed: {
      ...mapState({
        register: state => state.auth.register
      }),
      globalErrorText() {
        if (this.globalError.source === 'user' && this.globalError.type === 'already_exist') {
          return this.$t('auth.register.form.alerts.user_already_exist')
        }

        return this.$t('auth.register.form.alerts.internal')
      },
      emailErrorText() {
        switch (this.errors.email.type) {
          case 'empty':
            return this.$t('auth.register.form.email.errors.empty')
          case 'invalid':
            return this.$t('auth.register.form.email.errors.invalid')
        }

        return ''
      },
      passwordErrorText() {
        switch (this.errors.password.type) {
          case 'empty':
            return this.$t('auth.register.form.password.errors.empty')
          case 'invalid':
            return this.$t('auth.register.form.password.errors.invalid')
        }

        return ''
      },
      captchaErrorText() {
        switch (this.errors.captcha.type) {
          case 'empty':
            return this.$t('auth.register.form.captcha.errors.empty')
          case 'wrong_answer':
          case 'not_loaded':
            return this.$t('auth.register.form.captcha.errors.wrong_answer')
        }

        return ''
      }
    },
    methods: {
      ...mapActions({
        setRegisterData: 'auth/setRegisterData'
      }),
      validate() {
        if (this.displayName === '') {
          return [false, 'empty_display_name']
        }

        if (this.email === '') {
          return [false, 'empty_email']
        }

        if (this.password === '') {
          return [false, 'empty_password']
        }

        if (this.email === '') {
          return [false, 'empty_email']
        }

        if (this.captcha === '') {
          return [false, 'empty_captcha']
        }
        else if (isNaN(this.captcha)) {
          return [false, 'incorrect_captcha']
        }

        return [true, null]
      },
      async submitRegister() {
        const [status, error] = this.validate()

        if (status) {
          const payload = {
            captcha: {
              token: this.register.captcha.token,
              answer: this.captcha
            },
            displayName: this.displayName,
            email: this.email,
            password: this.password
          }

          try {
            const data = await Auth.register(this.$axios, payload)

            if (data.context.status === 'error') {
              const error = data.context.error

              if (error.source === 'token') {
                return location.reload()
              }

              if (this.errors[error.source]) {
                const errorObject = this.errors[error.source]

                errorObject.type = error.type
                errorObject.error = true
              }
              else if (error.source === 'internal' || error.source === 'user') {
                this.globalError.source = error.source
                this.globalError.type = error.type
                this.globalError.show = true
              }
            }
            else if (data.context.status === 'success') {
              this.setRegisterData(data.data)
              this.$router.push(this.localePath({name: 'auth-register-confirm'}))
            }
          }
          catch (error) {
            console.error(error)
          }
        }
        else {
          switch (error) {
            case 'empty_display_name':
              this.errors.displayName = true
              break;
            case 'empty_email':
              this.errors.email.type = 'empty'
              this.errors.email.error = true
              break;
            case 'empty_password':
              this.errors.password.type = 'empty'
              this.errors.password.error = true
              break;
            case 'empty_captcha':
            case 'invalid_captcha':
              if (error === 'empty_captcha') {
                this.errors.captcha.type = 'empty'
              }
              else if (error === 'invalid_captcha') {
                this.errors.captcha.type = 'invalid'
              }

              this.errors.captcha.error = true

              break;
          }
        }
      },
      hideErrors(name) {
        if (this.errors[name]) {
          const errorObject = this.errors[name]

          if (typeof errorObject === 'object') {
            errorObject.error = false
            errorObject.type = null
          }
          else {
            this.errors[name] = false
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../../assets/styles/base/grid";

  .register-content {
    width: nonScalePx(600);
    display: flex;
    flex-direction: column;

    &__form {
      position: relative;

      &_title {
        display: flex;
        flex-direction: column;
        margin-bottom: nonScalePx(50);

        .help {
          margin-top: nonScalePx(5);
        }
      }

      &_torus {
        position: absolute;
        right: nonScalePx(20);
        bottom: nonScalePx(5);
        filter: opacity(5%);

        img {
          width: nonScalePx(558);
          height: nonScalePx(468);
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
          margin-bottom: nonScalePx(20);

          &:last-child {
            margin-bottom: 0;
          }
        }

        .captcha-math {
          width: 100%;
          min-height: nonScalePx(80);
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: nonScalePx(8);
        }

        .captcha-input {
          position: relative;
          display: flex;
          flex-direction: column;
        }
      }

      &_buttons {
        margin-top: nonScalePx(12);
        width: 100%;
      }

      &_terms {
        margin-top: nonScalePx(32)
      }
    }

    &__login {
      margin-top: nonScalePx(16);
    }

    @media (max-width: $desktop-break-point) {
      width: pxToVwDesktop(600);

      &__form {
        &_title {
          margin-bottom: pxToVwDesktop(50);

          .help {
            margin-top: pxToVwDesktop(5);
          }
        }

        &_torus {
          right: pxToVwDesktop(20);
          bottom: pxToVwDesktop(5);

          img {
            width: pxToVwDesktop(558);
            height: pxToVwDesktop(468);
          }
        }

        &_fields {
          .alert {
            margin-bottom: pxToVwDesktop(16);
          }

          .field {
            margin-bottom: pxToVwDesktop(20);
          }

          .captcha-math {
            min-height: pxToVwDesktop(80);
            margin-bottom: pxToVwDesktop(8);
          }
        }

        &_buttons {
          margin-top: pxToVwDesktop(12);
        }

        &_terms {
          margin-top: pxToVwDesktop(32)
        }
      }

      &__login {
        margin-top: pxToVwDesktop(16);
      }
    }
  }
</style>
