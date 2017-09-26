import Vue from 'vue'

Vue.transition('expand', {
  beforeEnter (el) {
    el.textContent = 'beforeEnter'
  }
})
