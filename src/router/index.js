import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Casas from '../views/Casas.vue'
import Personagens from '../views/Personagens.vue'
import Horcruxes from '../views/Horcruxes.vue'
import MateriasHogwarts from '../views/MateriasHogwarts.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/casas',
    name: 'Casas',
    component: Casas
  },
  {
    path: '/personagens',
    name: 'Personagens',
    component: Personagens
  },
  {
    path: '/horcruxes',
    name: 'Horcruxes',
    component: Horcruxes
  },{
    path: '/materiasHogwarts',
    name: 'MateriasHogwarts',
    component: MateriasHogwarts
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
