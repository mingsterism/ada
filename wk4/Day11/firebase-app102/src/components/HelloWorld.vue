<template>
  <div class="hello">
    <li
      v-for="(product, index) in products"
      v-bind:key="index"
    >
      {{product}}
    </li>
    <button v-on:click="refresh">REFRESH</button>
  </div>
</template>

<script>
import db from '@/database';

export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      products: [],
    };
  },
  methods: {
    refresh() {
      db.collection('Products').get().then((data) => {
        data.forEach((doc) => {
          this.products.push(doc.data());
        });
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
