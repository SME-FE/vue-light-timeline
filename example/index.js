import Vue from 'vue'
import VueRouter from 'vue-router'
import LightTimeline from '@/index.js'

import App from './components/App.vue'
import routes from './routes'

import './normalize.css'

Vue.use(VueRouter)
Vue.use(LightTimeline)

const router = new VueRouter({
  routes
})

export default new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
