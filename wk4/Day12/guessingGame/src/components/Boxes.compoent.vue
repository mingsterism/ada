<template>
    <div class="box">
        Title: {{boxTitle}}
    </div>
</template>

<script>
export default {
    props: ['boxTitle']
}
</script>

<style scoped>
    .box {
        width: 4rem;
        height: 4rem;
        border: 3px solid black;
    }

</style>


