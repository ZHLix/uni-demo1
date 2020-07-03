<template>
	<view class="linkage-container flex-sub flex-row">
		<scroll-view class="index" :style="{ backgroundColor: '#f1f1f1' }" scroll-y>
			<view
				class="index-item padding-tb-lg padding-lr-sm flex-row justify-center"
				:style="{ backgroundColor: indexCur === k ? '#ffffff' : '' }"
				v-for="(v, k) in value"
				:key="k"
			>
				<text class="text-sm flex-sub text-center text-cut" :style="{ color: indexCur === k ? theme.text : '' }">{{ v.name }}</text>
			</view>
		</scroll-view>
		<scroll-view class="list flex-sub bg-white" scroll-y>
			<view class="list-iem padding-tb" v-for="(v, k) in value" :key="k">
				<view class="list-title flex-row padding-lr">
					<text class="text-df text-bold flex-sub text-cut">{{ v.name }}</text>
				</view>
				<view class="list-content padding-lr-xs flex-sub flex-row flex-wrap" v-if="v.children">
					<view class="list-content-item margin-top padding-lr-xs" v-for="(v2, k2) in v.children" :key="k2">
						<view class="image"><image :src="v2.image" class="cu-avatar-xl radius" mode="aspectFill"></image></view>
						<view class="content margin-top-sm">
							<view class="title">
								<text class="text-sm text-bold">{{ v2.title }}</text>
							</view>
							<view class="other margin-top-xs">
								<view class="time">
									<text class="text-xs text-gray">{{ v2.time }}</text>
								</view>
							</view>
						</view>
					</view>
				</view>

				<view class="list-content" v-else><text class="text-sm text-center text-gray">暂无相关课程</text></view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
export default {
	props: {
		value: Array
	},

	data() {
		return {
			indexCur: 0
		}
	},

	computed: {
		theme() {
			return this.$store.state.theme
		}
	}
}
</script>

<style scoped>
.linkage-container {
	background-color: #f1f1f1;
	padding-bottom: 1upx;
	/* #ifdef MP */
	height: 100%;
	/* #endif */
}

.index {
	width: 200upx;
}

.list-content-item {
	width: 176.667upx;
}

.cu-avatar-xl {
	width: 156.667upx;
	/* height: 176.667upx; */
}
</style>
