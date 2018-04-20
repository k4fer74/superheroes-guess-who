import superheroes from '../../api/superheroes'

const state = {
  all: [],
  hidden: [],
  selected: 0
}

const getters = {
  allHeroes: state => state.all,
  isHidden: (state) => (hero) => {
    return state.hidden.indexOf(hero.id) >= 0
  }
}

const actions = {
  getAllHeroes ({commit}) {
    const heroes = superheroes.getAllHeroes()
    commit('setHeroes', heroes)
  },
  toggleHero ({commit}, hero) {
    commit('toggleHero', hero)
  }
}

const mutations = {
  setHeroes(state, heroes) {
    state.all = heroes
  },
  toggleHero (state, hero) {
    const index = state.hidden.indexOf(hero.id)
    if (index < 0) {
      state.hidden.push(hero.id)
    }
    else {
      state.hidden.splice(index, 1)
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
