import Vue from 'vue'
// 引入vuex
import Vuex from 'vuex'
// 引入自己的state

import app from './modules/app'

Vue.use(Vuex)

const store = new Vuex.Store({
  // 引入严格模式
  strict: true,
  modules: {
    app
  }
})

export default store
