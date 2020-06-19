<script>
export default {
	onLaunch: function() {
		//console.log('App Launch')
		switch (uni.getSystemInfoSync().platform) {
			case 'android':
				//console.log('运行Android上')
				plus.navigator.closeSplashscreen();
				break;
			case 'ios':
				//console.log('运行iOS上')
				plus.navigator.closeSplashscreen();
				break;
			default:
				//console.log('运行在开发者工具上')
				break;
		}
	},
	onShow: function() {
		console.log('App Show');
	},
	onHide: function() {
		console.log('App Hide');
	}
};
</script>

<style lang="scss">
/*每个页面公共css */
// color ui
@import './common/colorUi/index.scss';
</style>
