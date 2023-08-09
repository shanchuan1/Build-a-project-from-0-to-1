import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.mount('#app')

// console.log(CONSTANT)
console.log(process.env.NODE_ENV)