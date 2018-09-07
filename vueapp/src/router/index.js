import Vue from 'vue'
import Router from 'vue-router'


import Index from '@/components/Index'
import Us from '@/components/Us'
import Gzh from '@/components/Gzh'


import All from '@/components/topics/All'
import Ask from '@/components/topics/Ask'
import Good from '@/components/topics/Good'
import Share from '@/components/topics/Share'
import Job from '@/components/topics/Job'
import Weex from '@/components/topics/Weex'

import Content from '@/components/topics/Content'



Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/index',
			name: 'Indes',
			component: Index,

			children:[
				{path:'/',component:All},
				{path:'good',component:Good},
				{path:'weex',component:Weex},
				{path:'share',component:Share},
				{path:'ask',component:Ask},
				{path:'job',component:Job},
				
				{path:'content/:id',component:Content}
			]

		},

		{
			path: '/us',
			name: 'Us',
			component: Us
		},

		{
			path: '/gzh',
			name: 'Gzh',
			component: Gzh
		},

		{
			path:'/*',
			redirect:'/index',
		},

	]
})
