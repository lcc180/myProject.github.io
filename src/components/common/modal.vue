<template>
  <div class="modal fade" ref="bootstrapModal">
    <div :class="['modal-dialog', {
      'modal-lg': lg
    }]" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{name}}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <slot></slot>
        </div>
        <div class="modal-footer" v-if="showFooter">
          <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="hideModal">取消</button>
          <button type="button" class="btn btn-primary" @click="saveModel">保存</button>
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
  methods: {
    hideModal () {
      let that = this
      $(that.$refs.bootstrapModal).modal('hide')
    },
    showModal () {
      let that = this
      $(that.$refs.bootstrapModal).modal('show')
    }
  },
  props: {
    name: {
      type: String
    },
    showFooter: {
      type: Boolean,
      default: true
    },
    saveModel: {
      type: Function,
      default: function () {}
    },
    show: {
      type: Boolean,
      default: false
    },
    lg: {
      type: Boolean,
      default: false
    }
  },
  watch: {
  },
  activated () {
    // let that = this
    // $(that.$refs.bootstrapModal).on('hidden.bs.modal', function (e) {})
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
