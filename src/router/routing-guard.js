import router from '@/router'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式
import Util from 'util'

let fromState = ''
router.beforeEach((to, from, next) => {
  if (to.path == '/login') {
    Util.removeSg('userid')
    Util.removeSg('userInfo')
    Util.removeSg('token')
  }
  fromState = from
  let token = Util.getSg('token')
  if (!token && (to.path == '/appMain/personalCenter')) {
      next({path: '/login'})
  } else {
    NProgress.start();
    next()
  }
  // NProgress.start();
  // next()
})

router.afterEach(transition => {
  console.log(fromState.path)
  if (fromState.path == '/login') {

  }
  NProgress.done();
})
