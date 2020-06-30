class Utils {
	constructor(app) {
		this.$app = app
	}

	/**
	 * url 参数格式切换
	 */
	urlParams(params) {
		if (!params.params || (params.params && typeof params.params === 'object')) {
			return `params=${JSON.stringify(params)}`
		} else {
			return JSON.parse(params.params)
		}
	}

	/**
	 * url 拼接
	 * @param url
	 * @param params
	 */
	url(url, params = '') {
		if (typeof params === 'object') params = this.urlParams(params)
		return `${url}?${params}`
	}

	/**
	 * 定时器
	 */
	setTimeout(func, s = 0) {
		if (typeof func !== 'function') s = func
		return new Promise(resolve => {
			setTimeout(() => {
				resolve(func)
			}, s * 1000)
		})
	}

	/**
	 * 提示消息
	 * @param {Object} content
	 */
	toast(content) {
		// #ifdef APP-PLUS
		plus.nativeUI.toast(content)
		// #endif
		// #ifndef APP-PLUS
		uni.showToast({
			title: content,
			icon: 'none',
			mask: false
		})
		// #endif
	}

	formatSeconds(value, zh = true) {

		let theTime = parseInt(value) // 秒
		let middle = 0 // 分
		let hour = 0 // 小时

		if (theTime > 60) {
			middle = parseInt(theTime / 60)
			theTime = parseInt(theTime % 60)
			if (middle > 60) {
				hour = parseInt(middle / 60)
				middle = parseInt(middle % 60)
			}
		}
		theTime = parseInt(theTime)
		if (!zh && theTime < 10) theTime = `0${theTime}`
		let result = '' + theTime + (zh ? '秒' : '')

		middle = parseInt(middle)
		if (!zh && middle < 10) middle = `0${middle}`
		result = '' + middle + (zh ? '分' : ':') + result

		hour = parseInt(hour)
		if (!zh && hour < 10) hour = `0${hour}`
		result = '' + hour + (zh ? '小时' : ':') + result

		if (zh) {
			result = result.replace(/^((0|00)小时)/, '')
			result = result.replace(/^((0|00)分)/, '')
		}

		return result
	}

	str2Seconds(value) {
		let arr = value.split(':').map(v => parseInt(v))

		return arr[0] * 3600 + arr[1] * 60 + arr[2]
	}

	createSelectorQuery(select, _this) {
		return new Promise(resolve => {
			let query = uni.createSelectorQuery()
			query.in(_this).select(select).boundingClientRect((res) => resolve(res)).exec()
		})
	}

	//生成从minNum到maxNum的随机数
	random(minNum, maxNum) {
		switch (arguments.length) {
			case 1:
				return parseInt(Math.random() * minNum + 1, 10)
			case 2:
				return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10)
			default:
				return 0
		}
	}
}

const install = (Vue, vm) => {
	Object.defineProperty(Vue.prototype, '$utils', {
		get: () => new Utils(vm)
	})
}

export default {
	Utils,
	install
}
