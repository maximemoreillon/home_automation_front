import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import axios from "axios"
import VueAxios from "vue-axios"

import VueSocketIOExt from "vue-socket.io-extended"
import io from "socket.io-client"
import vuetify from "./plugins/vuetify"
import "./registerServiceWorker"

const { VUE_APP_HOME_AUTOMATION_API_URL } = process.env

const socket = io(VUE_APP_HOME_AUTOMATION_API_URL)
axios.defaults.baseURL = VUE_APP_HOME_AUTOMATION_API_URL

Vue.use(VueSocketIOExt, socket)
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app")
