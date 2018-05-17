<template>
    <div>
        <h1>Hibiki Work List</h1>
        <p>What we prepiad to do?</p>
        <input v-on:keyup.enter="handleEnter" v-model="inputA" type="text">
        <h2>Just Do this item list</h2>
        <p>{{list.length}}</p>
        <li v-for="(inputA,index) in list"
            v-bind="index"
            v-bind:style="{color:colorList[colorNumber]}" >{{inputA}}</li>
        <button v-on:click="replayMyColor" >Click Me!</button>
    </div> 
</template>

<script>
export default {
    data() {
        return{
        inputA:'',
        list:[],
        colorList:['green','red','yellow','blue','grey'],
        colorNumber:0,
        }
    },
    methods: {
      handleEnter(){
          this.list.push(this.inputA),
          this.inputA = "",
          this.colorNumber=Math.floor(Math.random()*4)},

      replayMyColor(){
           if(this.colorNumber <=4 ){
                this.colorNumber++
            }else{
                this.colorNumber=0
            }
            return
            console.log(this.colorNumber)
      },

     
    
    },  
};

</script>

<style>


</style>
