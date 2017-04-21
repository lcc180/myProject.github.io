import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '@/components/Home'
import bookDetail from '@/components/bookDetail'
import cssGroup from '@/components/cssGroup'
import es6 from '@/components/es6'
import c1 from '@/components/es6/c1'
import c3 from '@/components/es6/c3'
import c4 from '@/components/es6/c4'
import c5 from '@/components/es6/c5'
import c6 from '@/components/es6/c6'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/hello',
      name: 'hello',
      component: Hello
    },
    {
      path: '/cssGroup',
      name: 'cssGroup',
      component: cssGroup
    },
    {
      path: '/bookDetail/:id',
      name: 'bookDetail',
      component: bookDetail
    },
    {
      path: '/es6',
      name: 'es6',
      component: es6,
      children: [
        {
          path: 'c1',
          component: c1
        },
        {
          path: 'c3',
          component: c3
        },
        {
          path: 'c4',
          component: c4
        },
        {
          path: 'c5',
          component: c5
        },
        {
          path: 'c6',
          component: c6
        }
      ]
    }
  ]
})
