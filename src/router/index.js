import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Series from '../views/Series.vue'
import Albuns from '../views/Albuns.vue'
import Musica from '../views/Musica.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/albuns',
    name: 'Albuns',
    component: Albuns
  },
  {
    path: '/series',
    name: 'Series',
    component: Series
  },
  {
    path: '/musicas',
    name: 'Musica',
    component: Musica
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
