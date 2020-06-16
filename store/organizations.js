import { Organizations } from "~/api/index"
import {
  SET_ORGANIZATIONS,
  SET_ORGANIZATIONS_CONTEXT,
} from "~/consts/mutation-types"

export const state = () => ({
  organizations: [],
  context: {
    limit: 10,
    offset: 0,
    total: 0,
  },
})

export const mutations = {
  [SET_ORGANIZATIONS](state, value) {
    state.organizations = value
  },
  [SET_ORGANIZATIONS_CONTEXT](state, data) {
    state.context = Object.assign(state.context, data)
  },
}

export const actions = {
  async setOrganizations(
    { commit },
    { filters, sorts, limit, offset, search }
  ) {
    const organizationsAll = Organizations.all(this.$axios)

    try {
      const data = await organizationsAll(
        filters || null,
        sorts || null,
        limit || state.limit,
        offset || state.offset,
        search || false
      )

      if (data.context.success) {
        commit(SET_ORGANIZATIONS, data.data)
        commit(SET_ORGANIZATIONS_CONTEXT, data.context)
      }
    } catch (error) {
      throw new Error(error)
    }
  },
}
