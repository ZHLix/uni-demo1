import Vue from 'vue'
import App from './App'
import store from './store'

// request
import Request from './common/request'


Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App,
	store
})

Vue.use(Request, app)

app.$mount()
