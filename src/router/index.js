import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/top',
    name: 'Top Anime',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Top Anime.vue')
  },
  {
    path: '/schedule',
    name: 'Schedule',
    component: () => import('../views/Schedule.vue')
  },
  {
    path: '/seasonal',
    name: 'Seasonal',
    component: () => import( '../views/Seasonal.vue')
  },
  {
    path: '/info',
    name: 'Anime Info',
    component: () => import( '../views/AnimeInfo.vue')
  },
  {
    path: '/search',
    name: 'Search Page',
    component: () => import( '../views/SearchPage.vue')
  },
  {
    path: '/register',
    name: 'Register Page',
    component: () => import( '../views/Register.vue')
  },
  {
    path: '/login',
    name: 'Login Page',
    component: () => import( '../views/Login.vue')
  },
  {
    path: '/profile',
    name: 'Profile Page',
    component: () => import( '../views/Profile.vue')
  }
]

const router = createRouter({
  history: createWebHistory(), //history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
