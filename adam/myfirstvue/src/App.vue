<template>
  <div id="app">

    <img src="./assets/logo.png">
    <router-view/>
    <todolist />
  </div>
</template>

<script>
import todolist from './components/todolist.component.vue'

export default {
  name: 'app',
  data: function () {
    return {

    }
  },
  components: {
    'todolist': todolist
  }
}
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
