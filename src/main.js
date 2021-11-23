import Vue from 'vue';
import App from './App.vue';
import { toSvg } from 'jdenticon';

Object.defineProperty(Vue.prototype, '$toSvg', { value: toSvg });

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app')