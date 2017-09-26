<template>
  <div class="container my-5">
  	<div class="row">
  		<div class="col-md-8">
  			<h5>Mongoose Models</h5>
        <p>Models是奇特的结构组合来自我们的Schema定义中，models的实例代表documents，它能够从我们的数据库中保存以及检索。通过使用models从我们的数据中创造及检索documents是非常轻而易举的。</p>
        <div class="card">
          <div class="card-block">编译你的第一个model</div>
          <div class="card-footer">
            var schema = new mongoose.Schema({ name: 'string', size: 'string' });
            var Tank = mongoose.model('Tank', schema);
          </div>
        </div>
  		</div>
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
