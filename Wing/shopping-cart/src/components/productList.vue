<template>
    
<div>
    <h1>Product List</h1>
    <ul>
        <li v-for="(product,list) in products" v-bind:key="list"> {{product.title}} - {{product.price}}</li>
    </ul>
</div>

</template>

<script>
import shop from "/home/wing/ada/Wing/shopping-cart/src/api/shop";
export default {
    data () {
        return {
            products: [],

        }
    }
    created () {
shop.getProducts(products => {
    this.products = products
}
)
    }
}
</script>

<style lang="">
    
</style>
