import Vue from 'vue'
import Router from 'vue-router'
import es6 from '@/modules/es6'
import c1 from '@/modules/es6/c1'
import c3 from '@/modules/es6/c3'
import c4 from '@/modules/es6/c4'
import c5 from '@/modules/es6/c5'
import c6 from '@/modules/es6/c6'
import node from '@/modules/node'
import nodeC8 from '@/modules/node/c8'
import nodeC6 from '@/modules/node/c6'
import nodeC5 from '@/modules/node/c5'
import nodeC7 from '@/modules/node/c7'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: require('@/modules/home')
    },
    {
      path: '/cssGroup',
      component: require('@/modules/cssGroup/index'),
      children: [{
        path: '',
        component: require('@/modules/cssGroup/navbar')
      }]
    },
    {
      path: '/bookDetail/:id',
      name: 'bookDetail',
      component: require('@/modules/bookDetail')
    },
    {
      path: '/catalogue',
      name: 'catalogue',
      component: require('@/modules/catalogue')
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
        },
        {
          path: 'c8',
          component: require('@/modules/es6/c8')
        },
        {
          path: 'c9',
          component: require('@/modules/es6/c9')
        },
        {
          path: 'c16',
          component: require('@/modules/es6/c16')
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
        },
        {
          path: 'c2',
          name: 'c2',
          component: require('@/modules/node/c2')
        },
        {
          path: 'c3',
          name: 'c3',
          component: require('@/modules/node/c3')
        }
      ]
    },

    {
      path: '/knowledge',
      name: 'knowledge',
      component: require('@/modules/knowledge/index')
    }, {
      path: '/addKnowledge',
      name: 'addKnowledge',
      component: require('@/modules/knowledge/add')
    }, {
      path: '/cropImage',
      name: 'cropImage',
      component: require('@/modules/cropImage')
    },

    // 匹配不到的路径定义
    {
      path: '*',
      name: 'hello',
      component: require('@/modules/hello')
    }
  ]
})
