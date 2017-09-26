<template>
  <div class="view-catalogue">

    <div class="container py-5">
      <div class="row">
        <div class="col-4">
          <ul class="list-group">
            <li class="list-group-item justify-content-between" v-for="item in bookList">
              {{item.name}}
              <span class="badge badge-default badge-pill" @click="removeCatalogueById(item._id)">X</span>
            </li>
          </ul>
          <div class="btn btn-block btn-primary mt-3" @click="showModal">新增目录</div>
        </div>
      </div>
    </div>
    
    <!-- 新增目录弹窗 -->
    <div class="modal fade" id="catalogueModal">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">新增目录</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label for="catalogue-name" class="form-control-label">名称:</label>
                <input type="text" class="form-control" id="recipient-name" v-model="catalogueName">
              </div>
              <div class="form-group">
                <label for="message-text" class="form-control-label">页码:</label>
                <textarea class="form-control" id="message-text" v-model="catalogueNumber"></textarea>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="hideModal">取消</button>
            <button type="button" class="btn btn-primary" @click="addCatalogues">保存</button>
          </div>
        </div>
      </div>
    </div>

  </div><!-- view-catalogue -->
  

</template>

<script>
import 'bootstrap'
export default {
  name: 'template',
  data () {
    return {
      bookList: [],
      catalogueName: '',
      catalogueNumber: ''
    }
  },
  methods: {
    getBook () {
      this.$http.get('books/list').then(res => {
        this.bookList = res.data[0].catalogues
      })
    },
    addCatalogues () {
      this.$http.post('books/addCatalogues', {
        bookId: '59c6566b47ed832301418c0e',
        name: this.catalogueName,
        number: this.catalogueNumber
      }).then((res) => {
        this.getBook()
        this.hideModal()
      })
    },
    removeCatalogueById (id) {
      this.$http.post('books/removeCatalogueById', {
        bookId: '59c6566b47ed832301418c0e',
        id
      }).then((res) => {
        this.getBook()
      })
    },
    showModal () {
      $('#catalogueModal').modal('show')
    },
    hideModal () {
      $('#catalogueModal').modal('hide')
    }
  },
  activated () {
    this.getBook()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
