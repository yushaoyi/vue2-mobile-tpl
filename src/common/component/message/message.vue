<template>
  <div class="notice">
    <div class="toast-mask"></div>
    <div class="toast-text">
      {{ content }}
    </div>
  </div>
</template>

<script>
  import { TOAST_DURATION } from '@/common/config'

  export default {
    name: 'message',
    data () {
      return {
        visible: false,
        content: '',
        duration: ''
      }
    },
    methods: {
      setTimer () {
        setTimeout( () => {
          this.close()
        }, this.duration ? this.duration : TOAST_DURATION)
      },
      close () {
        this.visible = false
        setTimeout( () => {
          this.$destroy(true)
          this.$el.parentNode.removeChild(this.$el)
        }, 500)
      }
    },
    mounted () {
      this.setTimer()
    }
  }
</script>
