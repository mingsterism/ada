<template>
  <div id="app">
    <div class="container">
      <boxes boxTitle="heyy"/>
      <boxes boxTitle="how"/>
      <boxes 
        v-bind:boxTitle="title" 
        v-bind:counter="number"
        />
    </div>
    <input-answer />
    <input-box />
  </div>
</template>

<script>
import Boxes from './components/Boxes.compoent';
import InputBox from './components/Inputbox.component';
import InputAnswer from './components//InputAnswer.component';
export default {
  name: 'app',
  data () {
    return {
      number: 0,
      title:"are you"
    }
  }, 
  components: {
    'boxes': Boxes, 
    'input-box': InputBox, 
    'input-answer': InputAnswer
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }
  .container {
    background-color: lightblue;
    height: 30vh;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
</style> 