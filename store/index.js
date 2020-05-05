import axios from "axios"

import {
  getJWTToken
} from "~/tools/jwt";

export const actions = {
  nuxtClientInit({ dispatch }) {
    const token = getJWTToken()

    if (token) {
      dispatch('auth/setToken', {
        accessToken: token
      })

      axios.defaults.headers['Authorization'] = `Bearer ${token}`
    }
  }
}
