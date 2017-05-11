// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import _ from 'lodash'
import './assets/scss/bootstrap.scss'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  methods: {
    go () {
      var es = 'e'
      console.log(_.now(), es)
      for (let i = 0; i < 10; i++) console.log(i)
    }
  }
})
