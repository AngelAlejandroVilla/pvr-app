import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { 
      path: '/', 
      component: ()  => import('@/views/Home.vue') 
    },
    {
      path: '/PropiedadDetail',
      component: () => import('@/views/DepartamentoDetail.vue'),
    }

  ]
})

export default router
