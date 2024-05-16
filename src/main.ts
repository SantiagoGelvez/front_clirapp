//import './assets/main.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import axiosInstance from './plugins/axios'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.provide('axiosRequest', axiosInstance)

app.mount('#app')
