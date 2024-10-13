// import './assets/main.css'

import { createApp } from 'vue'
import store from "./store.js"
import App from './App.vue'


const app = createApp(App);
app.use(store)
app.mount("#app")

// createApp(App).mount('#app')
