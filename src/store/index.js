// 创建Vuex中的store
import Vue from 'vue'
import Vuex from 'vuex'
import layout from './modules/layout'

// 创建store之后必须先应用Vuex
Vue.use(Vuex)

// 分模块
export default new Vuex.Store({
  modules: {
    layout,
  }
})