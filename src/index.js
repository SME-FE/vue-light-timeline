import Timeline from './core/Timeline.vue'

export default {
  install (Vue, options) {
    Vue.component('light-timeline', Timeline)
  }
}

export {
  Timeline
}
