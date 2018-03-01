import Vue from 'vue'
import Resource from 'vue-resource'
import _ from 'lodash'

Vue.use(Resource)

Vue.http.options.root = 'http://192.168.13.87:3000'

Vue.http.interceptors.push((request, next) => {
  // modify request
  _.assign(request.params, {
  })
  // continue to next interceptor
  next()
})
