import superheroes from '../../api/superheroes'

const state = {
  all: []
}

const getters = {
  allHeroes: state => state.all
}

const actions = {
  getAllHeroes ({commit}) {
    const heroes = superheroes.getAllHeroes()
    commit('setHeroes', heroes)
  }
}

const mutations = {
  setHeroes(state, heroes) {
    state.all = heroes
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
