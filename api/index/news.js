import Base from '../base'

export default class News extends Base {
	async list(req) {
		let {
			page,
			limit
		} = req
		let {
			data: {
				count: total,
				rows: data
			},
			code,
			msg
		} = await this.$request.post('miniapp/GetNews', this.params(req))
		data = data.map(v => ({
			...v,
			class: v.class.split(','),
			people: v.click,
			image: v.pic ? this.$app.$store.state.baseUrl + '/' + v.pic : null
		}))
		console.log(data)
		// let res = [
		//   { id: 1, title: '仅需2小时 手写 MINI Spring MVC框架 test tset', class: 'JAVA,SprintBoot,Spring Cloud', people: 1211,
		// image: '/static/logo.png' }, { id: 2, title: '仅需2小时 手写 MINI Spring MVC框架', class: 'JAVA,SprintBoot,Spring
		// Cloud', people: 1211 }, { id: 3, title: '仅需2小时 手写 MINI Spring MVC框架 test tset', class: 'JAVA,SprintBoot,Spring
		// Cloud', people: 1211, image: '/static/logo.png' }, { id: 4, title: '仅需2小时 手写 MINI Spring MVC框架', class:
		// 'JAVA,SprintBoot,Spring Cloud', people: 1211, image: '/static/logo.png' }, { id: 5, title: '仅需2小时 手写 MINI Spring
		// MVC框架 test tset', class: 'JAVA,SprintBoot,Spring Cloud', people: 1211 }, ] res = res.map(v => Object.assign(v, {
		// time: this.v.$utils.formatSeconds(v.time), class: v.class.split(',') }))

		// await this.v.$utils.setTimeout(1000)
		return this.result({
			data,
			pagination: {
				total,
				limit,
				page
			}
		}, code, msg)
	}
}
