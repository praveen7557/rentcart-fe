import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import BootstrapVue from 'bootstrap-vue'
import VeeValidate from "vee-validate";

Vue.use(BootstrapVue)
Vue.use(VeeValidate);

import '@/components'
import { createProvider } from './vue-apollo'


new Vue({
  router,
  store,
  apolloProvider: createProvider(),
  render: h => h(App)
}).$mount('#app')
