<template>
  <div>
    <div class="swiper-container" id="topSwiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
      </div>
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
              <img src="~@/assets/images/books/es6.jpeg" alt="">
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
              <transition enter-active-class="animated bounce">
                <img src="../assets/images/books/css.jpeg" alt="" v-if="show">
              </transition>
              <h6 @click="show = !show">精通CSS高级Web标准解决方案</h6>
            </div>
            <div class="col-md-2 image-text" @click="removeOneCatalogue">
              <img src="../assets/images/books/node.jpeg" alt="">
              <h6><router-link :to="{ path: '/node'}">深入浅出nodejs</router-link></h6>
            </div>
          </div>
        
          <tab-nav 
            :tab-list="tabList" 
            :tab-index.sync="tabIndex" 
            class="mt-5"
            style="overflow: hidden;"
            @:click.native="myclick"
          >
            <transition enter-active-class="animated slideInRight">
              <component :is="tabList[tabIndex].templateName"></component>
            </transition>
          </tab-nav>

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

    <!-- <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group row mb-0">
            <label class="col-sm-2 col-form-label">姓名</label>
            <div class="col-sm-10">
              <p class="form-control-static">{{data.name}}</p>
            </div>
          </div>
          <div class="form-group row mb-0">
            <label class="col-sm-2 col-form-label">手机</label>
            <div class="col-sm-10">
              <p class="form-control-static">{{data.mobile}}</p>
            </div>
          </div>
          <div class="form-group row mb-0">
            <label class="col-sm-2 col-form-label">性别</label>
            <div class="col-sm-10">
              <p class="form-control-static">{{data.sex === 'male' ? '男' : '女'}}</p>
            </div>
          </div>
          <div class="form-group row mb-0">
            <label class="col-sm-2 col-form-label">生日</label>
            <div class="col-sm-10">
              <p class="form-control-static">{{data.birth}}</p>
            </div>
          </div>
          <div class="form-group row mb-0">
            <label class="col-sm-2 col-form-label">余额</label>
            <div class="col-sm-10">
              <p class="form-control-static">{{$store.getters.balance}}</p>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="lcctest">
            
          </div>
          <div class="layout layout-5">
            <div class="layout-item" v-for="image in imageList" v-show="image.src">
              <img :src="image.src" alt="">
            </div>
          </div>
        </div>
      </div>
    </div> -->

  </div>
</template>

<script>
import tabNav from '@/components/common/Tab'
import alert from '@/components/common/alert'
import btnGroup from '@/components/common/buttonGroup'
import store from 'store'
import Swiper from 'swiper'

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
      }],
      imageList: [{
        url: 'https://avatars2.githubusercontent.com/u/321013?v=3&s=40'
      }, {
        url: 'https://avatars3.githubusercontent.com/u/14342431?v=3&s=40'
      }],
      man: {
        name: 'lcc'
      },
      show: true,
      swiper: null
    }
  },
  components: {
    tabNav: tabNav,
    alert: alert,
    btnGroup: btnGroup
  },
  computed: {
    data () {
      return this.$store.state.userInfo
    }
  },
  created () {
    this.$store.commit('updateUserInfo', {
      name: '李靜蔓',
      mobile: '15944528112',
      sex: 'femail',
      birth: '1993-08-14',
      balance: 10
    })
    // this.getImage()
    console.log(store, $)
    // this.getUserList()
  },
  methods: {
    beforeEnter (el) {
      el.style.opacity = 0
      el.style.transformOrigin = 'left'
    },
    enter (el, done) {
      Velocity(el, { opacity: 1, fontSize: '1.4em' }, { duration: 300 })
      Velocity(el, { fontSize: '1em' }, { complete: done })
    },
    leave: function (el, done) {
      Velocity(el, { translateX: '15px', rotateZ: '50deg' }, { duration: 600 })
      Velocity(el, { rotateZ: '100deg' }, { loop: 2 })
      Velocity(el, {
        rotateZ: '45deg',
        translateY: '30px',
        translateX: '30px',
        opacity: 0
      }, { complete: done })
    },
    myclick () {},
    map () {},
    addCalalogue () {
      this.$http.post('books/addCatalogues', {
        id: '59c6566b47ed832301418c0e',
        name: '第三章 异步I/O',
        pageNumber: '47'
      })
    },
    removeOneCatalogue () {
      this.$http.post('books/removeCatalogueById', {
        bookId: '59c6566b47ed832301418c0e',
        id: '59c678dad13b1a279c7f2a18'
      })
    },
    getImage () {
      let that = this
      let [name, url] = new Set(['lcc', 'baidu.com'])
      let { color, size } = {
        color: 'blue',
        size: 'normal'
      }
      let {
        x,
        y: [{ y }]
      } = {
        x: '代码x',
        y: [{y: '代码y'}]
      }

      this.imageList.forEach((item, index) => {
        preloadImage(item.url).then((url) => {
          that.imageList.splice(index, 1, {
            src: url
          })
        })
      })
      console.log(name, url, color, size, x, y, bigThan90({birth: 2000}))
    },
    getUserList () {
      this.$http.get('books/list', {
        'guid': '123'
      }).then(res => {
        console.log(res.data)
      })
    }
  },
  activated () {
    let that = this
    this.$nextTick(() => {
      that.swiper = new Swiper('.swiper-container', {
        autoplay: true
      })
      console.log(that.swiper.init())
    })
  }
}

function preloadImage (url) {
  return new Promise((resolve, reject) => {
    let image = new Image()
    image.onload = resolve(url)
    image.onerror = reject
    image.src = url
  })
}

function bigThan90 ({birth = 1990}) {
  return (_.now(new Date(birth)))
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
