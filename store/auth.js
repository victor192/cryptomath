import {
  setJWTToken,
  deleteJWTToken
} from "~/tools/jwt";
import {Captcha} from "~/api/index"
import {
  SET_TOKEN,
  SET_REGISTER_CAPTCHA,
  SET_REGISTER_DATA
} from "~/consts/mutation-types"

export const state = () => ({
  token: null,
  register: {
    captcha: {
      token: '',
      math: ''
    },
    data: {
      id: null,
      displayName: '',
      email: ''
    }
  }
})

export const getters = {
  isToken(state) {
    return !!state.token
  }
}

export const mutations = {
  [SET_TOKEN](state, token) {
    state.token = token
  },
  [SET_REGISTER_CAPTCHA](state, data) {
    state.register.captcha = Object.assign(state.register.captcha, data)
  },
  [SET_REGISTER_DATA](state, data) {
    state.register.data = Object.assign(state.register.data, data)
  }
}

export const actions = {
  async setToken({commit}, data) {
    commit(SET_TOKEN, data.accessToken)

    if (data.expiresIn) {
      await setJWTToken(data)
    }
  },
  async setRegisterCaptcha({commit}) {
    try {
      const data = await Captcha.generate(this.$axios)

      if (data.context.status === 'success') {
        commit(SET_REGISTER_CAPTCHA, data.data)
      }
    }
    catch (error) {
      throw new Error(error)
    }
  },
  setRegisterData({commit}, data) {
    commit(SET_REGISTER_DATA, data)
  },
  removeToken({commit}) {
    commit(SET_TOKEN, null)

    this.$axios.setToken(false, 'Bearer')

    deleteJWTToken()
  },
}
