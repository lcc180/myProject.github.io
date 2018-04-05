<template>
  <div>
    <div class="container">
      <div class="row my-5">

        <div class="col-md-4">
          <div class="resume-img" @click="replaceImage">
            <img id="lcc" src="~@/assets/images/huaban/helper.jpeg" alt="" class="img-fluid">
            <div class="resume-img-border left"></div>
            <div class="resume-img-border right"></div>
          </div>
          <div class="text-center my-3">
            <div class="btn btn-primary" @click="getCanvas">确定</div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="resume-img" @click="replaceImage" id="ccc">
            <div class="resume-img-border left"></div>
            <div class="resume-img-border right"></div>
          </div>
          <div class="text-center my-3">
            <div class="btn btn-primary" @click="getCanvas">确定</div>
          </div>
        </div>

      <!-- row -->
      </div>
    <!-- container -->
    </div>

    <div class="navbar-classic-container">
      <div class="navbar-classic container">
        <ul class="navbar-classic-item">
          <li class="logo">
            <img src="~@/assets/images/huaban/logo.png" alt="">
          </li>
          <li>
            <a href="">首页</a>
          </li>
          <li>
            <a href="">发现</a>
          </li>
          <li>
            <a href="">话题</a>
          </li>
          <li>
            <form class="form-inline my-2 my-lg-0">
              <input class="form-control mr-sm-2" type="text" placeholder="Search">
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </li>
        </ul>
        <ul class="navbar-classic-item">
          <li class="logo">
            <img src="~@/assets/images/huaban/logo.png" alt="">
          </li>
          <li>
            <a href="">首页</a>
          </li>
          <li>
            <a href="">发现</a>
          </li>
          <li>
            <a href="">话题</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import 'cropper'
import store from 'store'
import { mapMutations } from 'vuex'
export default {
  name: 'template',
  data () {
    return {
      imageSrc: '',
      html: ''
    }
  },
  computed: {},
  methods: {
    ...mapMutations(['updateUserInfoSingle']),
    replaceImage () {
      this.$nextTick(function () {
        $('#lcc').cropper({
          aspectRatio: 1 / 1,
          crop (event) {
          }
        })
      })
    },
    getCanvas () {
      let that = this
      this.html = $('#lcc').cropper('getCroppedCanvas')
      $('#ccc').prepend(this.html)
      store.set('userInfo', {
        portrait: that.html.toDataURL()
      })
      that.updateUserInfoSingle({
        type: 'updateUserInfoSingle',
        key: 'portrait',
        value: that.html.toDataURL()
      })
    }
  },
  activated () {
    console.log(mapMutations(['updateUserInfoSingle']))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
