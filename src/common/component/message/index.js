import Vue from 'vue'
/**
 * 使用方式
 * 1. 挂载在Vue的prototype上 Vue.use(Message)
 * 2. js调用 this.$message(content, duration)
 */

const MessageConstructor = Vue.extend(require('./message.vue').default)

let mId = 1

const Message = (content, duration) => {
  let id = 'message-' + mId++

  const MessageInstance = new MessageConstructor({
    data: {
      content: content,
      duration: duration
    }
  })

  MessageInstance.id = id
  MessageInstance.vm = MessageInstance.$mount() // 挂载但是并未插入dom，是一个完整的Vue实例
  document.body.appendChild(MessageInstance.vm.$el) // 将dom插入body
  MessageInstance.vm.visible = true
  MessageInstance.dom = MessageInstance.vm.$el

  MessageInstance.dom.style.zIndex = mId + 1001
  return MessageInstance.vm
}

export default {
  install: Vue => {
    Vue.prototype.$message = Message
  }
}
