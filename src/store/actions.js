import Api from 'api'
import {SAVE_USERINFO} from './mutation-types'

export default {
  async getUserInfo({
    commit,
    state
  }, payload) {
    console.log(payload)
    let res = await Api.getUserInfo()
    commit(SAVE_USERINFO, res.data)
  }
}
