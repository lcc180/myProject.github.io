<template>
  <div id="app">
    <header class="header-top">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <ul class="head-nav">
              <router-link class="head-nav-item pl-0" to="/">
                <i class="iconfont icon-taxi"></i>
                JC书城
              </router-link>
              <a href="" class="head-nav-item">分类</a>
              <a href="" class="head-nav-item">精选</a>
              <a href="" class="head-nav-item">分类</a>
              <a href="" class="head-nav-item">
                <i class="iconfont icon-time"></i>
                分类
              </a>
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
    <router-view></router-view>

    <footer class="copyright">
      © 2017 GitHub, Inc.
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

