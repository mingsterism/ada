<template>
    <div class="wrapper">
        <div class="container">
            <input 
                type="text" 
                v-bind:value="todo" 
                v-on:input="todo = $event.target.value"
                v-on:keyup.enter="handleEnter"
            >
            <li class="tasksList" v-for="(todo, index) in todosList" v-bind:key="index">
                {{todosList}}
            </li>
        </div>
    </div>
    
</template>

<script>
import fireDB from '../database/index';

export default {
  data() {
    return {
      todo: '',
      todosList: [],
    };
  },
  methods:{
    getFromFirestore() {
      fireDB.collection('games').doc('rpg').get().then((data) => {
        console.log(data.data())
        this.todosList.push(data.data())
        
    })
    }
    ,
    
    handleEnter() {
      const todoStore = fireDB.collection('todos');
      todoStore.add({
        task: this.todo,
      });
      this.getFromFirestore();
      this.todo = '';
    },
  },
  created() {
    this.getFromFirestore();
  },
};
</script>

<style scoped>
    .wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .container {
        width: 50vw;
    }
    .tasksList {
        list-style: none;
        margin: 1rem;
    }

</style>


