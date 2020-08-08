import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import MyPostings from '../views/MyPostings.vue'
import NewPosting from '../views/NewPosting.vue'
import Info from '../views/Info.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'MyPostings',
    component: MyPostings
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/new',
    name: 'NewPosting',
    component: NewPosting
  },
  {
    path: '/information',
    name: 'Info',
    component: Info
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
