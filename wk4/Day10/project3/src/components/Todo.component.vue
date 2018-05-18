<template>
    <div class="container">
        <h1>{{title}}</h1>
        <input
            v-model="todo"
            type="text"
            v-on:keyup.enter="handleEnter"
        >
        <li
            v-for="(todo, index) in listOfTodos"
            v-bind:key="index"
        >
            The {{todo}}
            the index is {{index}}
        </li>
        <input
            type="text"
            v-model="newText"
            v-on:keyup="handleKeyup"
        >
        <h1
            v-bind:style="{color: listOfColors[number]}"
        >
            {{newText}}
        </h1>
    </div>

</template>

<script>
export default {
  data() {
    return {
      number: 2,
      name: 'James',
      todo: '',
      newText: 'alsdkfj',
      listOfTodos: [],
      listOfColors: ['black', 'yellow', 'red', 'blue'],
    };
  },
  methods: {
    handleEnter() {
      this.listOfTodos.push(this.todo);
    },
    handleKeyup() {
      this.number = Math.floor(Math.random() * 4) + 1;
    },
  },
  computed: { },
  components: { },
  props: ['title'],

};
</script>

<style scoped>

</style>

