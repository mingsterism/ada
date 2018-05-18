<template>
    <div>
        <div>
          <H1> This is Webpack : mysecondvue</H1></div>
        <div>
            <h2>{{todoApp}}</h2>
            <h3>Undone item : {{todos.length}}</h3>
             <input v-on:keyup.enter="addTodos" v-bind:value="inputTodo" type="text">
       <h2> List of Todo :
            <li v-for="(todo, index) in todos" v-bind:key="index">
            <p v-bind:style="{color:[colorNumber]}" >{{todo}}</p></li></h2>
            </div>

            <div>{{todoList}}</div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      todoApp: 'Now its todo Again',
      inputTodo: '',
      todos: [],
      wordsColor: ['black', 'red', 'blue', 'yellow'],
      colorNumber: 1,
    };
  },
  methods: {
    addTodos() {
      this.todos.push(this.inputTodo);
      this.inputTodo = ' ';
      this.colorNumber = Math.floor(Math.random() * 3);
    },
  },
};
</script>


<style scoped>


</style>
