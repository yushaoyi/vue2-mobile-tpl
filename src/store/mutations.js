import * as mutationTypes from './mutation-types'
import Util from 'util'

export default {
  [mutationTypes.SAVE_USERINFO](state, info) {
    state.userInfo = {...info}
    Util.setSgObj('userInfo', info)
    console.log(info)
  }
}
