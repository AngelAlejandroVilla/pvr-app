import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { 
      path: '/', 
      component: ()  => import('@/views/Home.vue') 
      
    },
    {
      path: '/PropiedadDetail/:id',
      name:"PropiedadDetail",
      component: () => import('@/views/DetallesPropiedad.vue'),
    }

  ]
})

export default router
