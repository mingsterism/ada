<template>
  <div id="app">
    <img src="./assets/logo.png">
    <ProductList/>
  </div>
</template>

<script>
import ProductList from '/home/wing/ada/Wing/shopping-cart/src/components/productList';

export default {
  name: 'app',
  components: {
    ProductList,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
