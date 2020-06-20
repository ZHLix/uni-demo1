<template>
	<div class="tab-bar-container">
		<div class="container w-100 bg-white shadow flex flex-wrap">
			<div class="item flex-sub flex flex-direction justify-center align-center" v-for="(v, k) in _list" :key="k" @click="handle(v, k)">
				<div class="text">
					<span class="text-sm">{{ v.title }}</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		value: String,
		list: Array
	},

	computed: {
		_list() {
			let list = (this.list ?? []).concat()
			if (!list.length) list = this.$store.state.tabbar
			console.log(list)
			return list
		}
	},

	methods: {
		handle(row, index) {
			console.log(row, index)
		}
	},

	beforeCreate() {
		// uni.hideTabBar()
	}
}
</script>

<style scoped lang="scss">
.tab-bar-container {
	height: 100upx;

	.container {
		box-shadow: 0 -1upx 6upx rgba(0, 0, 0, 0.1);
		height: 100upx;
		position: fixed;
		bottom: 0;
		left: 0;
	}
}
</style>
