import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import { useAuthStore } from '../stores/auth'

const router = createRouter({
  routes,
  history: createWebHistory(),
  linkActiveClass: 'active'
})

router.beforeEach(async (to) => {
  const store = useAuthStore()

  function checkLoggedIn() {
    return new Promise((resolve, reject) => {
      resolve(store.isLoggedIn)
    })
  }

  // Usage:
  checkLoggedIn().then((isLoggedIn) => {
    console.log(isLoggedIn)
  })

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
