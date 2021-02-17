<template>
    <div>
        Model
        <div v-katex:auto>\({{mylatex}}\)</div>
    </div>
</template>

<script>
import Vue from 'vue'
import VueKatex from 'vue-katex'
import 'katex/dist/katex.min.css'

Vue.use(VueKatex, {
  globalOptions: {
    // ... Define globally applied KaTeX options here
  }
})

export default {
  data () {
    return {
      mylatex: 'a = \\sqrt{3}'
    }
  }
}
</script>

<style lang="scss">
</style>
