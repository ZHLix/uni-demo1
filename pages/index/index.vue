<template>
	<div class="content flex flex-direction">
		<c-refresh ref="refresh" class="flex-sub" @start="refresh">
			<div class="margin"><button class="cu-btn block bg-blue lg" @click="login">登录</button></div>
		</c-refresh>
		<c-tab-bar></c-tab-bar>
	</div>
</template>

<script>
// #ifdef MP
import CRefresh from '@/components/Layout/refresh/mp.vue'
// #endif

// #ifndef MP
import CRefresh from '@/components/Layout/refresh/nmp.vue'
// #endif
import CTabBar from '@/components/TabBar/index.vue'
export default {
	components: { CRefresh, CTabBar },

	onLoad() {
		// uni.getSystemInfo({
		// 	success: res => {
		// 		console.log(res)
		// 	}
		// })
		// #ifdef MP
		// console.log(uni.getMenuButtonBoundingClientRect())
		// #endif
	},
	methods: {
		refresh() {
			console.log('this is refresh')

			setTimeout(() => {
				this.$refs.refresh.end()
			}, 1000)
		},

		login() {
			uni.navigateTo({
				url: '/pages/login/login'
			})
		}
	}
}
</script>

<style lang="scss">
.content {
	width: 100vw;
	/* #ifndef H5 */
	height: 100vh;
	/* #endif */
	/* #ifdef H5 */
	height: calc(100vh - 44px);
	/* #endif */
}

#camera {
	width: 100%;
	height: 100%;
}
</style>
