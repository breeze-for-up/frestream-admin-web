import VueRouter from 'vue-router'
import Dashboard from '@/views/dashboard'

// 创建一个路由器
export default new VueRouter({
	routes:[
		{
			path:'/',
			component:Dashboard
		}
	]
})