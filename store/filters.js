import {
  REMOVE_SORT,
  CLEAR_SORTS,
  ADD_SORT,
  EDIT_SORT,
  REMOVE_FILTER,
  CLEAR_FILTERS,
  ADD_FILTER,
  EDIT_FILTER,
} from "~/consts/mutation-types"

export const state = () => ({
  sorts: [],
  filters: [],
})

export const mutations = {
  [REMOVE_SORT](state, index) {
    state.sorts.splice(index, 1)
  },
  [CLEAR_SORTS](state) {
    state.sorts = []
  },
  [ADD_SORT](state, value) {
    state.sorts.push(value)
  },
  [EDIT_SORT](state, data) {
    state.sorts.splice(data.index, 1, data.value)
  },
  [REMOVE_FILTER](state, index) {
    state.filters.splice(index, 1)
  },
  [CLEAR_FILTERS](state) {
    state.filters = []
  },
  [ADD_FILTER](state, value) {
    state.filters.push(value)
  },
  [EDIT_FILTER](state, data) {
    state.filters.splice(data.index, 1, data.value)
  },
}

export const actions = {
  addSort({ state, commit }, value) {
    const sortIndex = state.sorts.findIndex(
      (s) => s["field"] === value["field"]
    )

    if (sortIndex !== -1) {
      commit(EDIT_SORT, {
        index: sortIndex,
        value,
      })
    } else {
      commit(ADD_SORT, value)
    }
  },
  removeSort({ state, commit }, field) {
    const sortIndex = state.sorts.findIndex((s) => s["field"] === field)

    if (sortIndex !== -1) {
      commit(REMOVE_SORT, sortIndex)
    }
  },
  clearSorts({ commit }) {
    commit(CLEAR_SORTS)
  },
  addFilter({ state, commit }, value) {
    const filterIndex = state.filters.findIndex(
      (s) => s["field"] === value["field"]
    )

    if (filterIndex !== -1) {
      commit(EDIT_FILTER, {
        index: filterIndex,
        value,
      })
    } else {
      commit(ADD_FILTER, value)
    }
  },
  removeFilter({ state, commit }, field) {
    const filterIndex = state.filters.findIndex((s) => s["field"] === field)

    if (filterIndex !== -1) {
      commit(REMOVE_FILTER, filterIndex)
    }
  },
  clearFilters({ commit }) {
    commit(CLEAR_FILTERS)
  },
}
