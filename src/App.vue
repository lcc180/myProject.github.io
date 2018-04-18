<template>
  <div id="app">
    <header class="header-top">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <ul class="head-nav">
              <li class="head-nav-item logo">
                <img src="~@/assets/images/huaban/logo.png" alt="">
              </li>
              <router-link class="head-nav-item pl-0" to="/home" active-class="active">
                JC书城
              </router-link>
              <router-link class="head-nav-item" to="/cssGroup" active-class="active">
                样式库
              </router-link>
              <router-link class="head-nav-item" to="/knowledge" active-class="active">
                学习笔记
              </router-link>
              <a href="" class="head-nav-item">精选</a>
              <li class="head-nav-item head-nav-item-portrait">
                <img :src="userInfo ? userInfo.portrait : ''" id="header-portrait" alt="" @click="toggleNav">
                <ul class="nav-zhihu">
                  <li class="nav-zhihu-item">
                    <a class="text-muted" href="">
                      <svg-icon icon="icon-favorfill"></svg-icon>我的主页
                    </a>
                  </li>
                  <li class="nav-zhihu-item">
                    <a class="text-muted" href=""><svg-icon icon="icon-shezhi"></svg-icon>设置</a>
                  </li>
                  <li class="nav-zhihu-item">
                    <a class="text-muted" href=""><svg-icon icon="icon-camerafill"></svg-icon>退出</a>
                  </li>
                  <li class="triangle"></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
    <!-- <div class="container my-3">
      <nav class="navbar navbar-toggleable-md navbar-light">
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" href="#">JC <small>科技</small></a>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li :class="{
            	'nav-item': true,
            	'active': $route.path == ''
            }">
              <router-link class="nav-link" :to="{
              	path: '/'
              }">首页</router-link>
            </li>
            <li :class="{
            	'nav-item': true,
            	'active': $route.path == '/cssGroup'
            }">
              <router-link class="nav-link" :to="{
              	path: '/cssGroup'
              }">css组件</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{
                path: '/hello'
              }">vue</router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">javascript</a>
            </li>
            <li :class="{
              'nav-item': true,
              'active': $route.matched[0].path == '/es6'
            }">
              <router-link class="nav-link" :to="{
                path: '/es6/c1'
              }">ES 6 标准入门</router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div> -->
    
    <!--  -->
    <div class="main-container">
      <keep-alive exclude="">
        <router-view></router-view>
      </keep-alive>
    </div>
    
    <footer class="copyright" v-show="!$route.meta.hideFooter">
      © 2017 GitHub, Inc.
    </footer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'app',
  computed: {
    ...mapGetters(['userInfo'])
  },
  methods: {
    toggleNav () {
      $('.nav-zhihu').fadeToggle()
    }
  },
  created () {
    $(document).on('click', event => {
      event.preventDefault()
      /* Act on the event */
      if (event.target.id === 'header-portrait') return
      if (!$(event.target).closest('.nav-zhihu').length) {
        $('.nav-zhihu').fadeOut()
      }
    })
  }
}
</script>

