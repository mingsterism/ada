<template>
    <div>
      <h1>My Item List</h1>
      <input type="text" v-on:keyup.enter="handleEnter" v-model="inputItem" >
      <li v-for="(item, index) in itemList" v-bind:key="index"
      >
        {{item}}</li>
    </div>
</template>

<script>
export default {
  data() {
    return {
      itemList: [],
      inputItem: '',
    };
  },
  methods: {
    handleEnter() {
      this.itemList.push(this.inputItem);
      this.inputItem = '';
    },
  },
};
</script>
