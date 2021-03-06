// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';

const VueFire = require('vuefire');
const firebase = require('firebase');
// Required for side-effects
require('firebase/firestore');

Vue.config.productionTip = false;

Vue.use(VueFire);
// Initialize Firebase
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
});
