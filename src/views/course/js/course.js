import Util from 'util'
import Api from 'api'

export default {
  name: 'courseListPage',
  components: {},
  data() {
    return {
      results: [],
      pullup: true,
      page: 1
    }
  },

  beforeCreate() {

  },

  created() {

  },

  mounted: function () {
    this.addData()
  },
  methods: {

    addData () {
      let ary = []
      let page = this.page
      for (let i = 20 * (page - 1); i < 20 * page; i++) {
        ary.push('text' + i)
      }
      this.results = [...this.results, ...ary]
      this.page++
    },

    loadData () {
      setTimeout( () => {
        console.log('上拉加载...')
        this.addData()
      }, 1000)
    }
  }
}
