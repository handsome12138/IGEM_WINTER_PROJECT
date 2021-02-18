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
              <li>other words represent protein(eg., <span v-katex:auto>\(Sos\)</span>).</li>
              <li><span v-katex:auto>\(\alpha\)</span> represents transcription term(eg., <span v-katex:auto>\(\alpha_{Sos}\)</span>).</li>
              <li><span v-katex:auto>\(\beta\)</span> represents translation term(eg., <span v-katex:auto>\(\beta_{Sos}\)</span>).</li>
              <li><span v-katex:auto>\(d\)</span> represents decomposition term(eg., <span v-katex:auto>\(d_{Sos}\)</span>).</li>
            </ol>
          </div>

          <h1 id="basic"> Basic View of Our Model </h1>
          <div class="model-basic">
            <p>
              Our design is a feedback system in which the output protein $RhoA$ can detect the amount of input <span v-katex:auto>\(TGF-\beta\)</span> and change accordingly through a series of pathways.
            </p>
            <p>
              The sketch of metabolic pathway is shown as following.
            </p>
          </div>

          <h1 id="submodels"> Submodels </h1>
          <div class="model-submodel">
            <el-collapse v-model="submodel_active" accordion>
              <el-collapse-item title="Transcription and Hill Function" name="1">
                <div>
                  <p>
                    According to central dogma, the first step of build a protein is transcription. If the transcription rate is a const, we can describe the process as <span v-katex:auto>\(\frac{\mathrm{d}mRNA}{\mathrm{d}t} = r \cdot gRNA\)</span>  where <span v-katex:auto>\(r\)</span> is the transcription rate.
                  </p>
                  <p>
                    Actually, we always need a transcription factor. Only after the factor is binded to DNA, can they begin to transcribe. Hill Function is used to describe such a situation:
                  </p>
                  <p>
                    <span v-katex:auto>\(\theta = \frac{[L]^n}{K_d^n + [L]^n} = \frac{1}{1 + (\frac{K_d}{[L]})^n} \)</span> 
                  </p>
                  <p>
                    <span v-katex:auto>\(\theta\)</span> is the amount of DNA bound by the protein, <span v-katex:auto>\([L]\)</span> is the amount of protein,<span v-katex:auto>\(K_d\)</span> is the dissociation constant and <span v-katex:auto>\(n\)</span> is the Hill coefficient.
                  </p>
                  <p>
                    For the repressors, we are interested in how much of the DNA is still unbound and active: <span v-katex:auto>\(\frac{1}{1 + (\frac{[Repressor]}{K_d})^n}\)</span>
                  </p>
                  <p>
                    For the activators, we are interested in how much of the DNA is bound and active: <span v-katex:auto>\( \frac{1}{1 + (\frac{K_d}{[Activator]})^n}\)</span>
                  </p>
                  <p>
                    As a result, the ODE is modified as <span v-katex:auto>\( \frac{\mathrm{d}mRNA}{\mathrm{d}t} = r \cdot (\frac{1}{1 + (\frac{K_d}{[Activator]})^n} gRNA) \)</span>
                  </p>
                </div>
              </el-collapse-item>
              <el-collapse-item title="Translation" name="2">
                <div>
                  <p>
                    Translation is quite easy. We consider translate rate as a const, so the contribution of translation in derivative term is <span v-katex:auto>\( \frac{\mathrm{d}Protein}{\mathrm{d}t} = r_{translation} \cdot mRNA \)</span> 
                  </p>
                </div>
              </el-collapse-item>
              <el-collapse-item title="Enzymatic Reaction: Michaelis-Menten Equation" name="3">
                <div>
                  <p>
                    There are some enzymatic reactions, and we are going to use Michaelis-Menten Equation to model it.
                  </p>
                  <p>
                    <span v-katex:auto>\( v = \frac{v_{max}[S]}{K_m + [S]} \)</span>
                  </p>
                  <p>
                    Where <span v-katex:auto>\([S]\)</span> represents concentration of substrate, 
                    <span v-katex:auto>\(v_{max}\)</span> represents the reaction rate when the enzyme is saturated with the substrate, 
                    <span v-katex:auto>\(K_m\)</span> represents Michaelis constant. Because the concentration of enzyme is not a constant in our model, we assume <span v-katex:auto>\(v_{max}\)</span> is linearly related to <span v-katex:auto>\( the concentration of enzyme \)</span>.<span v-katex:auto>\(v_{max} = Enzyme \cdot \lambda \)</span>.
                    The modified version is as following.
                    <!-- <span v-katex:auto>\(\)</span> -->
                  </p>
                  <p>
                    <span v-katex:auto>\( \frac{\mathrm{d}[S]}{\mathrm{d}t} = v = \lambda \cdot Enzyme \cdot \frac{[S]}{K_m + [S]} \)</span>
                  </p>
                </div>
              </el-collapse-item>
              <el-collapse-item title="Protein Association and Disassociation" name="4">
                <div>
                  <p>
                    When proteins form complexes (eg., <span v-katex:auto>\(A + B \rightleftharpoons A/B \)</span>). We use association rate and disassociation to describe them.
                  </p>
                  <p v-html="katexhtml1">
                  </p>
                  
                </div>
              </el-collapse-item>
              <!-- <el-collapse-item title="可控 Controllability" name="4">
              </el-collapse-item> -->
            </el-collapse>
          </div>

          <h1 id="mainmodel"> Complete model </h1>
          <div class="model-complete">
            Combining all these factors above and the sketch of metabolic pathway, the whole equations are listed as following:
            <p v-html="katexhtml2"></p>
          </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import VueKatex from 'vue-katex'
