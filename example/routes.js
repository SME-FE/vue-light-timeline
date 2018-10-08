import Index from './components/Index.vue'
import Slot from './components/Slot.vue'
import Closed from './components/Closed.vue'

export default [
  {
    path: '/',
    component: Index
  },
  {
    path: '/slot',
    component: Slot
  },
  {
    path: '/closed',
    component: Closed
  }
]
