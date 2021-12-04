import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Characters from '../views/Characters.vue'
import Gryffindor from '../views/Gryffindor.vue'
import Slytherin from '../views/Slytherin.vue'
import Hufflepuff from '../views/Hufflepuff.vue'
import Ravenclaw from '../views/Ravenclaw.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/characters',
    name: 'Characters',
    component: Characters
  },
  {
    path: '/characters/gryffindor',
    name: 'Gryffindor',
    component: Gryffindor
  },
  {
    path: '/characters/slytherin',
    name: 'Slytherin',
    component: Slytherin
  },
  {
    path: '/characters/hufflepuff',
    name: 'Hufflepuff',
    component: Hufflepuff
  },
  {
    path: '/characters/ravenclaw',
    name: 'Ravenclaw',
    component: Ravenclaw
  },

  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
