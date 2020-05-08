import {Articles} from "~/api/index"
import {
  SET_ARTICLES,
  SET_ARTICLES_CONTEXT
} from "~/consts/mutation-types"

export const state = () => ({
  articles: [],
  context: {
    limit: 10,
    offset: 0,
    total: 0
  }
})

export const mutations = {
  [SET_ARTICLES](state, value) {
    state.articles = value
  },
  [SET_ARTICLES_CONTEXT](state, data) {
    state.context = Object.assign(state.context, data)
  }
}

export const actions = {
  async setArticles({ commit }, { limit, offset}) {
    const articlesAll = Articles.all(this.$axios)

    try {
      const data = await articlesAll(limit, offset)

      if (data.context.success) {
        commit(SET_ARTICLES, data.data)
        commit(SET_ARTICLES_CONTEXT, data.context)
      }
    } catch (error) {
      throw new Error(error)
    }
  }
}
