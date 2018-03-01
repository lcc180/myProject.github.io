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
          <div class="btn btn-block btn-primary mt-3" @click="showBM">新增目录</div>
        </div>
      </div>
    </div>
    
    <!-- 新增目录弹窗 -->
    <bootstrap-modal name="新增目录" ref="addCatalogueModal" :saveModel="addCatalogues">
      <form>
        <div class="form-group">
          <label for="catalogue-name" class="form-control-label">名称:</label>
          <input type="text" class="form-control" id="catalogue-name" ref="inputName" v-model="catalogueName">
        </div>
        <div class="form-group">
          <label for="message-text" class="form-control-label">页码:</label>
          <input type="text" id="message-text" class="form-control" v-model="catalogueNumber" @keyup.enter="addCatalogues">
        </div>
      </form>
    </bootstrap-modal>

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
        number: this.catalogueNumber,
        cc: {
          name: 'bb'
        }
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
    showBM () {
      this.$refs.addCatalogueModal.showModal()
    },
    hideModal () {
      this.$refs.addCatalogueModal.hideModal()
      this.catalogueName = ''
      this.catalogueNumber = ''
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
