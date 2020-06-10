import Vue from 'vue'
import App from './App.vue'
import router from './router';
import {deepCopy} from "./utils/deepCopy";
import {debounce,throttle} from './utils/utils'

Vue.config.productionTip = false;

/* 导入api接口
usage: this.$api.music.getSongList().then().catch()
* */

Vue.prototype.$deepCpoy = deepCopy;
Vue.prototype.$debounce = debounce;
Vue.prototype.$throttle = throttle;

import api from './api'
Vue.prototype.$api = api;
Vue.prototype._$deepCpoy = deepCopy;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
