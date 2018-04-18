import Vue from 'vue'

import 'normalize.css/normalize.css'// A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/zh-CN'

import '@/styles/index.scss' // global css

import App from './App'
import router from './router'
import store from './store'

import * as filters from './filters' // 全局vue filter

import '@/permission' // permission control

import global from '@/global/global'

Vue.use(ElementUI, { locale })

Vue.config.productionTip = false

// 全局过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

//加载用户主题
if( localStorage.getItem('themeValue') ){
    global.changeTheme( localStorage.getItem("themeValue"));
}

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
