import Util from 'util'

export function checkPhone (num) {
  let reg = /^1(3|4|5|7|8)\d{9}$/
  return reg.test(num)
}

export function checkImage (type) {
  let reg = /\.(jpg|jpeg|png|JPG|PNG)$/
  return reg.test(type)
}

export function checkNotEmpty(val) {
  if (typeof val === 'undefined' || val === null || val === '') {
    return false
  }
  return true
}

export function checkLogin () {
  if (!Util.getSg('token')) {
    return false
  }
  return true
}

export function isWeiXin() {
  let ua = window.navigator.userAgent.toLowerCase();

  if (ua.match(/MicroMessenger/i) == 'micromessenger') {
    return true;
  }
  return false;
}


