import Util from 'util'
import Api from 'api'
import countDownBtn from '@/common/component/countDownBtn';

export default {
  name: 'registerPage',
  components: {
    countDownBtn
  },
  data() {

    return {
      fm: {
        nickname: '',
        password: '',
        confirm_password: '',
        number: '',
        code: 'AAAAAA',
        number_code: ''
        // grade: '高三',
        // subject: '数学'
      },
      isSubmit: false,
      startTimer: false,
      showServiceInfo: false,
      agreeCheck: true
    }
  },

  beforeCreate() {

  },

  created() {

  },

  mounted: function () {

  },
  methods: {

    toggleCheck: function () {
      this.agreeCheck = !this.agreeCheck
    },

    msgCallback: function () {
      this.startTimer = false
    },

    sendMsg: function () {
      let num = this.fm.number
      if (!Util.checkNotEmpty(num)) {
        Util.toast('请输入手机号')
        return
      }
      if (!Util.checkPhone(num)) {
        Util.toast('手机号格式不正确')
        return
      }
      this.startTimer = true
      Api.sendMsg({
        code: 'AAAAAA',
        number: num
      })
        .then((res) => {
        }, (err) => {
          Util.toast(err.data.status.message)
        })
    },

    register: function () {
      if (!this.agreeCheck) {
        Util.toast('请先阅读并同意服务条款~')
        return
      }
      if (!Util.checkNotEmpty(this.fm.number)) {
        Util.toast('手机号不能为空~')
        return
      }
      if (!Util.checkPhone(this.fm.number)) {
        Util.toast('手机号格式不正确~')
        return
      }
      if (!Util.checkNotEmpty(this.fm.number_code)) {
        Util.toast('验证码不能为空~')
        return
      }
      if (!Util.checkNotEmpty(this.fm.nickname)) {
        Util.toast('请输入学生姓名~')
        return
      }
      if (!Util.checkNotEmpty(this.fm.password)) {
        Util.toast('密码不能为空~')
        return
      }
      if (this.fm.password.length < 6) {
        Util.toast('密码不能少于6位~')
        return
      }
      if (this.fm.password.length > 30) {
        Util.toast('密码过长~')
        return
      }
      if (this.fm.password != this.fm.confirm_password) {
        Util.toast('两次输入密码不一致~')
        return
      }
      this.isSubmit = true
      let data = Object.assign({}, this.fm)
      console.log(data)
      Api.doRegister(data)
        .then((res) => {
        this.isSubmit = false
        Util.toast('恭喜你,注册成功！')
        this.$router.push({path: '/login'}) // todo 是否可直接跳转登录
      }, (err) => {
        this.isSubmit = false
        Util.toast(err.data.status.message)
      })
    }
  }
}
