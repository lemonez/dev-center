import Vue from 'vue'
import clone from 'clone'
import { debounce } from '../utilities/debounce'
import { searchIndex } from '../utilities/lunr'

export const filter = {
  NONE: { name: 'All results', value: 'NONE' },
  API_DOCS: { name: 'API Docs', value: 'API_DOCS' },
  DEV_CENTER: { name: 'Developer Docs', value: 'DEV_CENTER' },
}

export const search = {
  state: {
    query: '',
    filter: filter.NONE,
    results: []
  },
  mutations: {
    SET_FILTER: (state, payload) => {
      state.filter = payload.filter
    },
    SET_QUERY: (state, payload) => {
      state.query = payload.query
    },
    SET_RESULTS: (state, payload) => {
      Vue.set(state, 'results', payload.results)
    }
  },
  actions: {
    setFilter({ commit, dispatch }, filter) {
      commit('SET_FILTER', { filter })
      dispatch('search')
    },
    setQuery({ commit, dispatch }, query) {
      commit('SET_QUERY', { query })
      dispatch('search')
    },
    search: debounce(({ commit, getters }) => {
      const { query, filter } = getters
      commit(
        'SET_RESULTS',
        { results: searchIndex.search(query, filter.value) }
      )
    }),
  },
  getters: {
    query: state => state.query,
    filter: state => state.filter,
    results: state => clone(state.results),
    showSearchResults: (state, getters) => getters.query.length >= 1
  }
}