import { Hubs } from "~/api/index"
import {
  SET_HUBS,
  SET_HUBS_CONTEXT,
  SET_HUBS_ERROR,
} from "~/consts/mutation-types"
import { ResponseError } from "~/tools/errors/response"

export const state = () => ({
  hubs: [],
  context: {
    limit: 10,
    offset: 0,
    total: 0,
  },
  error: {
    code: null,
    message: "",
  },
})

export const mutations = {
  [SET_HUBS](state, value) {
    state.hubs = value
  },
  [SET_HUBS_CONTEXT](state, data) {
    state.context = Object.assign(state.context, data)
  },
  [SET_HUBS_ERROR](state, data) {
    state.error = Object.assign(state.error, data)
  },
}

export const actions = {
  async setHubs({ commit }, { filters, sorts, limit, offset, search }) {
    commit(SET_HUBS_ERROR, { code: null, message: "" })

    const hubsAll = Hubs.all(this.$axios)

    try {
      const { offset: skip, limit: took, total, hubs } = await hubsAll(
        filters || null,
        sorts || null,
        limit || state.limit,
        offset || state.offset,
        search || false
      )

      commit(SET_HUBS, hubs)
      commit(SET_HUBS_CONTEXT, { offset: skip, limit: took, total })
    } catch (err) {
      if (err instanceof ResponseError) {
        commit(SET_HUBS_ERROR, err)
      } else {
        throw new Error(err)
      }
    }
  },
}
