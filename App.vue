<script>
export default {
	globalData: {
		$utils: {},
		$request: {},
		$api: {}
	},
	onLaunch: function() {
		this.globalData.$api = this.$api
		this.globalData.$request = this.$request
		this.globalData.$utils = this.$utils

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

	async beforeCreate() {
		const [, { platform, statusBarHeight, system }] = await uni.getSystemInfo()

		// #ifdef MP
		const { height, top, left } = uni.getMenuButtonBoundingClientRect()
		const nav_margin = top - statusBarHeight
		// #endif

		this.$store.dispatch('menubar', {
			platform,
			statusbar_height: statusBarHeight,
			// #ifdef MP
			nav_margin,
			menubtn_height: height,
			menubtn_left: left
			// #endif
		})
	}
}
</script>

<style lang="scss">
@import './common/colorUi/index.scss';

/*每个页面公共css */
.container_full {
	/* #ifdef APP-NVUE */
	// flex: 1;
	/* #endif */

	/* #ifndef APP-NVUE */
	// width: 100vw;
	// height: 100vh;
	/* #endif */

	width: 750upx;
	/* #ifdef H5 */
	height: calc(100vh - 44px);
	/* #endif */
	/* #ifndef H5 */
	height: 100vh;
	/* #endif */
	flex: 1;
}
</style>
