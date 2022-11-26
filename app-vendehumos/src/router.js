// import EditarVendehumo from '@/pages/EditarVendehumo.vue'
import Error from '@/pages/Error.vue'
import InfoVendehumo from '@/pages/InfoVendehumo.vue'
import NuevoVendehumo from '@/pages/NuevoVendehumo.vue'
import Vendehumos from '@/pages/Vendehumos.vue'
import { createRouter, createWebHistory } from 'vue-router'

const rutas = [
  { path: '/vendehumos', component: Vendehumos, name: 'vendehumos' },
  { path: '/nuevo-vendehumo', component: NuevoVendehumo, name: 'nuevo-vendehumo' },
  {
    path: '/editar-vendehumo/:vendehumoId',
    component: () => import('@/pages/EditarVendehumo.vue'),
    name: 'editar-vendehumo'
  },
  {
    path: '/vendehumos/:vendehumoId',
    component: InfoVendehumo,
    name: 'info-vendehumo',
    beforeEnter(to, from, next) {
      const token = localStorage.getItem('token')
      if (token) {
        next(true)
      } else {
        next(false)
      }
    }
  },
  { path: '/', redirect: '/vendehumos' },
  { path: '/:path(.*)*', component: Error },
]

const router = createRouter({
  history: createWebHistory(),
  routes: rutas
})

export default router

// PARAMS DE URL
// /path1/:param1 -> route.params.param1

// PARAMS DE QUERY
// /path1/path2?param1=algo&param2=otracosa -> route.query.param1