import Vue from 'vue'
import App from './App.vue'
import router from './router';
import {deepCopy} from "./utils/deepCopy";
import {debounce,throttle,formatDateTime,formatDateTime_YMDHMS} from './utils/utils';

Vue.config.productionTip = false;

/* 导入api接口
usage: this.$api.music.getSongList().then().catch()
* */

Vue.prototype.$deepCpoy = deepCopy;
Vue.prototype.$debounce = debounce;
Vue.prototype.$throttle = throttle;
Vue.prototype.$formatDateTime_YMDHMS = formatDateTime_YMDHMS;
Vue.prototype.$api = api;
Vue.prototype._$deepCpoy = deepCopy;

import api from './api'


new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
