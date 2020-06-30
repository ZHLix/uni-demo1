<!--
 * @Date: 2020-04-11 15:37:15
 * @LastEditors: zhlix <15127441165@163.com>
 * @LastEditTime: 2020-04-11 16:56:27
 * @FilePath: \weapp\src\components\carousel.vue
 -->
<template>
	<view class="carousel-container padding-tb-sm">
		<swiper
			v-if="_count"
			:class="['w-100', 'screen-swiper', _options.indicatorDots ? 'square-dot' : '']"
			:style="{ height: _options.height }"
			:indicatorDots="_options.indicatorDots"
			:indicatorColor="_options.indicatorColor"
			:indicatorActiveColor="_options.indicatorActiveColor"
			:autoplay="_options.autoplay"
			:current="_options.current"
			:interval="_options.interval"
			:duration="_options.duration"
			:circular="_options.circular"
			:vertical="_options.vertical"
			:previousMargin="_options.previousMargin"
			:nextMargin="_options.nextMargin"
			:displayMultipleItems="_options.displayMultipleItems"
			:skipHiddenItemLayout="_options.skipHiddenItemLayout"
			:easingFunction="_options.easingFunction"
		>
			<swiper-item v-for="(item, key) in _value" :key="key">
				<view class="padding-lr-sm flex-sub" style="height: 100%;" @click="handle(item, key, _value)">
					<view class="flex-sub"><image :src="item.image" mode="aspectFill" lazy-load class="image flex-sub bg-gray radius shadow-blur" /></view>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
export default {
	/**
	 * 组件属性插槽
	 */
	props: {
		/**
		 * 轮播列表
		 */
		value: String | Array,

		/**
		 * 轮播相关配置
		 */
		options: Object
	},

	/**
	 * 计算
	 */
	computed: {
		/**
		 * 数据列表
		 */
		_value() {
			if (this.value) {
				let value = this.value.concat()
				if (typeof this.value === 'string') {
					value = this.value.split(',')
				}
				return value
			} else {
				return [] // this.value
			}
		},

		/**
		 * 数据列表长度
		 */
		_count() {
			return this._value.length
		},

		/**
		 * 轮播配置
		 */
		_options() {
			let tmp = Object.assign({}, this.options)
			return {
				height: tmp.height ? tmp.height + 'rpx' : undefined, // 高度
				indicatorDots: tmp.indicatorDots ?? false, // 是否显示面板指示点
				indicatorColor: tmp.indicatorColor ?? 'rgba(0,0,0,.3)', // 指示点颜色
				indicatorActiveColor: tmp.indicatorActiveColor ?? '#000000', // 当前选中的指示点颜色
				autoplay: tmp.autoplay ?? false, // 是否自动切换
				current: tmp.current ?? 0, // 当前所在滑块的 index
				interval: tmp.interval ?? 5000, // 自动切换时间间隔
				duration: tmp.duration ?? 500, // 滑动动画时长
				circular: tmp.circular ?? false, // 是否采用衔接滑动
				vertical: tmp.vertical ?? false, // 滑动方向是否为纵向
				previousMargin: tmp.previousMargin ?? '0rpx', // 前边距，可用于露出前一项的一小部分，接受 px 和 rpx 值
				nextMargin: tmp.nextMargin ?? '0rpx', // 后边距，可用于露出后一项的一小部分，接受 px 和 rpx 值
				displayMultipleItems: tmp.displayMultipleItems ?? undefined, // 同时显示的滑块数量
				skipHiddenItemLayout: tmp.skipHiddenItemLayout ?? false, // 是否跳过未显示的滑块布局，设为 true 可优化复杂情况下的滑动性能，但会丢失隐藏状态滑块的布局信息
				easingFunction: tmp.easingFunction ?? 'default' // 指定 swiper 切换缓动动画类型

				// preview: tmp.preview ?? false, // 预览
				// previewAction: tmp.previewAction ?? this.$store.state.baseUrl // 图片预览基础地址
			}
		}
	},

	methods: {
		handle(obj) {
			this.$emit('click', obj)
		}
	}
}
</script>

<style scoped>
.image,
.video,
.image,
.video {
	/* #ifdef MP */
	width: 100%;
	height: 100%;
	/* #endif */
	margin: 0;
}
</style>
