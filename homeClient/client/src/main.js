// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import '@/assets/style/reset.less'
import '@/assets/iconfont/iconfont.css'
import 'element-ui/lib/theme-chalk/index.css'

import App from './App'

Vue.config.productionTip = false

// 挂载插件
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
