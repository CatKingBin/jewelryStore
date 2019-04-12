import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Reg from '@/components/Reg'
import Product from '@/components/Product'
import Index from '@/components/Index'
import XiangLian from '@/components/XiangLian'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
     {
      path: '/reg',
      name: 'Reg',
      component: Reg
    },
    {
      path: '/product',
      name: 'Product',
      component: Product,
      children: [
        {
      	  path: '/product',
          name: 'Index',
          component: Index,
      },
      {
      	path: '/xianglian',
        name: 'XiangLian',
        component: XiangLian,
      }
     
      ]
    }
  ]
})
