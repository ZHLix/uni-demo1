<template>
	<view
		:class="fixed ? ['menubar', 'flex-row', 'w-100', fixed ? 'fixed' : '', shadow ? 'shadow' : ''] : 'menu-bar'"
		:style="{ backgroundColor: fixed ? background : '', height: height + 'px' }"
	>
		<view :class="['menubar', 'flex-row', 'w-100', 'fixed', shadow ? 'shadow' : '']" :style="{ backgroundColor: background, height: height + 'px' }" v-if="!fixed">
			<c-content class="flex-sub" :back="back"><slot></slot></c-content>
		</view>

		<c-content class="flex-sub" :back="back" v-else><slot></slot></c-content>
	</view>
</template>

<script>
import CContent from './content'
export default {
	components: { CContent },
	props: {
		/**
		 * 背景
		 */
		background: {
			type: String,
			default: '#ffffff'
		},
		/**
		 * 阴影
		 */
		shadow: Boolean,

		fixed: Boolean,

		back: Boolean
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

	async created() {
		if (!this.menubar.platform) {
			const [, { platform, statusBarHeight, system }] = await uni.getSystemInfo()

			// #ifdef MP
			const { height, top } = uni.getMenuButtonBoundingClientRect()
			const nav_margin = top - statusBarHeight
			// #endif

			this.$store.dispatch('menubar', {
				platform,
				statusbar_height: statusBarHeight,
				// #ifdef MP
				nav_margin,
				menubtn_height: height
				// #endif
			})
		}
	}
}
</script>

<style scoped>
.menu-bar,
.menubar {
	z-index: 1024;
}

.fixed {
	position: fixed;
	top: 0;
	left: 0;
}
.shadow {
	box-shadow: 0 -1upx 6upx rgba(0, 0, 0, 0.1);
}
</style>
