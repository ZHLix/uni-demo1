import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		/**
		 * 底部导航列表
		 */
		tabbar: [{
				name: '/pages/index/index',
				title: '首页',

				icon: 'cuIcon-home',
				iconSelected: 'cuIcon-homefill'
			},
			{
				name: '/pages/classify/classify',
				title: '分类',

				icon: 'cuIcon-circle',
				iconSelected: 'cuIcon-circlefill'
			},
			{
				name: '/pages/news/news',
				title: '新闻',
				icon: 'cuIcon-news',
				iconSelected: 'cuIcon-newsfill'
			},
			{
				title: '油菜招聘',
				image: '/static/images/job3.png',
				type: 'miniprogram',
				appId: 'wxc5e14770d465dcac'
			},
			{
				name: '/pages/mine/mine',
				title: '我的',
				icon: 'cuIcon-my',
				iconSelected: 'cuIcon-myfill'
			}
		],
	},
	mutations: {
		/**
		 * 数据更新 默认方法（大部分）
		 * @param state
		 * @param k
		 * @param v
		 */
		update: (state, {
			key: k,
			value: v
		}) => {
			if (state[k] !== v) state[k] = v
		},
	},
	actions: {
		tabbar(context, data) {
			context.commit('update', {
				key: 'tabbar',
				value: data
			})
		},
	},
	modules: {}
})
