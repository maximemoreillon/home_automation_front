import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import VueSocketIOExt from 'vue-socket.io-extended'
import io from 'socket.io-client'

const socket = io(process.env.VUE_APP_HOME_AUTOMATION_API_URL)

Vue.use(VueSocketIOExt, socket);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
