class Api {
	constructor(app) {
		this.$app = app
		this.$request = app.$request

		// console.log('App Launch')
		this.$request.setConfig({ baseURL: app.$store.state.baseUrl })

		this.$request.setInterceptors(
			'request',
			req => req,
			(err, promise) => {
				console.log('request error data', err)
				promise.reject(err)
			}
		)

		this.$request.setInterceptors(
			'response',
			res => {
				console.log('response data', res)
				return res
			},
			(err, promise) => {
				console.log('response error data', err)
				promise.reject(err)
			}
		)

		const files = require.context('.', true, /\.js$/)
		files.keys().forEach(v => {
			if (v === './index.js' || v === './base.js') return
			let key = v.match(/\.\/(.*)\.js/)[1].split('/')
			key = key.filter((v, k) => k === 0 || v !== 'index').map(v => v.replace(v[0], v[0].toUpperCase())).join('')
			const item = files(v).default
			this[key] = new item(this)
		})
	}

	commit(func_name, ...vars) {
		const page = getCurrentPages()[0].route.split('/')
		page = page.filter((v, k) => k === 0 || v !== 'index').map(v => v.replace(v[0], v[0].toUpperCase())).join('')
		return this[page][func_name](...vars)
	}
}

const install = (Vue, vm) => {
	Object.defineProperty(Vue.prototype, '$api', {
		get: () => new Api(vm)
	})
}

export default {
	install
}
