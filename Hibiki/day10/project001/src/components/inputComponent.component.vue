<template>
   <div>
        <h3>Want to do</h3>
        <input v-on:keyup.enter="todoInput" v-model="inputTodo" type="text"  />
        <p>Total number of want to do {{number}}</p>
        <ul class=“listClass”>
            <li 
                v-for="(anyThing,index) in todoList" 
                v-bind:key="index"
            >
                {{anyThing}}
            </li>
        </ul>
    </div>
 </template>
<script>
   export default {
    data(){
        return{
            number:0,
            todoList:[],
            inputTodo:'',
        }
    },
    methods: {
            todoInput(){
            this.todoList.push(this.inputTodo);
            this.number+=1,
            this.inputTodo = " ";
            }
    },
   }
</script>

<style scoped>
    .listClass {
        display: flex;
        flex-direction: column;
    }
</style>
