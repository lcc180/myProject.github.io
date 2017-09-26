<template>
  <div>
    <div class="container">
      <ol class="breadcrumb mt-3">
        <li class="breadcrumb-item"><a href="#">计算机网络</a></li>
        <li class="breadcrumb-item"><a href="#">前端开发</a></li>
        <li class="breadcrumb-item active">JavaScript高级程序设计</li>
      </ol>
      <div class="row mb-5">
        <div class="col-md-4 book-detail">
          <img src="../assets/images/books/javascript.jpg" alt="">
        </div>
        <div class="col-md-8 book-detail-right">
          <h5>JavaScript高级程序设计（第3版）</h5>
          <p>作者：Nicholas C.Zakas</p>
          <div class="card">
            <div class="card-header">
              本书一共分为四篇，涵盖了JavaScript语言应用的绝大多数方面，从基本概念到具体实践、从抽象的算法到具体的页面特效、从最简单的输入输出到最新的XML技术都进行了详细的阐述，并对每一个具体知识点都进行了详细的实例讲解。
            </div>
          </div>
          <div class="text-right">
            <a class="btn btn-secondary" href="javascript:void(0)">加入书架</a>
            <router-link to="/es6/c3" class="btn btn-primary">开始阅读</router-link>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <ul class="nav nav-tabs">
            <li class="nav-item">
              <a class="nav-link active" href="#">Active</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">Disabled</a>
            </li>
          </ul><br>
          <h1>h1 heading</h1>
          <p>Curabitur blandit tempus porttitor. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bookDetail',
  data () {
    return {
      islogin: true
    }
  },
  components: {
  },
  methods: {
  },
  created () {
  }
}
</script>
