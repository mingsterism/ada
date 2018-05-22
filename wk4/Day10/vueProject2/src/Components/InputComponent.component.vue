<template>
    <div class="wrapper">
        <input type="text">
        <li v-for="(todo, index) in todos" v-bind:key="index">{{todo}}</li>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            counter: 0, 
            todos: [1, 2, 3, 'aca']
        }
    },
}
</script>

<style scoped>
    input {
        background-color: red;
        height: 5rem;
        width: 20rem;
        padding: 0.5rem;
        color: yellow
    }
</style>

