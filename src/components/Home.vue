<template>
  <div>
    <div class="introduce-header">
      <h4>从人民群众中来，到人民群众中去</h4>
      
    </div>
    <div class="container main-view">
      <div class="row">
        <div class="col-md-10">
          <h5 class="title-tmall">
            最近更新 <small>FASHION & BEAUTY</small>
            <a class="right" href="">>> 更多</a>
          </h5>
          <div class="row">
            <div class="col-md-2 image-text">
              <img src="../assets/images/books/es6.jpeg" alt="">
              <h6>ES 6标准入门</h6>
            </div>
            <div class="col-md-2 image-text">
              <img src="../assets/images/books/javascript.jpg" alt="">
              <h6>JavaScript高级程序设计（第3版）</h6>
            </div>
            <div class="col-md-2 image-text">
              <img src="../assets/images/books/0to1.jpeg" alt="">
              <h6>从0到1</h6>
            </div>
            <div class="col-md-2 image-text">
              <img src="../assets/images/books/vue.jpeg" alt="">
              <h6>
                Vue.js权威指南
              </h6>
            </div>
            <div class="col-md-2 image-text">
              <img src="../assets/images/books/css.jpeg" alt="">
              <h6>精通CSS高级Web标准解决方案</h6>
            </div>
            <div class="col-md-2 image-text">
              <img src="../assets/images/books/node.jpeg" alt="">
              <h6><router-link :to="{ path: '/node'}">深入浅出nodejs</router-link></h6>
            </div>
          </div>
          <h5 class="title-tmall secondary mt-4">最近更新 <small>FASHION & BEAUTY</small></h5>
        </div>
        <div class="col-md-2">
          <h5 class="title-border"><i class="iconfont icon-selection"></i>人气排行</h5>
          <div class="image-text" @click="$router.push({
            path: '/bookDetail/1'
          })">
            <img src="../assets/images/books/javascript.jpg" alt="">
            <h6>JavaScript高级程序设计（第3版）</h6>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
import tabNav from '@/components/common/Tab'
import alert from '@/components/common/alert'
import btnGroup from '@/components/common/buttonGroup'

export default {
  name: 'home',
  data () {
    return {
      tabIndex: 0,
      tabList: [{
        name: '今日推荐',
        templateName: 'alert'
      }, {
        name: '传统菜式',
        templateName: 'btnGroup'
      }, {
        name: '品牌畅销',
        templateName: 'dropdowns'
      }]
    }
  },
  components: {
    tabNav: tabNav,
    alert: alert,
    btnGroup: btnGroup
  },
  methods: {
    incrementTotal (val) {
      this.tabIndex = val
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
