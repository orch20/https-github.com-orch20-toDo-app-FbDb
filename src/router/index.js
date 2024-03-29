import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'
import { useAuthStore } from '../stores/auth'

const router = createRouter({
  routes,
  history: createWebHashHistory(),
  linkActiveClass: 'active'
})

router.beforeEach(async (to) => {
  const store = useAuthStore()

  if (to.meta.auth && !store.isLoggedIn) {
    return {
      name: 'home',
      query: {
        redirect: to.fullPath
      }
    }
  } else if (to.meta.guest && store.isLoggedIn) {
    return {
      name: 'tasks'
    }
  }
})

export default router
