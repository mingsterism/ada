const Vue = require('vue');
const VueFire = require('vuefire');
const firebase = require('firebase');

// explicit installation required in module environments
Vue.use(VueFire);

<script src="https://www.gstatic.com/firebasejs/5.0.2/firebase.js"></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBsgoyEXFZRb0YTYdTpC6Ib5UG7m9PtIEg",
    authDomain: "myfirstproject-d3169.firebaseapp.com",
    databaseURL: "https://myfirstproject-d3169.firebaseio.com",
    projectId: "myfirstproject-d3169",
    storageBucket: "myfirstproject-d3169.appspot.com",
    messagingSenderId: "331759357973"
  };
  firebase.initializeApp(config);
</script>
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
});

