<template>
	<view class="flex-sub padding-lr-sm solid flex-row align-center" :style="{backgroundColor: background}">
		<c-icon v-if="icon" :icon="'\ue666'" :size="size" :color="color"></c-icon>
		<swiper class="flex-sub margin-left-xs" vertical autoplay :interval="3000" :duration="1000" circular @change="change" :style="{ height: '64rpx' }">
			<swiper-item class="justify-center" v-for="(v, k) in _value" :key="k">
				<view class="swiper-item">
					<text class="text-sm nowrap" :style="{fontSize: size + 'rpx', color}">{{ v }}</text>
				</view>
			</swiper-item>
		</swiper>
		<view class="flex-sub w-100 mask margin-left" :style="{ height: '64rpx' }" @touchmove="preventTouchMove" @click="handle"></view>
	</view>
</template>

<script>
import CIcon from '@/components/Icon'
export default {
	components: { CIcon },

	props: {
		value: Array,
		keyName: {
			type: String,
			default: 'text'
		},
		background: {
			type: String,
			default: '#fde6d2'
		},
		color: {
			type: String,
			default: '#f37b1d'
		},
		size: {
			type: String | Number,
			default: 28
		},
		icon: {
			type: Boolean,
			default: true
		}
	},

	data() {
		return {
			current: 0
		}
	},
	
	computed:{
		_value() {
			return this.value.map(v => v[this.keyName])
		}
	},

	methods: {
		preventTouchMove: () => {},
		change({detail: {current}}) {
			this.current = current
		},
		handle() {
			const row = this.value[this.current]
			this.$emit('click', row)
		}
	}
}
</script>

<style>
.nowrap {
	lines: 1;
	/* #ifdef MP */
	white-space: nowrap;
	overflow: hidden;
	/* #endif */
	text-overflow: ellipsis;
}

.mask {
	position: absolute;
}
</style>
