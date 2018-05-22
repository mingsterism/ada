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
                {{todo['task']}}
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
      household: [],
    };
  },

  methods: {
    getFromFirestore() {
      const foo = (querySnapshot) => {
        if (querySnapshot.size !== 0) {
          querySnapshot.forEach((doc) => {
            this.todosList.push(doc.data());
          });
        }
      };
      fireDB.collection('todos').get().then(foo, (err) => {
        console.log(err);
      });

      fireDB.collection('Products').doc('Household').get().then((doc) => {
        console.log(doc.data());
      });
      fireDB
        .collection('Products')
        .doc('Household')
        .collection('Kitchen')
        .get()
        .then((doc) => {
          console.log(doc);
        });
      fireDB.collection('cities')
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            console.log(doc.data(), '-----------');
          });
        });
    },
    handleEnter() {
      const todoStore = fireDB.collection('todos');
      todoStore.add({
        task: this.todo,
      });

      console.log('-----------Setting tasks -------------------------------');
      const specialTasks = fireDB.collection('todos').doc('specialTasks');
      specialTasks.update({
        task101: this.todo,
      }).then(() => {
        console.log('Success');
      }, (err) => {
        console.log('Error: ', err);
      });
      this.getFromFirestore();
      this.todo = '';
    },
    created() {
      this.getFromFirestore();
    },
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


