import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import {router as r} from './router'

createApp(App).use(router).mount('#app')
