/* eslint-disable */

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  created() {
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: '2051351145112443',
        cookie: true,
        xfbml: true,
        version: 'v3.0',
      });

      window.FB.AppEvents.logPageView();

      window.FB.getLoginStatus((response) => {
        console.log(response);
      });
      (function (d, s, id) {
        let js,
          fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) { return; }
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/en_US/sdk.js';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk')
      );
    };
  },
});
