import Vue from 'nativescript-vue';
import App from './components/App.vue';
// VueDevtools use module.exports which is not supported in TS
// so we need to do import * from VueDevTools here
import * as VueDevtools from 'nativescript-vue-devtools';

declare var TNS_ENV: string;

if(TNS_ENV !== 'production') {
  Vue.use(VueDevtools);
}
// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production');

new Vue({
  render: h => h('frame', [h(App)])
}).$start();
