<template>
  <div id="app">
      <h1>Hi</h1>
      <div class="container">
        <theFatCat />
      </div>
  </div>
</template>

<script>
import InputComponent from './Components/InputComponent.component.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome abc to Your Vue.js App'
    }
  }, 
  components: {
    'theFatCat': InputComponent,
  }
}
</script>

<style>
  .container {
    background-color: lightblue;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
</style>
