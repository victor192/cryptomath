import { Tags } from "~/api/index"
import { SET_TAGS, SET_TAGS_CONTEXT } from "~/consts/mutation-types"

export const state = () => ({
  tags: [],
  context: {
    limit: 10,
    offset: 0,
    total: 0,
  },
})

export const mutations = {
  [SET_TAGS](state, value) {
    state.tags = value
  },
  [SET_TAGS_CONTEXT](state, data) {
    state.context = Object.assign(state.context, data)
  },
}

export const actions = {
  async setTags({ commit }, { limit, offset }) {
    const tagsAll = Tags.all(this.$axios)

    try {
      const data = await tagsAll(limit, offset)

      if (data.context.success) {
        commit(SET_TAGS, data.data)
        commit(SET_TAGS_CONTEXT, data.context)
      }
    } catch (error) {
      throw new Error(error)
    }
  },
}
