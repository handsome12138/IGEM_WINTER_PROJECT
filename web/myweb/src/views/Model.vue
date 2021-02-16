<template>
    <div>
        Model
        <div v-katex="mylatex"></div>
    </div>
</template>

<script>


export default {
    data(){
        return {
            mylatex:'$$a = \\sqrt{3}$$'
        }
    }
}
</script>

<style lang="scss">
</style>