import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueCookies from 'vue3-cookies'

const app = createApp(App)
app.use(VueCookies);
app.use(router)
router.app = app
app.mount('#app')

// createApp(App).use(router).mount('#app')



