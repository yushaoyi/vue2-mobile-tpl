<template>
  <div id="app">
    <div v-if="showHeader" class="header">
      <div @click="backHome()" class="logo fl">
        <img src="~imgDir/images/logo.png" alt="">
      </div>
      <button @click="avatarClickHandler()" class="header-btn f30 fr">
        <i v-if="!userInfo" class="icon_user"></i>{{userInfo ? 'Hi,'+ (userInfo.name != null && userInfo.name.length > 5 ? (userInfo.name.substr(0, 5) + '...') : userInfo.name) : ''}}
      </button>
    </div>
    <router-view/>
    <toast-tip :toast-text="toastText" :toast-duration=toastDuration :show-toast="showToast" @callback="callback"></toast-tip>
  </div>
</template>

<script>
import Util from 'util'
import Api from 'api'
import toastTip from '@/common/component/toastTip'
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'

export default {
  name: 'app',
  data () {
    return {
//      userInfo: null,
      showToast: false,
      toastText: '',
      toastDuration: null
    }
  },

  methods: {
    ...mapActions([
      'getUserInfo'
    ]),
    ...mapMutations([
      'SAVE_USERINFO'
    ]),
    callback: function (data) {
      this.showToast = data
      this.toastDuration = 0
    },

    // 点击右上角头像-判断是否进入个人中心/appMain/personalCenter
    avatarClickHandler () {
      if (Util.checkLogin()) {
        this.$router.push({path: '/appMain/personalCenter'})
      } else {
        this.$router.push({path: '/login'})
      }
    },
    // 点击左上角头像，返回首页
    backHome () {
      this.$router.replace({path: '/appMain/home'})
    }
  },

  mounted () {
    let obj = Util.getSgObj('userInfo')
    if (obj) {
      this.SAVE_USERINFO(obj)
    }
    // 监听用户信息改变（登录成功）
    this.$events.$on('loginSuccess', eventData => {
      let id = eventData
      this.getUserInfo(id)
    })
    // 全局toast
    this.$events.$on('toast', eventData => {
      if (eventData) {
        this.toastText =  eventData.msg
        this.toastDuration =  eventData.duration
        this.showToast = true
      }
    })
  },

  beforeDestroy: function () {
    this.$events.$off('userInfo')
  },
  computed: {
    showHeader: function () {
      return this.$route.path != '/login' && this.$route.path != '/register'
//        return this.$route.path.replace('/', '');
    },
    ...mapState([
      'userInfo'
    ])
  },
  components: {
    toastTip
  }
}
</script>


<style lang="scss">
  @import './styles/common';
</style>
