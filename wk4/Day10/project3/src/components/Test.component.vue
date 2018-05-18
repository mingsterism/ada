<template>
    <div>

        <input
          type="text"
          v-bind:value="word"
          v-on:input="handleInput"
          @keyup.enter="handleEnter"
        >
        <button v-on:click="handleClick">
            Change Color
        </button>
        <li v-for="(items, index) in todos" v-bind:key="index">
          <p v-bind:style="{color: colorList[randomNumber()]}">
            {{items}} {{getRandomNumber}}
          </p>
        </li>
        <h1>{{todos}}</h1>
    {{getRandomNumber}}
    </div>
</template>

<script>
export default {
  data() {
    return {
      number: 0,
      word: '',
      colorList: ['red', 'blue', 'yellow', 'green', 'orange', 'teal'],
      todos: [],
    };
  },
  computed: {
    getRandomNumber() {
      return Math.floor(Math.random() * 5) + 1;
    },
  },
  methods: {
    handleClick() {
      this.number = Math.floor(Math.random() * 3);
    },
    randomNumber() {
      this.number = Math.floor(Math.random() * this.colorList.length) + 1;
      return this.number;
    },
    handleEnter() {
      this.todos.push(this.word);
      this.word = '';
      this.randomNumber();
    },
    handleInput(event) {
      this.word = event.target.value;
    },
  },

};
</script>

<style scoped>

</style>

