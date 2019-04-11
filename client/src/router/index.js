import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Reg from '@/components/Reg'
import Store from '@/components/Store'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Store',
      component: Store
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/reg',
      name: 'Reg',
      component: Reg
    }
  ]
})
