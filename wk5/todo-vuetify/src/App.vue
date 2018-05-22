<template>
  <div id="app">
    <v-app>
      <todo></todo>
    </v-app>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import Todo from './components/Todo.component';

export default {
  name: 'App',
  components: {
    HelloWorld,
    todo: Todo,
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
}
</style>
