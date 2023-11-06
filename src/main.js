import './assets/main.css'

import { createApp, markRaw } from 'vue/dist/vue.esm-bundler'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
import i18n from './i18n'

const app = createApp(App)

const pinia = createPinia()

pinia.use(({ store }) => {
  store.router = markRaw(router)
})

app.use(pinia)
app.use(router)
app.use(i18n)
app.mount('#app')
