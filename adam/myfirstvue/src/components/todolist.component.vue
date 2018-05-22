<template>
        <div>
                <h1>
                {{name}}
                </h1>
        </div>

        </template>
<script>
export default {
  data () {
    return {
      name: 'adams todo list',
      inputTodo: '',
      todoList: []
    }
  },
  methods: {
    addTodos () {
      this.todoList.push(this.inputTodo)
    }
  }

}
</script>

<style scoped>

</style>
