import Vue from 'vue'
import Vuex from 'vuex'
import superheroes from './modules/superheroes'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    superheroes
  },
  strict: debug
})
