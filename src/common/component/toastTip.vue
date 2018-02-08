<template>
  <div v-if="showToast">
    <div class="toast-mask"></div>
    <div class="toast-text">
      <p>{{toastText}}</p>
    </div>
  </div>
</template>

<script>
  // todo 待优化调用方式 通过js直接调用tip,而不是通过组件的形式
  import {TOAST_DURATION} from '@/common/config'

  export default {
    name: 'toastTip',
    props: {
      toastDuration: {
        type: Number,
        default: 0
      },
      toastText: {
        type: String,
        default: ''
      },
      showToast: {
        type: Boolean,
        default: false
      }
    },

    data() {
      return {
        timer: null,
      }
    },

    mounted() {

    },

    watch: {

      toastText: function (newVal, oldVal) {
        if (newVal != oldVal) {
          this.showTip()
        }
      },

      showToast: function (val) {
        if (val) {
          this.showTip()
        }
      }
    },

    methods: {

      showTip() {
//        if (!this.showToast) {
//          return
//        }
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          this.$emit('callback', false)
        }, this.toastDuration ? this.toastDuration : TOAST_DURATION)
      }

    }
  }
</script>

<style lang="scss" scoped>

</style>
