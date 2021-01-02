import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
 
import Expenses from '../views/Expenses'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/new',
    name: 'new',
    component: () => import(/*webpackChunkName: "brazil"*/ '../views/New')
  },
  {
    path: '/expenses',
    name: 'expenses',
    component:Expenses
  }
]

const router = new VueRouter({
  routes
})

export default router
