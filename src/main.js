import './assets/main.css'

import { createApp } from 'vue'
import Vuesax from 'vuesax3'
import 'vuesax3/dist/vuesax.css'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './registerServiceWorker'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Vuesax,{
    theme:{
        colors:{
            primary:'#A4BC92',
            secondary:'#B3C99C',
            tertiary:'#C7E9B0',
            final:'#DDFFBB',
            dark:'rgb(36, 33, 69)'
        }
    }
})

app.mount('#app')
