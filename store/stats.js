import { Stats } from "~/api/index"
import { SET_ALL_STATS } from "~/consts/mutation-types"

export const state = () => ({
  all: {
    articles: 0,
    users: 0,
    organizations: 0,
    hubs: 0,
    tags: 0,
  },
})

export const mutations = {
  [SET_ALL_STATS](state, data) {
    state.all = Object.assign(state.all, data)
  },
}

export const actions = {
  async setAllStats({ commit }) {
    const statsAll = Stats.all(this.$axios)

    try {
      const data = await statsAll()

      if (data.context.success) {
        commit(SET_ALL_STATS, data.data)
      }
    } catch (error) {
      throw new Error(error)
    }
  },
}
