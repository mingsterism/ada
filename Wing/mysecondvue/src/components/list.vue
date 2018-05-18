<template>
<div>
    <h1> Lets make a list again !!! </h1>
    <div>
        <h2> Input your item below </h2>
        <p><input type="text" v-on:key.enter="input" v-model="inputText"></p>
        <h3>^^ABOVE HERE^^</h3>
        <h4>Current Item</h4>
        <h5>{{list.length}}</h5>

    </div>
</div>
</template>

<script>
export default {
  list: [],
  item: '',
};
</script>

