<template>
	<div class="login-container flex flex-direction">
		<div class="container flex-treble"></div>

		<div class="other flex-sub flex flex-direction justify-center align-center padding-lr-lg">
			<div class="title w-100 text-sm flex flex-wrap align-center">
				<span class="hr flex-sub"></span>
				<span class="margin-lr text-gray">其他方式登录</span>
				<span class="hr flex-sub"></span>
			</div>
			
			<div class="content padding-top-lg flex flex-wrap">
				<div class="item cu-avatar lg round solid bg-white"><span class="cuIcon-weixin weixin"></span></div>
			</div>
		</div>

		<div class="agreement text-sm padding text-center">
			<div>
				<span>登录代表您已同意</span>
				<span :style="{ color: theme.text }">用户协议</span>
				<span>、</span>
				<span :style="{ color: theme.text }">隐私协议</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {}
	},
	computed: {
		theme() {
			return this.$store.state.theme
		}
	},
	methods: {},

	onLoad() {}
}
</script>

<style scoped lang="scss">
.login-container {
	width: 100vw;
	/* #ifndef H5 */
	height: 100vh;
	/* #endif */
	/* #ifdef H5 */
	height: calc(100vh - 44px);
	/* #endif */
	background: #ffffff;
	
	.hr {
		border-bottom: 1upx solid #f1f1f1;
	}
	
	.weixin {
		color: #15D36A;
	}
}
</style>
