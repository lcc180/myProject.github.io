<template>
  <div class="title-bar">
    <div class="title-bar-item" v-for="(item, index) in dataList" @click="toggleTitle(index)">
      {{item.name}}
    </div>
    <div class="title-bar-line" :style="{
      transform: 'translate3d(' + barLineX + ',0,0)',
      width: barLineWidth
    }"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  props: {
    dataList: {
      type: Array,
      default: []
    },
    titleBarIndex: {
      type: Number,
      default: 0
    }
  },
  methods: {
    toggleTitle (index) {
      this.$emit('update:titleBarIndex', index)
    }
  },
  computed: {
    barLineX () {
      return (this.titleBarIndex * 100) + '%'
    },
    barLineWidth () {
      return (1 / this.dataList.length * 100) + '%'
    }
  }
}
</script>
