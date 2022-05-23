import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/piniaPersist'
createApp(App).use(router).use(store).mount('#app')
// import {createPinia} from 'pinia'
// createApp(App).use(router).use(createPinia()).mount('#app')
