import {Hubs} from "~/api/index"
import {
  SET_HUBS,
  SET_HUBS_CONTEXT
} from "~/consts/mutation-types"

export const state = () => ({
  hubs: [],
  context: {
    limit: 10,
    offset: 0,
    total: 0
  }
})

export const mutations = {
  [SET_HUBS](state, value) {
    state.hubs = value
  },
  [SET_HUBS_CONTEXT](state, data) {
    state.context = Object.assign(state.context, data)
  }
}

export const actions = {
  async setHubs({ commit }, { limit, offset}) {
    const hubsAll = Hubs.all(this.$axios)

    try {
      const data = await hubsAll(limit, offset)

      if (data.context.success) {
        commit(SET_HUBS, data.data)
        commit(SET_HUBS_CONTEXT, data.context)
      }
    } catch (error) {
      throw new Error(error)
    }
  }
}
