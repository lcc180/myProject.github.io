<template>
  <div class="css-group">
    
    <div class="container">
      <div class="row-separation">
        <div class="col-3 row-separation-item">
          <div class="mb-1">
            <a href="">头像</a>
            <a href="">导航栏</a>
            <a href="">导航栏</a>
            <a href="">导航栏</a>
          </div>
          <div class="mb-1">
            <a href="">面包屑</a>
            <a href="">导航栏</a>
          </div>
          <div class="">
            <a href="">面包屑</a>
            <a href="">导航栏</a>
          </div>
        </div>
        <div class="col-3 row-separation-item">
          <div class="mb-1">
            <a href="">模块</a>
          </div>
        </div>
        <div class="col-3 row-separation-item">3</div>
        <div class="col-3 row-separation-item">4</div>
      </div>
    </div>

    <transition enter-active-class="animated fadeIn">
      <router-view></router-view>
    </transition>
    <!-- <div class="cesd">
      <div class="container">
        <div class="row">
          <div class="col-md-9">
            
          </div>
          <div class="col-md-3">
            <div class="input-group mb-1">
              <input type="text" class="form-control" placeholder="Search for...">
              <span class="input-group-btn">
                <button class="btn btn-secondary" type="button">
                  <i class="iconfont icon-search"></i>
                </button>
              </span>
            </div><br>
            <ul class="nav-sidebar">
              <li><a href="">head-portrait</a></li>
              <li class="active"><a href="">侧边栏</a></li>
              <li><a href="">面包屑</a></li>
              <li><a href="">导航栏</a></li>
              <li><a href="">导航栏</a></li>
            </ul>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import tabNav from '@/components/common/Tab'
import alert from '@/components/common/alert'
import btnGroup from '@/components/common/buttonGroup'
import titleBar from '@/components/common/titleBar'

export default {
  name: 'cssGroup',
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
      }],
      titleBarList: [{
        name: '藏经阁'
      }, {
        name: '慈云阁'
      }, {
        name: '麒麟阁'
      }, {
        name: '天运阁'
      }],
      barIndex: 0
    }
  },
  components: {
    tabNav: tabNav,
    alert: alert,
    btnGroup: btnGroup,
    titleBar
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
