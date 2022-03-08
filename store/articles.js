import { Articles } from "~/api/index"
import {
  SET_ARTICLES,
  SET_ARTICLES_CONTEXT,
  SET_ARTICLES_ERROR,
} from "~/consts/mutation-types"
import { ResponseError } from "~/tools/errors/response"

export const state = () => ({
  articles: [],
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
  [SET_ARTICLES](state, value) {
    state.articles = value
  },
  [SET_ARTICLES_CONTEXT](state, data) {
    state.context = Object.assign(state.context, data)
  },
  [SET_ARTICLES_ERROR](state, data) {
    state.error = Object.assign(state.error, data)
  },
}

export const actions = {
  async setArticles({ state, commit }, { filters, sorts, limit, offset, search, extended }) {
    commit(SET_ARTICLES_ERROR, { code: null, message: "" })

    const articlesAll = Articles.all(this.$axios)

    try {
      const { offset: skip, limit: took, total, articles } = await articlesAll(
        filters || null,
        sorts || null,
        limit || state.limit,
        offset || state.offset,
        search || false,
        extended || false
      )

      commit(SET_ARTICLES, articles)
      commit(SET_ARTICLES_CONTEXT, { offset: skip, limit: took, total })
    } catch (err) {
      if (err instanceof ResponseError) {
        commit(SET_ARTICLES_ERROR, err)
      } else {
        throw new Error(err)
      }
    }
  },
}
