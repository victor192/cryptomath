import { Tags } from "~/api/index"
import {
  SET_TAGS,
  SET_TAGS_CONTEXT,
  SET_TAGS_ERROR,
} from "~/consts/mutation-types"
import { ResponseError } from "~/tools/errors/response"

export const state = () => ({
  tags: [],
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
  [SET_TAGS](state, value) {
    state.tags = value
  },
  [SET_TAGS_CONTEXT](state, data) {
    state.context = Object.assign(state.context, data)
  },
  [SET_TAGS_ERROR](state, data) {
    state.error = Object.assign(state.error, data)
  },
}

export const actions = {
  async setTags({ commit }, { limit, offset }) {
    commit(SET_TAGS_ERROR, { code: null, message: "" })

    const tagsAll = Tags.all(this.$axios)

    try {
      const { offset: skip, limit: took, total, tags } = await tagsAll(
        limit,
        offset
      )

      commit(SET_TAGS, tags)
      commit(SET_TAGS_CONTEXT, { offset: skip, limit: took, total })
    } catch (err) {
      if (err instanceof ResponseError) {
        commit(SET_TAGS_ERROR, err)
      } else {
        throw new Error(err)
      }
    }
  },
}
