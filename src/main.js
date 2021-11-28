import Vue from 'vue';
import App from './App.vue';
import { toSvg } from 'jdenticon';
import i18n from './i18n'

Object.defineProperty(Vue.prototype, '$toSvg', { value: toSvg });

Vue.config.productionTip = false;

new Vue({
  i18n,
  render: h => h(App)
}).$mount('#app')