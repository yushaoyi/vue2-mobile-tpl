import Util from 'util'

let Api = {

  // --登录
  doLogin: function (params) {
    return Util.post('/api/user/login', params)
  },
  // 发送注册验证码
  sendMsg: function (data) {
    return Util.post('/api/sendsms/regist', data)
  },
  // 注册
  doRegister: function (data) {
    return Util.post('/api/user/registernew', data)
  },

  // 查询个人信息
  getUserInfo: function (id) {
    return Util.get('/api/user/current')
  },

  // 首页
  // 获取banner
  getBannerListInfo: function () {
    return Util.get('/api/adimages?status=1')
  }
}
export default Api
