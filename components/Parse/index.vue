<template>
	<!-- <wx-parse :content="_value" @preview="preview" @navigate="navigate"/> -->
	<wx-parse :html="_value"></wx-parse>
</template>

<script>
// import WxParse from './gaoyia-parse/parse'
import WxParse from './jyf-parser/jyf-parser.vue'

export default {
	props: {
		value: String
	},
	components: { WxParse },
	computed: {
		_value() {
			return this.value || '-'
		}
	}
	// methods: {
	// preview(...vars) {
	// 	console.log(vars)
	// 	// do something
	// },

	// navigate(...vars) {
	// 	console.log(vars)
	// }
	// }
}
</script>
