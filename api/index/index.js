import Base from '../base.js'

export default class IndexIndex extends Base {
	/**
	 * 初始化
	 */
	async init() {
		let {
			data,
			code,
			msg
		} = await this.$request.post('miniapp/index')

		const result = {}

		data.forEach(({
			name,
			value
		}) => {
			result[name] = value
		})

		const config = {
			GetFace: result.GetFace,
			Free: result.Free,
			FaceContrast: result.FaceContrast,
			ExamPercent: result.ExamPercent,
			StudyRecord: result.StudyRecord
		}

		const list = {
			Carousel: result.Carousel,
			Horn: result.Horn,
			Top1: result.Top1,
			Top2: result.Top2
		}

		// const config = { free: data.free, getFace: data.GetFace, offline: data.offline, verifyFace: data.verifyFace }
		uni.setStorageSync('config', config)
		this.$app.$store.dispatch('config', config)

		Object.keys(list).forEach(k => {
			list[k] = JSON.parse(list[k])
		})

		list.Carousel.list = list.Carousel.list.map(v => {
			v.image = this.$app.$store.state.baseUrl + '/' + v.img
			return v
		})

		list.Horn.list = list.Horn.list.map(v => {
			v.title = v.text
			return v
		})

		// list.Horn = {
		// 	list: list.Horn.list.map(v => v.title),
		// 	data: list.Horn.list
		// }

		list.Top1.list = list.Top1.list.map(v => {
			v.title = v.text1
			v.small_title = v.text2
			return v
		})

		list.Top2.list = list.Top2.list.map(v => {
			v.title = v.text1
			v.small_title = v.text2
			return v
		})



		return this.result(list, code, msg)
	}


	/**
	 * 底部列表
	 */
	async list(req) {
		let {
			page,
			limit
		} = req
		let {
			data: {
				count,
				rows: res
			},
			code,
			msg
		} = await this.$request.post('miniapp/GetCourseList', this.params(req))
		
		res = res.map(v => Object.assign(v, {
			time: this.$app.$utils.formatSeconds(v.count_time),
			title: v.name,
			image: this.$app.$store.state.baseUrl + '/' + v.img
		}))

		return this.result({
			data: res,
			pagination: {
				total: count,
				limit,
				page
			}
		}, code, msg)
	}
}
