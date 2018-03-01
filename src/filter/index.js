import Vue from 'vue'
import helper from '@/assets/js/helper'
import $ from 'jquery'

Vue.filter('formatDate', function (date, format) {
  // 返回处理后的值
  if ($.trim(date) === '') {
    return ''
  }
  return helper.formatDate(new Date(date), format)
})
