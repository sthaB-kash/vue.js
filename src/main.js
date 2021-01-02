import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {store} from './store/data'

//import store from './store/data'

Vue.config.productionTip = false

new Vue({
  //store: store,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
