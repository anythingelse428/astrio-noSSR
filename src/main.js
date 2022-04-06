import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueLazyload from 'vue-lazyload'

createApp(App).use(router).use(VueLazyload).mount('#app')
