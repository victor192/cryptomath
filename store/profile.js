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
    const profileGet = Profile.get(this.$axios)

    try {
      const profile = await profileGet()

      if (profile.context.status === 'success') {
        commit(SET_PROFILE, profile.data)
      }
    } catch (error) {
      throw new Error(error)
    }
  }
}
