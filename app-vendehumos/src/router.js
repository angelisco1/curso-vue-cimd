import EditarVendehumo from '@/pages/EditarVendehumo.vue'
import NuevoVendehumo from '@/pages/NuevoVendehumo.vue'
import Vendehumos from '@/pages/Vendehumos.vue'
import { createRouter, createWebHistory } from 'vue-router'

const rutas = [
  { path: '/', component: Vendehumos },
  { path: '/nuevo-vendehumo', component: NuevoVendehumo },
  { path: '/editar-vendehumo/:vendehumoId', component: EditarVendehumo },
]

const router = createRouter({
  history: createWebHistory(),
  routes: rutas
})

export default router