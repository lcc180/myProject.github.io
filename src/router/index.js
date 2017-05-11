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
import node from '@/components/node'
import nodeC8 from '@/components/node/c8'
import nodeC6 from '@/components/node/c6'
import nodeC5 from '@/components/node/c5'
import nodeC7 from '@/components/node/c7'

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
    },
    {
      path: '/node',
      name: 'node',
      component: node,
      children: [
        {
          path: 'c8',
          component: nodeC8
        },
        {
          path: 'c6',
          component: nodeC6
        },
        {
          path: 'c5',
          component: nodeC5
        },
        {
          path: 'c7',
          component: nodeC7
        }
      ]
    }
  ]
})
