import {Funds} from "~/api/index"
import {
  SET_FUNDS,
  SET_FUNDS_CONTEXT
} from "~/consts/mutation-types"

export const state = () => ({
  funds: [],
  context: {
    limit: 10,
    offset: 0,
    total: 0
  }
})

export const mutations = {
  [SET_FUNDS](state, value) {
    state.funds = value
  },
  [SET_FUNDS_CONTEXT](state, data) {
    state.context = Object.assign(state.context, data)
  }
}

export const actions = {
  async setFunds({ commit }, { limit, offset}) {
    const fundsAll = Funds.all(this.$axios)

    try {
      const data = await fundsAll(limit, offset)

      if (data.context.success) {
        commit(SET_FUNDS, data.data)
        commit(SET_FUNDS_CONTEXT, data.context)
      }
    } catch (error) {
      throw new Error(error)
    }
  }
}
