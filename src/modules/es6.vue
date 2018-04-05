<template>
  <div>
     <div class="introduce-header">
      <!-- <h4></h4> -->
      <div class="head-portrait animated jello">
        <img src="../assets/images/books/es6.jpeg" alt="">
      </div>
    </div>

    <div class="container introduce-content">
      <div class="row">
        <div class="col-md-9">
          <transition enter-active-class="animated fadeIn">
            <router-view></router-view>
          </transition>
        </div>
        <div class="col-md-3">
          <div class="nav-list">
            <router-link class="nav-list-item" :to="{ path: '/es6/c1'}" active-class="active">章节1. ECMAScript 6 简介</router-link>
            <router-link class="nav-list-item" :to="{ path: '/es6/c2'}" active-class="active">章节2. let和const命令</router-link>
            <router-link class="nav-list-item" :to="{ path: '/es6/c3'}" active-class="active">章节3. 变量的解构赋值</router-link>
            <router-link class="nav-list-item" :to="{ path: '/es6/c4'}" active-class="active">章节4. 字符串的扩展</router-link>
            <router-link class="nav-list-item" :to="{ path: '/es6/c5'}" active-class="active">章节5. 正则的扩展</router-link>
            <router-link class="nav-list-item" :to="{ path: '/es6/c6'}" active-class="active">章节6. 数值的扩展</router-link>
            <router-link class="nav-list-item" to="">章节7. 数组的扩展</router-link>
            <router-link class="nav-list-item" :to="{ path: '/es6/c8'}" active-class="active">章节8. 函数的扩展</router-link>
            <router-link class="nav-list-item" :to="{ path: '/es6/c9'}" active-class="active">章节9. 对象的扩展</router-link>
            <router-link class="nav-list-item" to="">章节10. Symbol</router-link>
            <router-link class="nav-list-item" to="">章节11. Symbol</router-link>
            <router-link class="nav-list-item" to="">章节12. Symbol</router-link>
            <router-link class="nav-list-item" to="">章节13. Symbol</router-link>
            <router-link class="nav-list-item" to="">章节14. Symbol</router-link>
            <router-link class="nav-list-item" to="">章节15. Symbol</router-link>
            <router-link class="nav-list-item" :to="{ path: '/es6/c16'}" active-class="active">章节16. Promise对象</router-link>
            <router-link class="nav-list-item" to="">异步操作和async函数</router-link>
            <router-link class="nav-list-item" to="">Class</router-link>
            <router-link class="nav-list-item" to="">修饰器</router-link>
            <router-link class="nav-list-item" to="">Module</router-link>
            <router-link class="nav-list-item" to="">编程风格</router-link>
            <router-link class="nav-list-item" to="">读懂ECMAScript规格</router-link>
            <router-link class="nav-list-item" to="">参考链接</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'es6',
  data () {
    return {
    }
  },
  components: {
  },
  methods: {
  }
}
</script>
