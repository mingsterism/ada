<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld/>
    <p v-for="(user, index) of users" v-bind:key="index">
    {{user}}  ----------------
  </p>
  </div>
</template>

<script>
import { db } from './firebase';
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',
  data() {
    return {

    };
  },
  firebase: {
    users: {
      source: db.ref('Kingsman'),
      cancelCallback(err) {
        console.error(err);
      },
    },
  },
  components: {
    HelloWorld,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
