<template>
    <div class="model" style="text-align:left">
        <div class="model-body">
          <h1 id="Notations"> Notations </h1>
          <div class="model-notations">
            Here are some conventions about notation.
            <ol style="text-align:left">
              <li>words begin with <span v-katex:auto>\(g\)</span> represent gene(eg., <span v-katex:auto>\(gSos\)</span>).</li>
              <li>words begin with <span v-katex:auto>\(m\)</span> represent mRNA(eg., <span v-katex:auto>\(mSos\)</span>).</li>
              <li>words begin with <span v-katex:auto>\(p\)</span> represent promoter(eg., <span v-katex:auto>\(pSos\)</span>).</li>
              <li>other words represent protein(eg., Sos).</li>
              <li><span v-katex:auto>\(\alpha\)</span> represents transcription term(eg., <span v-katex:auto>\(\alpha_{Sos}\)</span>).</li>
              <li><span v-katex:auto>\(\beta\)</span> represents translation term(eg., <span v-katex:auto>\(\beta_{Sos}\)</span>).</li>
              <li><span v-katex:auto>\(d\)</span> represents decomposition term(eg., <span v-katex:auto>\(d_{Sos}\)</span>).</li>
            </ol>
          </div>

          <h1 id="basic"> Basic View of Our Model </h1>
          <div class="model-basic">
            Here is basic model view.
          </div>
        </div>
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
      mylatex: "test latex a = \sqrt{3}"
    }
  }
}
</script>

<style lang="scss" scoped>
.model-body{
  margin-left:100px;
  h1{
    text-align: center;
  }
}
</style>
