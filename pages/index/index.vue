<template>
	<div class="content bg-red"></div>
</template>

<script>
export default {
	onLoad() {
		uni.getSystemInfo({
			success: res => {
				console.log(res);
			}
		});
		
		console.log(this.$request)

		// #ifdef MP
		console.log(uni.getMenuButtonBoundingClientRect());
		// #endif

		// #ifndef MP
		console.log('this is test');
		// #endif
	},
	methods: {}
};
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
