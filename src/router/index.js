import Vue from 'vue'
import VueRouter from 'vue-router'

const login = r => require.ensure([], () => r(require('../views/login/tpl/login.vue')), 'appMain')
const register = r => require.ensure([], () => r(require('../views/register/tpl/register.vue')), 'appMain')
const appMain = r => require.ensure([], () => r(require('../views/appMain.vue')), 'appMain')
const home = r => require.ensure([], () => r(require('../views/home/tpl/home.vue')), 'appMain')
const course = r => require.ensure([], () => r(require('../views/course/tpl/course.vue')), 'appMain')
const teacher = r => require.ensure([], () => r(require('../views/teacher/tpl/teacher.vue')), 'appMain')
const personalCenter = r => require.ensure([], () => r(require('../views/personalCenter/tpl/personalCenter.vue')), 'appMain')


Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: login
  },
  {
    path: '/register',
    component: register
  },
  {
    path: '/appMain',
    component: appMain,
    children: [
      {
        path: '',
        component: home,
        meta: []
      },
      // 首页
      {
        path: 'home',
        component: home,
        meta: []
      },
      // 课程列表
      {
        path: 'course',
        component: course,
        meta: []
      },
      // 老师列表
      {
        path: 'teacher',
        component: teacher,
        meta: []
      },
      // 个人中心
      {
        path: 'personalCenter',
        component: personalCenter,
        meta: []
      }
    ]
  },
  {
    path: '*',
    redirect: '/appMain/home'
  }
]

const router = new VueRouter({
  routes,
  // mode: 'history',
  strict: process.env.NODE_ENV !== 'production',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      if (from.meta.keepAlive) {
        from.meta.savedPosition = document.body.scrollTop;
      }
      return { x: 0, y: to.meta.savedPosition ||0}
    }
  }
})

export default router

