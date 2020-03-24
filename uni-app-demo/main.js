import Vue from 'vue'
import App from './App'

import grid from 'components/grid.vue'
Vue.component("grid",grid)
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
