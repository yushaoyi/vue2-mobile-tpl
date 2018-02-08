<template>
  <section class="app-main">
    <div class="nav mt100" :class="{'is_login': isLogin}">
      <a v-for="(menu, index) in menuList" v-if="menu.show"
          :class="{'active': menu.activeList.indexOf(defaultActive) !== -1 }" :href="menu.href" >{{menu.title}}</a>
    </div>
    <router-view></router-view>
  </section>
</template>

<script>
  import Util from 'util'

  export default {
    name: 'app-main',
    data () {
      return {
        isLogin: false,
        menuList: [
          {
            href: '#/appMain/home',
            title: '首页',
            activeList: [
              '/appMain/home'
            ],
            show: true
          },
          {
            href: '#/appMain/course',
            title: '课程',
            activeList: [
              '/appMain/course',
              '/appMain/courseDetail/',
            ],
            show: true
          },
          {
            href: '#/appMain/teacher',
            title: '老师',
            activeList: [
              '/appMain/teacher',
              '/appMain/teacherDetail/'
            ],
            show: true
          },
          {
            href: '#/appMain/personalCenter',
            title: '个人中心',
            activeList: [
              '/appMain/personalCenter'
            ],
            show: null
          }
        ]
      }
    },
    created () {
      let flag = Util.checkLogin()
      this.isLogin = flag
      let obj = this.menuList[3]
      obj.show = flag
      this.$set(this.menuList, 3, obj)
    },

    computed: {
      defaultActive: function () {
//        return '#' + this.$route.path
//        return this.$route.path.replace('/', '');
        return this.$route.path.replace(/[0-9]*/g, '');
      }
    }
  }
</script>
