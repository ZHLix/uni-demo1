import Fly from 'flyio'
// #ifdef MP
import WxAdapter from 'flyio/src/adapter/wx'
console.log(WxAdapter)
// #endif

class Request{
	constructor(app) {
		this.$origin = Request;
		// this.$fly = new Fly()
		console.log(Fly)
	    console.log('this is request class.')
		this.$app = app
	}
}

const install = (Vue, vm) => {
	Object.defineProperty(Vue.prototype, '$request', {
		get: () => new Request(vm)
	})
}

export default {install}