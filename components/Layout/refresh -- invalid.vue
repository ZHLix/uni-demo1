<template>
	<scroll-view class="refresh-container" scroll-y @touchstart="touch" @touchmove="touch" @touchend="touch" @touchcancel="touch" @scroll="scroll">
		<div class="container bg-red flex flex-wrap justify-center align-center" :style="{ height: loading ? maxHeight + 'rpx' : containerHeight }"><span>刷新</span></div>

		<slot></slot>
	</scroll-view>
</template>

<script>
export default {
	props: {
		refresh: {
			type: Boolean,
			default: true
		},
		maxHeight: {
			type: Number,
			default: 100
		}
	},

	data() {
		return {
			offset: {
				top: 0,
				start: 0,
				loading: false
			},
			loading: false
		}
	},

	computed: {
		containerHeight() {
			let height = this.offset.top - this.offset.start
			height = height >= 0 ? height : 0
			height = height > this.maxHeight ? this.maxHeight : height
			return height + 'rpx'
		}
	},

	methods: {
		touch({ type, touches: [e] }) {
			if (this.refresh) {
				let offsetTop = e?.clientY

				if (type === 'touchstart') {
					this.offset.start = offsetTop
					this.offset.top = offsetTop
				} else if (type === 'touchmove') {
					this.offset.top = offsetTop
					if (offsetTop >= this.maxHeight - 10) {
						this.offset.loading = true
					} else {
						this.offset.loading = false
					}
				} else if (type === 'touchend') {
					this.touchend()
				}
			}
		},

		touchend() {
			console.log('this is touchend')
			if (this.offset.loading) {
				this.loading = true
			}
			this.offset.start = this.offset.top = 0
			this.offset.loading = false
		},

		start() {
			this.$emit('start')
		},

		end() {}
	}
}
</script>

<style scoped lang="scss">
.refresh-container {
	width: 100vw;
	height: 100vh;

	.container {
		overflow: hidden;
		transition: all 0.2s ease-out;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 0;
	}
}
</style>
