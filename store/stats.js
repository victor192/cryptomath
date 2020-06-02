import {Stats} from "~/api/index"
import {
  SET_GENERAL_STATS
} from "~/consts/mutation-types"

export const state = () => ({
  general: {
    articles: 0,
    users: 0,
    organizations: 0,
    hubs: 0,
    tags: 0
  }
})

export const mutations = {
  [SET_GENERAL_STATS](state, data) {
    state.general = Object.assign(state.general, data)
  },
}

export const actions = {
  async setGeneralStats({commit}) {
    const statsGeneral = Stats.general(this.$axios)

    try {
      const data = await statsGeneral()

      if (data.context.success) {
        commit(SET_GENERAL_STATS, data.data)
      }
    } catch (error) {
      throw new Error(error)
    }
  }
}

