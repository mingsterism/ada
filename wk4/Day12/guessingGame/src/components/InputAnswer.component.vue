<template>
    <div class="container">
        <div class="guessList">
            <p
                v-for="(word, index) in guessed"
                v-bind:key="index"
            >
                <span v-if="word['show'] == true">
                    {{word.letter}}
                </span>
                <span v-else>___</span>
            </p>
        </div>
        <input 
            type="text" 
            v-model="guess"
            v-on:keyup.enter="handleEnter"
        >
        <h1>You have {{triesLeft}} tries left</h1>
    </div>
</template>

<script>
import httpRequest from '../httpFunctions'
export default {
    data () {
        return {
            tries: 5, 
            guess: '',
            guessed: [],
            answer: 'ragnarok'.split(''),
        }
    }, 
    computed: {
        triesLeft () {
            return this.tries
        }
    },
    created () {
        for (var index in this.answer) {
            this.guessed.push({
                letter: this.answer[index], 
                show: false
            })
        }
    }, 
    methods: {
        handleEnter (event) {
            const g = this.guessed
            for (var index in g) {
                if (g[index].letter === event.target.value) {
                    g[index].show = true
                }
            }
            this.guess = ''
            this.tries--
        }, 

    }
}
</script>

<style scoped>
    .container {
        display: flex;
        flex-direction: column;
    }
    .guessList {
        display: flex;
        width: 60vw;
        justify-content: space-around;
    }
</style>



