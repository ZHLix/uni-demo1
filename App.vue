<script>
export default {
	onLaunch: function() {
		//console.log('App Launch')
		this.$request.setConfig({ baseURL: 'http://192.168.1.14:8000' })

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

		// #ifdef APP-NVUE
		switch (uni.getSystemInfoSync().platform) {
			case 'android':
				//console.log('运行Android上')
				plus.navigator.closeSplashscreen()
				break
			case 'ios':
				//console.log('运行iOS上')
				plus.navigator.closeSplashscreen()
				break
			default:
				//console.log('运行在开发者工具上')
				break
		}
		// #endif
	},

	onShow: function() {
		console.log('App Show')
	},
	onHide: function() {
		console.log('App Hide')
	}
}
</script>

<style lang="scss">
/*每个页面公共css */
// color ui
@import './common/colorUi/index.scss';
</style>
