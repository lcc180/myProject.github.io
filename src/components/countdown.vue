<!-- 
  用法:
  <countdown :time="countdownTime"></countdown> 
-->

<template>
  <div class="countdown-container">
  	<div class="countdown-item">{{hour < 10 ? 0 : ''}}{{hour}}</div> :
  	<div class="countdown-item">{{minute < 10 ? 0 : ''}}{{minute}}</div> :
  	<div class="countdown-item">{{second < 10 ? 0 : ''}}{{second}}</div>
  </div>
</template>

<script>
export default {
  name: 'countdown',
  data () {
    return {
      second: '--',
      minute: '--',
      hour: '--',
      timer: '0',
      int: null
    }
  },
  props: {
  	time: {
  		type: Number,
  		default: 0
  	}
  },
  watch: {
    time () {
      this.initTime()
    }
  },
  methods: {
    getTime () {
      this.second = this.timer % 60
      this.minute = parseInt(this.timer % 3600 / 60)
      this.hour = parseInt(this.timer / 3600)
    },
    initTime () {
      let that = this
      clearInterval(that.int)
      that.int = setInterval(function () {
        if (that.timer === 0) return
        that.timer = that.timer - 1
        that.getTime()
      }, 1000)
      that.timer = that.time
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
