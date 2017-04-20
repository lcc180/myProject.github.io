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
                <code>
                  {
                    someName: 'lcc&lsj'
                  }
                </code>
              </div>
            </div><br>
            <h1>head-portrait</h1>
            <p>Wrap a series of buttons with <code class="highlighter-rouge">.btn</code> in <code class="highlighter-rouge">.btn-group</code>.</p><br>
          </div>
          <div class="col-md-3">
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Search for...">
              <span class="input-group-btn">
                <button class="btn btn-secondary" type="button">Go!</button>
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
