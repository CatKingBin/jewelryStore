import Vue from 'vue'
import Router from 'vue-router'

import Body from '@/components/Body'
import Xianglian from '@/components/Xianglian'
import Ershi from '@/components/Ershi'
import Shoushi from '@/components/Shoushi'
import Jiezhi from '@/components/Jiezhi'
import jump from '@/components/jump'
import Login from '@/components/Login'
import Reg from '@/components/Reg'
import Chaxun from '@/components/Chaxun'



Vue.use(Router)

export default new Router({
  routes: [
		//	path: 导航路径,/可以用来表示首页
		//  name: 组件名称
		//  component: 需要切换的组件
		{
			path: '/',
			name: 'Body',
			component: Body
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
		},
		{
			path: '/xianglian',
			name: 'Xianglian',
			component: Xianglian
		},
		{
			path: '/ershi',
			name: 'Ershi',
			component: Ershi
		},
		{
			path: '/Shoushi',
			name: 'Shoushi',
			component: Shoushi
		},
		{
			path: '/jiezhi',
			name: 'Jiezhi',
			component: Jiezhi
		},
		{
			path: '/jump',
			name: 'jump',
			component: jump
		},
		{
			path: '/chaxun',
			name: 'Chaxun',
			component: Chaxun
		}
  ]
})