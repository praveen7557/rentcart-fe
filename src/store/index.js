import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import ListItem from "./list-item";

export default new Vuex.Store({
  modules: {
    listing: ListItem
  },
  state: {

  },
  mutations: {

  },
  actions: {

  }
})
