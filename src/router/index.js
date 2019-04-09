import Vue from 'vue'
import Router from 'vue-router'
import Product from '@/components/Product'
import Login from '@/components/Login'
import Reg from '@/components/Reg'
import User_login from '@/components/User_login'
import User_reg from '@/components/User_reg'
import Store from '@/components/Store'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/admin',
      name: 'Login',
      component: Login
    },
     {
      path: '/adminreg',
      name: 'Reg',
      component: Reg
    },
    {
      path: '/product',
      name: 'Product',
      component: Product
    },
    {
      path: '/',
      name: 'Store',
      component: Store
    },
    {
      path: '/userlogin',
      name: 'User_login',
      component: User_login
    },
    {
      path: '/userreg',
      name: 'User_reg',
      component: User_reg
    },
    {
      path: '/store',
      name: 'Store',
      component: Store
    }
  ]
})
