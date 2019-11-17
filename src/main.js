import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import Router from 'vue-router'
import router from './router'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = true
Vue.use(BootstrapVue)
Vue.use(Router)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')