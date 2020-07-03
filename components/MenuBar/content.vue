<template>
	<view class="flex-sub flex-row" :style="{ height: menubar_height + 'px', marginTop: statusbar_height + 'px' }">
		<view class="flex-sub flex-row align-center padding-lr-xs">
			<view class="back margin-right-xs padding-lr-xs" v-if="back" @click="backHandle"><c-icon :icon="'\ue65c'" size="28"></c-icon></view>
			<slot></slot>
		</view>
		<view class="padding-top" :style="{ width: left }"></view>
	</view>
</template>

<script>
import CIcon from '../Icon'
export default {
	components: { CIcon },
	props: {
		back: Boolean,
	},

	computed: {
		menubar() {
			return this.$store.state.menubar
		},
		statusbar_height() {
			return this.menubar.statusbar_height
		},
		menubar_height() {
			return this.menubar.nav_margin * 2 + this.menubar.menubtn_height
		},
		height() {
			if (!this.menubar) return 0
			return this.statusbar_height + this.menubar_height
		},
		left() {
			// #ifndef MP
			return 0
			// #endif

			return `calc(750rpx - ${this.menubar.menubtn_left}px)`
		}
	},

	methods: {
		backHandle() {
			uni.navigateBack({
				delta: 1
			})
		}
	}
}
</script>

<style></style>
