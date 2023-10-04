import HomePage from '../pages/HomePage.vue'
import TaskPage from '../pages/TaskPage.vue'
import LoginPage from '../pages/LoginPage.vue'
import RegisterPage from '../pages/RegisterPage.vue'
import LogoutPage from '../pages/LogoutPage.vue'
import SummaryPage from '../pages/SummaryPage.vue'
import AboutPage from '../pages/AboutPage.vue'
import FaqPage from '../pages/FaqPage.vue'
import PolicyPage from '../pages/PolicyPage.vue'
import NotFoundPage from '../pages/errors/NotFoundErrorPage.vue'

const routes = [
  {
    path: '/',
    component: HomePage,
    name: 'home'
  },
  {
    path: '/tasks',
    component: TaskPage,
    name: 'tasks',
    meta: {
      auth: true
    }
  },
  {
    path: '/login',
    component: LoginPage,
    name: 'login',
    meta: {
      guest: true
    }
  },
  {
    path: '/register',
    component: RegisterPage,
    name: 'register',
    meta: {
      guest: true
    }
  },
  {
    path: '/logout',
    component: LogoutPage,
    name: 'logout'
  },
  {
    path: '/summary',
    component: SummaryPage,
    name: 'summary',
    meta: {
      auth: true
    }
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFoundPage,
    name: 'notFound'
  },
  {
    path: '/about',
    component: AboutPage,
    name: 'about'
  },
  {
    path: '/faq',
    component: FaqPage,
    name: 'faq'
  },
  {
    path: '/policy',
    component: PolicyPage,
    name: 'policy'
  }
]

export default routes
