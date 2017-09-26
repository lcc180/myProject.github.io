// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './resource'
import vueStore from '@/vuex/store'

// 引入sass样式文件
import '@/assets/scss/bootstrap.scss'

// 第三方插件
/* exported Velocity */
import 'velocity-animate'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  store: vueStore,
  methods: {},
  created () {
  }
})
