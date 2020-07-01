<template>
	<view class="flex-row justify-center align-center" style="min-width: 200upx; height: 100rpx">
		<image
			v-if="status === 'loading'"
			src="/static/images/loading.png"
			:class="['loading-image', 'margin-right-xs', loading ? 'loading' : '']"
			style="width: 20px;height: 20px;"
		></image>
		<text class="text-sm text-gray">{{ text[status] }}</text>
	</view>
</template>

<script>
export default {
	props: {
		status: {
			type: String,
			default: 'loadmore'
		},
		text: {
			type: Object,
			default: {
				loadmore: '上拉加载更多',
				loading: '努力加载中',
				nomore: '好课更新中'
			}
		}
	},
	
	data() {
		return {
			loading: false
		}
	},
	
	watch: {
		async 'status'(v) {
			await getApp().globalData.$utils.setTimeout(0.1)
			this.loading = v === 'loading'
		}
	}
}
</script>

<style scoped>
.loading-image {
	transform: rotate(0deg);
	transition: transform 12s linear;
}

.loading {
	transform: rotate(4800deg);
}
</style>
