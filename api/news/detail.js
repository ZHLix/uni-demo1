import Base from '../base'

export default class NewsDetail extends Base {
	async find({
		id
	}) {
		console.log('find')
		let {
			data,
			code,
			msg
		} = await this.$request.post('miniapp/GetNewsById', {
			news_id: id
		})
		return this.result({
			...data,
			click: data.click + 1,
			content: data.body,
			class: data.class.split(',')
		}, code, msg)
	}
}
