// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App'
import router from './router'
import store from '@/store/index.js'
import '@/router/routing-guard'
import VueEvents from 'vue-events'
import Filter from '@/common/filters.js'
import './lib/flexible/flexible_css.debug'
import './lib/flexible/flexible.debug'
import Message from '@/common/component/message'
import Scroll from '@/common/component/scroll'


Vue.use(VueEvents)

Vue.use(Message)

Vue.use(Scroll)

Filter()

if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function() {
    FastClick.attach(document.body);
  }, false);
}


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
