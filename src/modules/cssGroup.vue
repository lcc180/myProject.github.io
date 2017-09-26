<template>
  <div>
    <div class="introduce-header">
      <!-- <h4>前端开发工程师</h4> -->
      <div class="head-portrait animated jello css3">
        <img src="../assets/images/css3.jpg" alt="">
      </div>
    </div>

    <div class="cesd">
      <div class="container">
        <div class="row">
          <div class="col-md-9">
            <h1>head-portrait</h1>
            <p>Wrap a series of buttons with <code class="highlighter-rouge">.btn</code> in <code class="highlighter-rouge">.btn-group</code>.</p>

            <div class="card">
              <div class="card-block">
                <div class="row text-center">
                  <div class="col-md-6">
                    <div class="head-portrait css3">
                      <img src="../assets/images/css3.jpg" alt="">
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="head-portrait">
                      <img src="../assets/images/lcc.jpeg" alt="">
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-footer text-muted">
                <pre>
    &lt;div class="head-portrait css3"&gt;
      &lt;img src="**.**" alt=""&gt;
    &lt;/div&gt;
                </pre>
              </div>
            </div>

            <br><br>
            <h1>title-nav</h1>
            <p>Wrap a series of buttons with <code class="highlighter-rouge">.btn</code> in <code class="highlighter-rouge">.btn-group</code>.</p>
            <div class="card">
              <div class="card-block">
                <div class="text-center">
                  <title-bar :dataList="titleBarList" :titleBarIndex.sync="barIndex"></title-bar>
                </div>
                <br><br>
                <div class="alert alert-success" role="alert" v-show="barIndex === 0">
                  <strong>Well done!</strong> You successfully read this important alert message.
                </div>
                <div class="alert alert-danger" role="alert" v-show="barIndex === 1">
                  <strong>Well done!</strong> You successfully read this important alert message.
                </div>
                <div class="alert alert-warning" role="alert" v-show="barIndex === 2">
                  <strong>Well done!</strong> You successfully read this important alert message.
                </div>
                <div class="alert alert-info" role="alert" v-show="barIndex === 3">
                  <strong>Well done!</strong> You successfully read this important alert message.
                </div>
              </div>
              <div class="card-footer text-muted">

              </div>
            </div><br>
          </div>
          <div class="col-md-3">
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Search for...">
              <span class="input-group-btn">
                <button class="btn btn-secondary" type="button">
                  <i class="iconfont icon-search"></i>
                </button>
              </span>
            </div><br>
            <h6>head-portrait</h6>
            <ul>
              <li>head-portrait</li>
              <li>head-portrait</li>
            </ul>
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
