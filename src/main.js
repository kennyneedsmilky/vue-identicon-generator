import Vue from 'vue';
import App from './App.vue';
import { toSvg } from 'jdenticon';

// For testing.
import testMessage, {animals} from "./assets/js/test.js";
Object.defineProperty(Vue.prototype, '$test', { value: testMessage });
Object.defineProperty(Vue.prototype, '$animals', { value: animals });
Object.defineProperty(Vue.prototype, '$toSvg', { value: toSvg });

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app')
