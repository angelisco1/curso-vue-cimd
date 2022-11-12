import ComponenteGlobal from '@/components/ComponenteGlobal.vue'
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.component('cmp-global', ComponenteGlobal)

app.mount('#app')
