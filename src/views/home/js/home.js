import '@/lib/swiper/swiper.min.css'
import {Swiper} from '@/lib/swiper/swiper.min.js'
import Util from 'util'
import Api from 'api'
import { mapGetters } from 'vuex'

export default {
  name: 'homePage',

  beforeCreate() {

  },
  components: {

  },

  computed: {
    ...mapGetters([
      'userInfo'
    ])
  },

  data () {
    return {

    }
  },

  created () {

  },

  mounted () {
    new Swiper('.swiper-container1', {
      pagination: {
        el: '.swiper-pagination',
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      loop: true
    });

    console.log(this.userInfo)
  },

  methods: {

  }
}
