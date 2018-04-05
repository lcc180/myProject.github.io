<template>
  <svg class="icon" :class="icon" aria-hidden="true">
    <use :xlink:href="'#' + icon"></use>
</svg>
</template>

<script>
export default {
  name: 'template',
  data () {
    return {
    }
  },
  props: ['icon'],
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
