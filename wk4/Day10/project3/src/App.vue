<template>
  <div id="app">
    <Test />
  </div>
</template>

<script>
import Todo from './components/Todo.component';
import Test from './components/Test.component';

export default {
  name: 'App',
  components: {
    Todo,
    Test,
  },

};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  ="Ttitle="Tie-moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
