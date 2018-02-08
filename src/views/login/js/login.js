import Util from 'util'
import Api from 'api'

export default {
  name: 'loginPage',
  components: {

  },
  data() {

    return {
      fm: {
        account: '',
        password: '',
        remember: false
      },
      isSubmit: false
    }
  },

  beforeCreate() {

  },

  created() {

  },

  mounted: function () {

  },
  methods: {
    login() {
      if (!Util.checkNotEmpty(this.fm.account)) {
        Util.toast('手机号不能为空~')
        return
      }
      if (!Util.checkPhone(this.fm.account)) {
        Util.toast('手机号格式不正确~')
        return
      }
      if (!Util.checkNotEmpty(this.fm.password)) {
        Util.toast('密码不能为空~')
        return
      }
      this.isSubmit = true
      let data = {
        account: this.fm.account,
        password: this.fm.password
      }
      Api.doLogin(data)
        .then((res) => {
          this.isSubmit = false
          Util.toast('登录成功！')
          let data = res.data
          Util.setSg('token', data.token)
          Util.setSg('userid', data.userid)
          if (data) {
            this.$events.$emit('loginSuccess', data.userid)
          }
          // Util.fun.setSgObj('userInfo', data)
          // if (data) {
          //   this.$events.$emit('userInfo', data)
          // }
          let backUrl = Util.getSg('backUrl')
          if (backUrl) {
            this.$router.replace({path: backUrl})
            Util.removeSg('backUrl')
            return
          }
          this.$router.replace({path: '/appMain/home'})
        }, (err) => {
          console.log(err)
          Util.toast(err.data.status.message)
        })
    }

  }
}
