// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import vuetify from 'vuetify';
import Vue from 'vue';
import App from './App';

vue.use(vuetify)
Vue.config.productionTip = false;

/* eslint-disable no-new */

  el: '#app',
  components: { App },
  template: '<App/>',
});
