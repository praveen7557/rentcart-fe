import { customizer } from '../helpers';
import mergeWith from "lodash.mergewith";
import Vuex from "vuex";

let createStore = (overrides) => {
  let options = {
    namespaced: true,
    state: {
      stepData: {}
    },
    mutations: {
      "UPDATE_LISTING_STEP": jest.fn(() => Promise.resolve())
    }
  };
  let defaultOptions = {
    modules: {}
  }
  let merged = mergeWith(options, overrides, customizer);
  defaultOptions.modules.listing = merged;

  return new Vuex.Store(defaultOptions);
}

export default createStore;