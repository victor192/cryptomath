import {Captcha} from "~/api/index"
import {SET_REGISTER_CAPTCHA} from "~/consts/mutation-types";

export const state = () => ({
  register: {
    captcha: {
      token: '',
      math: ''
    }
  }
})

export const mutations = {
  [SET_REGISTER_CAPTCHA](state, data) {
    state.register.captcha = data
  }
}

export const actions = {
  async setRegister({commit}) {
    try {
      const data = await Captcha.generate(this.$axios)

      if (data.context.status === 'success') {
        commit(SET_REGISTER_CAPTCHA, data.data)
      }
    }
    catch (error) {
      throw new Error(error)
    }
  }
}
