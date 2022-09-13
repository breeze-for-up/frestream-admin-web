import VueRouter from 'vue-router'

// 创建一个路由器
export default new VueRouter({
	routes:[
		{
			path:'/',
			component: () => import('@/views/dashboard'),
			children:[
				{path: 'user', component: () => import('@/views/system/user')}
			]
		}
	]
})