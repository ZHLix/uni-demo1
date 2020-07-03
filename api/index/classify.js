import Base from '../base'

export default class Classify extends Base {
	async list() {
		let {
			data,
			code,
			msg
		} = await this.$request.post('miniapp/GetCourseClass')
		data = data.map(v => ({
			id: v.id,
			name: v.name,
			children: v.course.map(v2 => ({
				id: v2.id,
				title: v2.name,
				image: this.$app.$store.state.baseUrl + '/' + v2.img,
				time: this.$app.$utils.formatSeconds(v2.count_time)
			}))
		}))
		console.log(data)

		return this.result(data, code, msg)
	}
}
