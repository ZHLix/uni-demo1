<template>
	<div class="content flex flex-direction">
		<c-refresh ref="refresh" class="flex-sub" @start="refresh">
			<div class="test text-center text-blue">this is test</div>
			
			<div class="test1"></div>
			<c-tab-bar></c-tab-bar>
		</c-refresh>
	</div>
</template>

<script>
import CRefresh from '@/components/Layout/refresh.vue'
import CTabBar from '@/components/TabBar/index.vue'
export default {
	components: { CRefresh, CTabBar },

	onLoad() {
		uni.getSystemInfo({
			success: res => {
				console.log(res)
			}
		})

		// #ifdef MP
		console.log(uni.getMenuButtonBoundingClientRect())
		// #endif

		// #ifndef MP
		console.log('this is test')
		// #endif
	},
	methods: {
		refresh() {
			console.log('this is refresh')

			setTimeout(() => {
				this.$refs.refresh.end()
			}, 1000)
		}
	}
}
</script>

<style lang="scss">
.content {
	width: 100vw;
	height: 100vh;
}

#camera {
	width: 100%;
	height: 100%;
}
</style>
