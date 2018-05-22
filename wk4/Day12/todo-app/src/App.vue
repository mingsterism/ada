<template>
  <main id="app">
      <div v-if="status !== 'connected'">
          <fb:login-button 
            scope="public_profile,email"
            onlogin="checkLoginState">
          </fb:login-button>
        </div>
        <div v-else>
          <button v-on:click="fbLogout">LOGOUT</button>
        </div>
        <Todo />      
  </main>
</template>

<script>
import Todo from './components/Todo.component';

export default {
  name: 'app',
  data() {
    return {
      status: '',
    };
  },
  components: {
    Todo,
  },
  methods: {
    checkLoginState() {
      console.log('CHECKING LOGIN STATE');
      window.FB.getLoginStatus((response) => {
        console.log(response, '---------------');
        this.status = response.status;
      });
    },
    fbLogout() {
      console.log('Logging out');
      window.FB.logout((response) => {
        console.log(response);
        location.reload();
      });
    },
  },
  mounted() {
    window.checkLoginState = this.checkLoginState;
  },
  created() {
    /* eslint-disable */
    (function (d, s, id) {
      let js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0&appId=1395109647233821&autoLogAppEvents=1';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  },
};
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}
</style>
