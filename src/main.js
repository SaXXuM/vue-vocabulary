import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VScrollLock from 'v-scroll-lock'

Vue.config.productionTip = false

Vue.use(VScrollLock)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
