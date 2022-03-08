import { Stats } from "~/api/index"
import { SET_ALL_STATS } from "~/consts/mutation-types"

export const state = () => ({
  all: {
    articles: 6,
    problems: 15,
    users: 3,
    organizations: 0,
    hubs: 3,
    tags: 3,
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
