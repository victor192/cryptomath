import {Stats} from "~/api/index"
import {
  SET_GENERAL_STATS,
  SET_TAGS_STATS
} from "~/consts/mutation-types"

export const state = () => ({
  general: {
    articles: 0,
    users: 0,
    hubs: 0,
    tags: 0
  },
  tags: []
})

export const mutations = {
  [SET_GENERAL_STATS](state, data) {
    state.general = Object.assign(state.general, data)
  },
  [SET_TAGS_STATS](state, data) {
    state.tags = data
  }
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
  },
  async setTagsStats({commit}) {
    const statsTags = Stats.tags(this.$axios)

    try {
      const data = await statsTags()

      if (data.context.success) {
        commit(SET_TAGS_STATS, data.data)
      }
    } catch (error) {
      throw new Error(error)
    }
  }
}

