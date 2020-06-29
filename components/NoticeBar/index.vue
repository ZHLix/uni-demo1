<template>
	<view class="flex-sub padding-sm bg-orange-light solid">
		<c-icon v-if="icon" :icon="'\ue666'" class="text-orange"></c-icon>
	</view>
</template>

<script>
import CIcon from '@/components/Icon'
export default {
	components: { CIcon },
	
	props: {
		icon: {
			type: Boolean,
			default: true
		}
	}
}
</script>

<style></style>
