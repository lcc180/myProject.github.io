<template>
  <div class="view-add-knowledge">

  	<div class="container py-5">
	  	<div class="row">
	  		<div class="col-12">
          {{date | formatDate('yyyy-MM-dd')}}
	  			<div class="btn btn-primary" @click="showBM">新增笔记</div>
	  		</div>
	  	</div>
	  </div>

		<bootstrap-modal name="新增笔记" :lg="true" ref="addknowLedgeModal" :saveModel="addKnowledges">
      <form>
      	<div class="form-group row">
		      <label for="knowledge-name" class="col-sm-2 col-form-label text-right">模块名称</label>
		      <div class="col-sm-4">
		        <date-picker v-model="date" :first-day-of-week="1" not-before="2017-07-01" width="236"></date-picker>
		      </div>
		    </div>
		    <div class="form-group row">
		      <label for="knowledge-name" class="col-sm-2 col-form-label text-right">模块名称</label>
		      <div class="col-sm-4">
		        <input type="text" class="form-control" id="knowledge-name" v-model="knowledgeName" placeholder="hello">
		      </div>
		    </div>
		    <div class="form-group row">
		    	<label for="knowledge-description" class="col-sm-2 col-form-label text-right">描述</label>
		      <div class="col-sm-9">
		        <textarea class="form-control" id="knowledge-description" v-model="knowledgeDescription"></textarea>
		      </div>
		    </div>
		    <div class="form-group row">
		      <label for="knowledge-usage" class="col-sm-2 col-form-label text-right">用法标题</label>
		      <div class="col-sm-4">
		        <input type="text" class="form-control" id="knowledge-usage" v-model="knowledgeUsageName">
		      </div>
		    </div>
		    <div class="form-group row">
		    	<label for="knowledge-usage-content" class="col-sm-2 col-form-label text-right">用法内容</label>
		      <div class="col-sm-9">
		        <textarea class="form-control" id="knowledge-usage-content" v-model="knowledgeUsageContent"></textarea>
		      </div>
		    </div>
		    <div class="form-group row">
		    	<label for="knowledge-summarize" class="col-sm-2 col-form-label text-right">总结</label>
		      <div class="col-sm-9">
		        <textarea class="form-control" id="knowledge-summarize" v-model="knowledgesummarize"></textarea>
		      </div>
		    </div>
		  </form>
    </bootstrap-modal>

  </div>
</template>

<script>
import swal from 'sweetalert'
export default {
  name: 'template',
  data () {
    return {
      date: new Date(),
      date2: '',
      knowledgeName: '',
      knowledgeDescription: '',
      knowledgeUsageName: '',
      knowledgeUsageContent: '',
      knowledgesummarize: ''
    }
  },
  methods: {
    showBM () {
      this.$refs.addknowLedgeModal.showModal()
    },
    addKnowledges () {
      this.$http.post('knowledges/addKnowledges', {
        name: this.knowledgeName,
        description: [this.knowledgeDescription, 2],
        usage: [{ block: this.knowledgeUsageName, footer: this.knowledgeUsageContent }],
        summarize: this.knowledgesummarize
      }).then((res) => {
        this.hideBM()
      })
    },
    hideBM () {
      this.$refs.addknowLedgeModal.hideModal()
    }
  },
  activated () {
  	swal({
  		title: '',
  		text: '保存成功',
  		icon: 'success',
  		button: false,
  		timer: 1500
  	})
  }
}
</script>

