<!-- 
  使用方法:
  <tab-nav 
    :tab-list="tabList" 
    :tab-index.sync="tabIndex" 
    class="mt-5"
    style="overflow: hidden;"
    @:click.native="myclick"
  >
    <transition enter-active-class="animated slideInRight">
      <component :is="tabList[tabIndex].templateName"></component>
    </transition>
  </tab-nav>
 -->

<template>
  <div>
    <ul class="nav nav-tabs mb-4">
      <li class="nav-item" v-for="(item, $index) in tabList">
        <a 
          :class="['nav-link', {
            active: tabIndex == $index
          }]"
          @click="toggleTab($index)"
        >
          {{item.name}}
        </a>
      </li>
    </ul>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'tabNav',
  props: ['tabList', 'tabIndex'],
  data () {
    return {
    }
  },
  methods: {
    toggleTab (index) {
      this.$emit('update:tabIndex', index)
    }
  },
  created () {
    console.log()
  }
}
</script>

