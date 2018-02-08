import axios from 'axios'
import qs from 'qs'
import {HTTP_SUCCESS_CODE, HTTP_TIMEOUT, SERVER_URL} from '../config'
import Util from 'util'
import router from '@/router'

axios.defaults.timeout = HTTP_TIMEOUT
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
axios.defaults.baseURL = SERVER_URL
// axios.defaults.withCredentials = true // set cookie


axios.interceptors.request.use((config) => {
  let token = Util.getSg('token')
  config.headers['token'] = token
  if (config.headers['is-mutile-data']) {
    delete config.headers['is-mutile-data']
  } else {
    // config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
    if (config.method === 'post' || config.method === 'put') {
      config.data = qs.stringify(config.data)
    }
  }
  return config
}, (err) => {
  return Promise.reject(err) // 错误传参
})

axios.interceptors.response.use((res) => {
  if (res.status !== 200) { // res status检查
    checkStatus(res)
    return Promise.reject(res)
  }
  let status = res.data ? res.data.status : {}
  console.log(res)
  if (status && status.code !== HTTP_SUCCESS_CODE) { // 业务错误处理

    // UI.toastError(status.message)
    return Promise.reject(res)
  }
  return res // 返回正常结果
}, (err) => {
  console.log(err)
  if (err.response) {
    checkStatus(err.response)
  } else {
    if (err.code === 'ECONNABORTED') {

    } else {

    }
  }
  return Promise.reject(err) // 网络异常
})

function checkStatus (res) {
  console.log(res)
  let status = res.status
  switch (status) {
    case 401: // 登录无权限 跳转登录
      Util.toast('登录口令超时，请重新登录~', 3500)
      setTimeout(() => {
        router.push({path: '/login'})
      }, 1000)
      break
    case 403: // 拒绝访问
      break
    case 404: // 请求地址出错
      break
    case 500: // 服务器内部错误
      // Util.toastError('网络错误，请稍后再试~')
      break
    case 502: // 网关错误
      // Util.toastError('网络错误，请稍后再试~')
      break
    case 504: // 网关超时
      break
    default:
      break
  }
}
/**
 * @param url
 * @param params
 * @returns {Promise}
 */
export function post (url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
    .then(response => {
    resolve(response.data)
}, err => {
    reject(err)
  })
})
}

export function get (url, params) {
  url = Util.parseGetParams(url, params)
  return new Promise((resolve, reject) => {
    axios.get(url)
    .then(response => {
    resolve(response.data)
}, err => {
    reject(err)
  })
})
}

export function put (url, data) {
  return new Promise((resolve, reject) => {
    axios.put(url, data)
    .then(response => {
    resolve(response.data)
}, err => {
    reject(err)
  })
})
}

export function postForm (url, data) {
  return new Promise((resolve, reject) => {
    axios.post(url, data, {
    headers: {
      'is-mutile-data': 1,
      'Content-Type': 'multipart/form-data'
    }
  })
    .then(response => {
    resolve(response.data)
}, err => {
    reject(err)
  })
})
}





