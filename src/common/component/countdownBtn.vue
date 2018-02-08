<template>
  <button @click="btnClickHandler()" type="button">
    <slot>
      {{content}}
    </slot>
  </button>
</template>
<script>
  export default {
    name: 'countDownBtn',
    data() {
      return {
        content: '',
        timer: ''
      }
    },
    props: {
      endTime: {
        type: String,
        default: '60'
      },
      text: {
        type: String,
        default: '获取验证码'
      },
      callback: {
        type: Function,
        default: ''
      },
      start: {
        type: Boolean,
        default: ''
      }
    },
    watch: {
      start: function (val) {
        console.log(val)
        if (val) {
          this.countdown(this.endTime)
        }
      }
    },
    created () {
      this.content = this.text
    },

    mounted () {

    },
    methods: {

      btnClickHandler (evt) {
        if (this.start) {
          return
        }
        this.$emit('click', evt);
      },

      countdown (timestamp) {
        if (typeof timestamp === 'undefined' || timestamp === null) {
          return
        }
        timestamp = parseInt(timestamp)
        let self = this;
        self.timer = setInterval(function () {

          if (timestamp > 0) {
            timestamp = timestamp - 1;
            self.content = timestamp + ' s 重发'
          } else {
            clearInterval(self.timer);
            self.content = self.text;
            self._callback();
          }
        }, 1000);
      },
      _callback () {
        if (this.callback && this.callback instanceof Function) {
          this.callback(...this);
        }
      }
    },
    beforeDestroy () {
      if (self.timer) {
        clearInterval(self.timer);
      }
    }
  }
</script>
