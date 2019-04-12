import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Reg from '@/components/Reg'
import Product from '@/components/Product'
import Index from '@/components/Index'
import XiangLian from '@/components/XiangLian'
import ErShi from '@/components/ErShi'
import ShouShi from '@/components/ShouShi'
import JieZhi from '@/components/JieZhi'
import Yhhd from '@/components/Yhhd'
import Look from '@/components/Look'







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
          component: Index
        },
        {
      	  path: '/yhhd',
          name: 'Yhhd',
          component: Yhhd
        },
        {
      	  path: '/look',
          name: 'Look',
          component: Look
        },
        {
      	  path: '/xianglian',
          name: 'XiangLian',
          component: XiangLian
        },
        {
      	  path: '/ershi',
          name: 'ErShi',
          component: ErShi
        },
        {
      	  path: '/shoushi',
          name: 'ShouShi',
          component: ShouShi
        },
        {
      	  path: '/jiezhi',
          name: 'JieZhi',
          component: JieZhi
        }
      ]
    }
  ]
})
