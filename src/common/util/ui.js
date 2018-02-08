
import { TOAST_DURATION } from '../config'
import Vue from 'vue';

const vm = new Vue()

export function toast (msg, duration) {
  vm.$events.$emit('toast', {
    msg: msg,
    duration: duration
  })
}

export function toastInfo (msg, duration) {
  vm.$message(msg, duration)
}