import katex from 'katex';
import 'katex/dist/katex.min.css'

Vue.use(VueKatex, {
  globalOptions: {
    // ... Define globally applied KaTeX options here
  }
})

export default {
  data () {
    return {
      mylatex: "test latex a = \sqrt{3}",
      submodel_active:1,
      katexhtml1:katex.renderToString(String.raw`
      \left\{ \begin{aligned}
        &\frac{\mathrm{d}A}{\mathrm{d}t} &=& -k_{associate} \cdot A \cdot B + k_{disassociate} \cdot A/B \\
        &\frac{\mathrm{d}B}{\mathrm{d}t} &=& -k_{associate} \cdot A \cdot B + k_{disassociate} \cdot A/B \\
        &\frac{\mathrm{d}A/B}{\mathrm{d}t} &=& + k_{associate} \cdot A \cdot B - k_{disassociate} \cdot A/B 
      \end{aligned} \right.
      `),
      katexhtml2:katex.renderToString(String.raw`
      \left\{
      \begin{array}{lll}
        \dfrac{\mathrm{d} mTGFBR1 }{\mathrm{d}t}  & = &  \alpha_{TGFBR1} \cdot gTGFBR1 - d_{mTGFBR1} \cdot mTGFBR1 \\
        \dfrac{\mathrm{d} TGFBR1 }{\mathrm{d}t}  & = &  \beta_{TGFBR1} \cdot mTGFBR1 - d_{TGFBR1} \cdot mTGFB1 - v_{max,TGFBR1-P} \frac{TGF-\beta/TGFBR2 \cdot TGFBR1}{K_{m, TGFBR1} + TGFBR1} \\

        \dfrac{\mathrm{d} mTGFBR2 }{\mathrm{d}t}  & = &  \alpha_{TGFBR2} \cdot gTGFBR2 - d_{mTGFBR2} \cdot mTGFBR2 \\
        \dfrac{\mathrm{d} TGFBR2 }{\mathrm{d}t}  & = &  \beta_{TGFBR2} \cdot mTGFBR2 - d_{TGFBR2} \cdot mTGFBR2 \\ & & - k_{as,TGFBR2} \cdot TGF-\beta \cdot TGFBR2 + k_{dis,TGFBR2} \cdot TGF-\beta/TGFBR2\\
        
        \frac{\mathrm{d} TGF-\beta/TGFBR2 }{\mathrm{d}t}  & = &  k_{as,TGFBR2} \cdot TGF-\beta \cdot TGFBR2 - k_{dis,TGFBR2} \cdot TGF-\beta/TGFBR2  \\&& - d_{TGF-\beta/TGFBR2} * TGF-\beta/TGFBR2 \\
        
        \frac{\mathrm{d} TGFBR1-P }{\mathrm{d}t}  & = &  v_{max,TGFBR1-P} \frac{TGF-\beta/TGFBR2 \cdot TGFBR1}{K_{m, TGFBR1} + TGFBR1} - d_{TGFBR1-P} \cdot TGFBR1-P\\
        
        \frac{\mathrm{d} mSos }{\mathrm{d}t}  & = &  \alpha_{Sos} \frac{1}{1 + (K_{d,pSos}/(TGFBR1-P))^{n_{pSos}}} \cdot gSos - d_{mSos} \cdot mSos \\
        \frac{\mathrm{d} Sos }{\mathrm{d}t}  & = &  \beta_{Sos} \cdot mSos - d_{Sos} \cdot Sos - k_{as,SGSS} \cdot Sos \cdot Grb2 \cdot Shc \cdot Sara + k_{dis,SGSS} \cdot SGSS \\

        
        \frac{\mathrm{d} mGrb2 }{\mathrm{d}t}  & = &  \alpha_{Grb2} \frac{1}{1 + (K_{d,pGrb2}/(TGFBR1-P))^{n_{pGrb2}}} \cdot gGrb2 - d_{mGrb2} \cdot mGrb2 \\
        \frac{\mathrm{d} Grb2 }{\mathrm{d}t}  & = &  \beta_{Grb2} \cdot mGrb2 - d_{Grb2} \cdot Grb2 - k_{as,SGSS} \cdot Sos \cdot Grb2 \cdot Shc \cdot Sara + k_{dis,SGSS} \cdot SGSS \\


        \frac{\mathrm{d} mShc }{\mathrm{d}t}  & = &  \alpha_{Shc} \frac{1}{1 + (K_{d,pShc}/(TGFBR1-P))^{n_{pShc}}} \cdot gShc - d_{mShc} \cdot mShc \\
        \frac{\mathrm{d} Shc }{\mathrm{d}t}  & = &  \beta_{Shc} \cdot mShc - d_{Shc} \cdot Shc - k_{as,SGSS} \cdot Sos \cdot Grb2 \cdot Shc \cdot Sara + k_{dis,SGSS} \cdot SGSS \\

        
        \frac{\mathrm{d} mSara }{\mathrm{d}t}  & = &  \alpha_{Sara} \frac{1}{1 + (K_{d,pSara}/(TGFBR1-P))^{n_{pSara}}} \cdot gSara - d_{mSara} \cdot mSara \\
        \frac{\mathrm{d} Sara }{\mathrm{d}t}  & = &  \beta_{Sara} \cdot mSara - d_{Sara} \cdot Sara - k_{as,SGSS} \cdot Sos \cdot Grb2 \cdot Shc \cdot Sara + k_{dis,SGSS} \cdot SGSS \\

        \frac{\mathrm{d} SGSS }{\mathrm{d}t}  & = &  k_{as,SGSS} \cdot Sos \cdot Grb2 \cdot Shc \cdot Sara - k_{dis,SGSS} \cdot SGSS - d_{SGSS} * SGSS\\

        \frac{\mathrm{d} mSmad2 }{\mathrm{d}t}  & = &  \alpha_{Smad2} \frac{1}{1 + (K_{d,Smad2}/SGSS)^{n_{Smad2}}} \cdot gSmad2 - d_{mSmad2} \cdot mSmad2 \\
        \frac{\mathrm{d} Smad2 }{\mathrm{d}t}  & = &  \beta_{Smad2} \cdot mSmad2 - d_{Smad2} \cdot Smad2 - v_{max,Smad2-P}\frac{SGSS \cdot Smad2}{K_{m, Smad2} + Smad2} \\
        
        \frac{\mathrm{d} Smad2-P }{\mathrm{d}t}  & = & v_{max,Smad2-P}\frac{TGFBR1-P \cdot Smad2}{K_{m, Smad2} + Smad2} - d_{Smad2-P} \cdot Smad2-P\\
        
        \frac{\mathrm{d} mAI-2 }{\mathrm{d}t}  & = &  \alpha_{AI-2} \frac{1}{1 + (K_{d,AI-2}/Smad2-P)^{n_{AI-2}}} \cdot gAI-2 - d_{mAI-2} \cdot mAI-2 \\
        \frac{\mathrm{d} AI-2 }{\mathrm{d}t}  & = &  \beta_{AI-2} \cdot mAI-2 - d_{AI-2} \cdot AI-2 \\&& - k_{as,AI-2/Cqs-S} \cdot AI-2 \cdot Cqs-S + k_{dis,AI-2/Cqs-S} \cdot AI-2/Cqs-S\\
        
        \frac{\mathrm{d} mCqs-S }{\mathrm{d}t}  & = &  \alpha_{Cqs-S} \cdot gCqs-S - d_{mCqs-S} \cdot mCqs-S \\
        \frac{\mathrm{d} Cqs-S }{\mathrm{d}t}  & = &  \beta_{Cqs-S} \cdot mCqs-S - d_{Cqs-S} \cdot Cqs-S \\&&  - k_{as,AI-2/Cqs-S} \cdot AI-2 \cdot Cqs-S + k_{dis,AI-2/Cqs-S} \cdot AI-2/Cqs-S \\
        
        \frac{\mathrm{d} AI-2/Cqs-S }{\mathrm{d}t}  & = &  k_{as,AI-2/Cqs-S} \cdot AI-2 \cdot Cqs-S - k_{dis,AI-2/Cqs-S} \cdot AI-2/Cqs-S \\&& -d_{AI-2/Cqs-S} AI-2/Cqs-S\\
        
        \frac{\mathrm{d} mRhoA }{\mathrm{d}t}  & = &  \alpha_{RhoA} \frac{1}{1 + (K_{d,pLuxU}/(AI-2/Cqs-S))^{n_{pLuxU}}} \cdot gRhoA - d_{mRhoA} \cdot mSmad2 \\
        \frac{\mathrm{d} RhoA }{\mathrm{d}t}  & = &  \beta_{RhoA} \cdot mRhoA - d_{RhoA} \cdot RhoA \\
        
        
        % \frac{\mathrm{d} mMARKER }{\mathrm{d}t}  & = &  \alpha_{MARKER} \cdot gMARKER - d_{mMARKER} \cdot mMARKER \\
        % \frac{\mathrm{d} MARKER }{\mathrm{d}t}  & = &  \beta_{MARKER} \cdot mMARKER - d_{MARKER} \cdot MARKER \\
    \end{array}\right.
      `),
    }
  }
}
</script>

<style lang="scss" scoped>
.model-body{
  margin:10%;
  h1{
    text-align: center;
    margin-top: 5%;
  }
  .model-submodel{
    margin:10%;
  }
}
</style>
