<template>
  <div class="container my-5">
  	<div class="row">
      <div class="col-md-12">
        <date-picker v-model="date" :first-day-of-week="1" not-before="2017-07-01" width="236"></date-picker>
        <div class="btn btn-primary float-right" @click="showBM">新增笔记</div>
      </div>

  		<div class="col-md-8 my-5">

        <div class="knowledge-container" v-for="item in knowldegeList">
          <h5 @click="removeKnowledges(item._id)">{{item.name}}</h5>
          <p>{{item.description}}</p>
          <div class="card my-3" v-for="usage in item.usage">
            <div class="card-block">{{usage.block}}</div>
            <div class="card-footer" v-html="usage.footer"><pre></pre>
            </div>
          </div>
          <p>{{item.summarize}}</p>
        </div>

        <!-- pagination -->
        <nav aria-label="Page navigation example">
          <ul class="pagination justify-content-end">
            <li class="page-item disabled">
              <a class="page-link" href="#" tabindex="-1">Previous</a>
            </li>
            <li class="page-item active"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item">
              <a class="page-link" href="#">Next</a>
            </li>
          </ul>
        </nav>
        <!-- <div class="knowledge-container">
          <h5>Mongoose Connections</h5>
          <p>Models是奇特的结构组合来自我们的Schema定义中，models的实例代表documents，它能够从我们的数据库中保存以及检索。通过使用models从我们的数据中创造及检索documents是非常轻而易举的。</p>
          <div class="card my-3">
            <div class="card-block">编译你的第一个model</div>
            <div class="card-footer">
              <pre>
                mongoose.connect('mongodb://localhost/myapp');
                
                var options = {
                  db: { native_parser: true },
                  server: { poolSize: 5 },
                  replset: { rs_name: 'myReplicaSetName' },
                  user: 'myUserName',
                  pass: 'myPassword'
                }
                mongoose.connect(uri, options);
              </pre>
            </div>
          </div>
          <p>第一个参数是model集合的名称，Mongoose会根据名字自动寻找复制版本。因此，对于上面的例子，在数据库中，Tank模型是为了tanks集合。<code>.model()</code>方法复制schema的一份模型，请确保你已经添加了你想要的属性在你调用.model()方法之前！</p>
        </div> -->
  		</div>
  	</div>

    <!-- 笔记 -->
    <bootstrap-modal name="新增笔记" ref="addnote" :saveModel="addnote">
      <form>
        <div class="form-group">
          <label for="formGroupExampleInput">标题</label>
          <input type="text" class="form-control" id="formGroupExampleInput" placeholder="">
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput2">内容/心得</label>
          <textarea class="form-control" id="formGroupExampleInput2" autocomplete="off"></textarea>
        </div>
      </form>
    </bootstrap-modal>

  </div>
</template>

<script>
export default {
  name: 'template',
  data () {
    return {
      knowldegeList: [],
      date: new Date()
    }
  },
  methods: {
    getKnowledgeList () {
      this.$http.get('knowledges/list').then(res => {
        this.knowldegeList = res.body.data
        console.log(this.knowldegeList)
      })
    },
    removeKnowledges (id) {
      this.$http.post('knowledges/removeKnowledges', {
        id
      }).then(res => {
        this.getKnowledgeList()
      })
    },
    addnote () {
      console.log(1)
    },
    showBM () {
      this.$refs.addnote.showModal()
    }
  },
  activated () {
    this.getKnowledgeList()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
