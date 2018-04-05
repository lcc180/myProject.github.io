<template>
  <div class="template">
  	<!-- <h1>head-portrait</h1>
    <p>Wrap a series of buttons with <code class="highlighter-rouge">.btn</code> in <code class="highlighter-rouge">.btn-group</code>.</p>

    <div class="card">
      <div class="card-block">
        <div class="row text-center">
          <div class="col-md-6">
            <div class="head-portrait css3">
              <img src="~@/assets/images/css3.jpg" alt="">
            </div>
          </div>
          <div class="col-md-6">
            <div class="head-portrait">
              <img src="~@/assets/images/lcc.jpeg" alt="">
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
    </div><br> -->
    <div class="css-show-fluid">
      <h5 class="title">Navbar classic</h5>
      <div class="navbar-classic-container">
        <div class="navbar-classic container">
          <ul class="navbar-classic-item">
            <li class="navbar-classic-item-li logo">
              <img src="~@/assets/images/huaban/logo.png" alt="">
            </li>
            <li class="navbar-classic-item-li">
              <a href="">首页</a>
            </li>
            <li class="navbar-classic-item-li">
              <router-link to="/home" active-class="active">JC书城</router-link>
            </li>
            <li class="navbar-classic-item-li">
              <a href="">发现</a>
            </li>
            <li class="navbar-classic-item-li">
              <a href="">话题</a>
            </li>
            <li class="navbar-classic-item-li search">
              <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="text" placeholder="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form>
            </li>
          </ul>
          <ul class="navbar-classic-item">
            <li class="navbar-classic-item-li logo">
              <img src="~@/assets/images/huaban/logo.png" alt="">
            </li>
            <li class="navbar-classic-item-li">
              <a href="">首页</a>
            </li>
            <li class="navbar-classic-item-li">
              <a href="">发现</a>
            </li>
            <li class="navbar-classic-item-li">
              <a href="">话题</a>
            </li>
          </ul>
        </div>
      </div>
      <pre>
        <code>
          function Mode(id, parent) {
            this.id = id;
            this.exports = {};
            this.parent = parent;
            if (parent && parent.children) {
              parent.children.push(this);
            }

            this.filename = null;
            this.loaded = false;
            this.children = [];
          }
        </code>
      </pre>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'template',
  data () {
    return {
    }
  },
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
