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
            <ui-form-input
              v-model="displayName"
              id="display-name"
              aria-describedby="display-name-help"
              type="text"
              :is-invalid="errors.displayName"
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
            <ui-form-input
              v-model="email"
              id="email"
              aria-describedby="email-help"
              type="email"
              :is-invalid="errors.email"
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
            <ui-form-input
              v-model="password"
              id="password"
              aria-describedby="password-help"
              type="password"
              :is-invalid="errors.password"
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
            <ui-form-input
              v-model="captcha"
              id="captcha"
              aria-describedby="captcha-help"
              type="number"
              :is-invalid="errors.captcha"
            />
          </template>
          <template slot="help">
            <span class="fonts__text4 colors__font_pale-sky">{{ $t('auth.register.form.captcha.help') }}</span>
          </template>
        </ui-form-group>
      </div>
    </ui-card>
  </div>
</template>

<script>
  import UiCard from "~/components/UI/Cards/Card"
  import UiFormGroup from "~/components/UI/Forms/FormGroup";
  import UiFormInput from "~/components/UI/Forms/FormInput";

  export default {
    name: 'RegisterContent',
    components: {
      UiCard,
      UiFormGroup,
      UiFormInput
    },
    data() {
      return {
        displayName: '',
        email: '',
        password: '',
        captcha: '',
        errors: {
          displayName: false,
          email: false,
          password: false,
          captcha: false
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../../assets/styles/base/grid";

  .register-content {
    width: nonScalePx(460);
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
        right: nonScalePx(10);
        bottom: nonScalePx(5);
        filter: opacity(8%);

        img {
          width: nonScalePx(465);
          height: nonScalePx(390);
        }
      }

      &_fields {
        display: flex;
        flex-direction: column;
        z-index: 2;

        .field {
          margin-bottom: nonScalePx(20);

          &:last-child {
            margin-bottom: 0;
          }
        }
      }
    }

    @media (max-width: $desktop-break-point) {
      .register-content {
        width: pxToVwDesktop(460);

        &__form {
          &_title {
            margin-bottom: pxToVwDesktop(50);

            .help {
              margin-top: pxToVwDesktop(5);
            }
          }

          &_torus {
            right: pxToVwDesktop(10);
            bottom: pxToVwDesktop(5);

            img {
              width: pxToVwDesktop(465);
              height: pxToVwDesktop(390);
            }
          }

          &_fields {
            .field {
              margin-bottom: pxToVwDesktop(20);
            }
          }
        }
      }
    }
  }
</style>
