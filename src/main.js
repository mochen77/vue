// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App'
// import MintUI from 'mint-ui'
import axios from 'axios'
// import Qs from 'qs'

// import 'mint-ui/lib/style.css'
import router from './router'
import store from './store'
import '../static/mint-ui.scss'

Vue.prototype.$http = axios

Vue.config.productionTip = false
Vue.use(MintUI)

/* eslint-disable no-new */
new Vue({
  el: '#root',
  router,
  store,
  components: { App },
  template: '<App/>'
})
