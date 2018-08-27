import Vue from 'vue'

import App from './App'
import router from './router/index'
import Dialog from './extends/dialog'

Vue.prototype.$dialog = Dialog


Vue.config.productionTip = false

/* eslint-disable no-new */
let vm = new Vue({
  el: '#app',
  router,
  render: h => h(App)
})


