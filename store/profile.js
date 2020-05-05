import {Profile} from "~/api/index"
import {
  SET_PROFILE
} from "~/consts/mutation-types"

export const state = () => ({
  profile: false
})

export const getters = {
  isAuthorized(state) {
    return !!state.profile
  }
}

export const mutations = {
  [SET_PROFILE](state, value) {
    state.profile = value
  },
}

export const actions = {
  async setProfile({commit}) {
    try {
      const profile = await Profile.get(this.$axios)

      commit(SET_PROFILE, profile)
    } catch (error) {
      throw new Error(error)
    }
  }
}
