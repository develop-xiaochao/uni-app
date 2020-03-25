import Vue from 'vue'
import App from './App'
import'./common/css/iconfont.css'
import grid from 'components/grid.vue'
Vue.component("grid",grid)

import PubFuc from './common/js/utils.js'
Vue.prototype.$pubFuc = PubFuc

Vue.config.productionTip = false

//全局变量，在其他页面中可直接通过this.$baseUrl来获取
Vue.prototype.$baseUrl = "https://www.gzamon.wang/api";

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
