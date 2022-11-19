import ComponenteGlobal from '@/components/ComponenteGlobal.vue'
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.directive('focus2', {
  mounted(el) {
    console.log({ el })
    el.focus()
  }
})

app.component('cmp-global', ComponenteGlobal)

app.mount('#app')
