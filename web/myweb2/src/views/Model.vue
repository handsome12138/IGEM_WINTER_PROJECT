<template>
    <div class="model" style="text-align:left">
        <sidenav :navs="mynav" class="sidenav"> </sidenav>
        <div class="model-body">
          <a class="anchor" name="notation" id="notation"></a>
          <h1> Notations </h1>
          <div class="model-notations">
            Here are some conventions about notation.
            <ol style="text-align:left">
              <li>words begin with <span v-katex:auto>\(g\)</span> represent the concentration of gene(eg., <span v-katex:auto>\(gSos\)</span>).</li>
              <li>words begin with <span v-katex:auto>\(m\)</span> represent the concentration of mRNA(eg., <span v-katex:auto>\(mSos\)</span>).</li>
              <li>words begin with <span v-katex:auto>\(p\)</span> represent the concentration of promoter(eg., <span v-katex:auto>\(pSos\)</span>).</li>
              <li>other words represent the concentration of protein(eg., <span v-katex:auto>\(Sos\)</span>).</li>
              <li><span v-katex:auto>\(\alpha\)</span> represents transcription term(eg., <span v-katex:auto>\(\alpha_{Sos}\)</span>).</li>
              <li><span v-katex:auto>\(\beta\)</span> represents translation term(eg., <span v-katex:auto>\(\beta_{Sos}\)</span>).</li>
              <li><span v-katex:auto>\(d\)</span> represents decomposition term(eg., <span v-katex:auto>\(d_{Sos}\)</span>).</li>
            </ol>
          </div>

          <a class="anchor" name="basic" id="basic"></a>
          <h1> Basic View of Our Model </h1>
          <div class="model-basic">
            <p>
              Our design is a feedback system in which the output protein <span v-katex:auto>\(RhoA\)</span> can detect the amount of input <span v-katex:auto>\(TGF-\beta\)</span> and change accordingly through a series of pathways.
            </p>
            <p>
              The sketch of metabolic pathway is shown as following(cf., Fig. 1).
            </p>
            <img :src="pathway_sketch" class="pathway-sketch">
            <div class="fig-caption">Figure 1: The sketch of our model</div>
          </div>

          <a class="anchor" name="submodels" id="submodels"></a>
          <h1> Submodels </h1>
          <div class="model-submodel">
            <p>
              For each possible chemical reaction process, we build a submodel to describe it.
              As long as we finally synthesize the submodels, we can get a complete model.
            </p>
            <el-collapse v-model="submodel_active" accordion>
              <el-collapse-item title="Transcription and Hill Function" name="1">
                <div>
                  <p>
                    According to central dogma, the first step of build a protein is transcription. If the transcription rate is a const, we can describe the process as <span v-katex:auto>\(\frac{\mathrm{d}mRNA}{\mathrm{d}t} = r \cdot gene\)</span>  where <span v-katex:auto>\(r\)</span> is the transcription rate.
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
                    <span v-katex:auto>\(K_m\)</span> represents Michaelis constant. Because the concentration of enzyme is not a constant in our model, we assume <span v-katex:auto>\(v_{max}\)</span> is linearly related to the concentration of enzyme.<span v-katex:auto>\(v_{max} = Enzyme \cdot v_{max,E} \)</span>.
                    The modified version is as following. <span v-katex:auto>\(v_{max,E}\)</span> represents the rate per unit enzyme.
                    <!-- <span v-katex:auto>\(\)</span> -->
                  </p>
                  <p>
                    <span v-katex:auto>\( \frac{\mathrm{d}[S]}{\mathrm{d}t} = v = v_{max,E} \cdot Enzyme \cdot \frac{[S]}{K_m + [S]} \)</span>
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
              <el-collapse-item title="Decomposition" name="5">
                <div>
                  <p>
                    The decomposition is also considers. Each compound has its own decompositon rate including gene, mRNA, protein and so on. The decomposition rate is prepresented as <span v-katex:auto>\( \frac{\mathrm{d}Protein}{\mathrm{d}t} = r_{decomposition} \cdot Protein \)</span>.
                  </p>
                </div>
              </el-collapse-item>
              <!-- <el-collapse-item title="可控 Controllability" name="4">
              </el-collapse-item> -->
            </el-collapse>
          </div>

          <a class="anchor" name="mainmodel" id="mainmodel"></a>
          <h1> Complete model </h1>
          <div class="model-complete">
            Combining all these factors above and the sketch of metabolic pathway, the whole equations are listed as following:
            <p v-html="katexhtml2"></p>
            <p>The related parameters in submodels are listed as Table. 1, 2, 3, 4, 5.</p>
            <mytable :tabledata="table_para_a"> </mytable>
            <div class="table-caption"> Table 1: Transcription Parameters </div>
            <mytable :tabledata="table_para_km"> </mytable>
            <div class="table-caption"> Table 2: Enzymatic Reaction and Transcription Factor Parameters </div>
            <mytable :tabledata="table_para_b"> </mytable>
            <div class="table-caption"> Table 3: Translation Parameters </div>
            <mytable :tabledata="table_para_k"> </mytable>
            <div class="table-caption"> Table 4: Protein Association and Disassociation Parameters </div>
            <mytable :tabledata="table_para_d"> </mytable>
            <div class="table-caption"> Table 5: Decomposition Parameters </div>
          </div>

          <a class="anchor" name="result" id="result"></a>
          <h1> Results </h1>
          <div>
            <p>
            Because of the time constraint, most parameters are estimated by ourselves and the value can be found in our <a href="https://github.com/handsome12138/IGEM_WINTER_PROJECT/tree/main/model/code" class="mylink" target="_blank"> <b>Github</b> </a>. The result are shown as following where <span style="color:green"> <b>green</b></span> curve is high <span v-katex:auto>\(TGF-\beta\)</span> situation while <span style="color:red"> <b>red</b></span> curve is low <span v-katex:auto>\(TGF-\beta\)</span> situation.We can see that the shape of curve indicates that
            <b> the amount of output <span v-katex:auto>\(RhoA\)</span> and some intermediate products like <span v-katex:auto>\(SGSS\)</span> are closely related to the input <span v-katex:auto>\(TGF-\beta\)</span></b>
            </p>
            <img :src="require('@/assets/model/model_wp.png')" class="figure">
            <div class="fig-caption"> Figure 2: Our Model Result </div>
          </div>

          <a class="anchor" name="reference" id="reference"></a>
          <h1>Refenrences</h1>
          <div>
              The model design mainly refers to <a href="http://2015.igem.org/Team:KU_Leuven/Modeling" class="mylink">2015 igem KU Leuven Model</a>
          </div>

          <a class="anchor" name="model-KU_Leuven" id="model-KU_Leuven"></a>
          <h1> Appendix: Reproduction of 2015 igem KU Leuven Model </h1>
          <div class="model-KU">
            <p>
            As their model is described in detail in their own wiki, I am going to share the problems I met when I was trying to reproduce their results.
            </p>
            <p>
              First, there are some mistakes in their ODE. For example, the mistake of writing <span v-katex:auto>\(k_{+}\)</span> as <span v-katex:auto>\(k_{-}\)</span>. According to the symmetry of the formula, it is not hard to find these mistakes.
            </p>
            <p>
              Besides, the most important problem is the lack of parameters. Except for the parameters that are vaguely described, there are some parameters in the model can not be found according to their description like the initial value of the ODE.
            </p>
            <p>
              So, I estimated some parameters and their result figure and mine are in the following respectively(cf., Fig. 3,4). Though the order of magnitudes differ from their results, the shape of each curve remains the same. 
              The code and the estimated parameters can be found in our <a href="https://github.com/handsome12138/IGEM_WINTER_PROJECT/tree/main/KULmodel/pythoncode" class="mylink" target="_blank"> <b>Github</b> </a>
            </p>
            <img :src="require('@/assets/model/KUL_model_ori.png')" class="figure">
            <div class="fig-caption"> Figure 3: Original Result </div>
            <br>
            <img :src="require('@/assets/model/KUL_model_mine.jpg')" class="figure">
            <div class="fig-caption"> Figure 4: Our Result </div>
          </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import VueKatex from 'vue-katex'
import katex from 'katex'
import 'katex/dist/katex.min.css'
import sidenav from '@/components/Side_nav.vue'
import mytable from "@/components/Mytable.vue"

Vue.use(VueKatex, {
  globalOptions: {
    // ... Define globally applied KaTeX options here
  }
})

export default {
  data () {
    return {
      mylatex: 'test latex a = \sqrt{3}',
      submodel_active: 1,
      pathway_sketch: require('@/assets/model/pathway.jpg'),
      // pathway_sketch: require("@/assets/model/pathway.png"),
      katexhtml1: katex.renderToString(String.raw`
      \left\{ \begin{aligned}
        &\frac{\mathrm{d}A}{\mathrm{d}t} &=& -k_{associate} \cdot A \cdot B + k_{disassociate} \cdot A/B \\
        &\frac{\mathrm{d}B}{\mathrm{d}t} &=& -k_{associate} \cdot A \cdot B + k_{disassociate} \cdot A/B \\
        &\frac{\mathrm{d}A/B}{\mathrm{d}t} &=& + k_{associate} \cdot A \cdot B - k_{disassociate} \cdot A/B 
      \end{aligned} \right.
      `),
      katexhtml2: katex.renderToString(String.raw`
      \left\{
      \begin{array}{lll}
        \frac{\mathrm{d} mGrb2 }{\mathrm{d}t}  & = &  \alpha_{TGFBR1} \cdot gTGFBR1 - d_{mTGFBR1} \cdot mTGFBR1 \\[.5ex] 
        \frac{\mathrm{d} TGFBR1 }{\mathrm{d}t}  & = &  \beta_{TGFBR1} \cdot mTGFBR1 - d_{TGFBR1} \cdot mTGFB1 - v_{max,TGFBR1-P} \frac{TGF-\beta/TGFBR2 \cdot TGFBR1}{K_{m, TGFBR1} + TGFBR1} \\[.5ex] 

        \frac{\mathrm{d} mTGFBR2 }{\mathrm{d}t}  & = &  \alpha_{TGFBR2} \cdot gTGFBR2 - d_{mTGFBR2} \cdot mTGFBR2 \\[.5ex] 
        \frac{\mathrm{d} TGFBR2 }{\mathrm{d}t}  & = &  \beta_{TGFBR2} \cdot mTGFBR2 - d_{TGFBR2} \cdot mTGFBR2 \\ & & - k_{as,TGFBR2} \cdot TGF-\beta \cdot TGFBR2 + k_{dis,TGFBR2} \cdot TGF-\beta/TGFBR2\\[.5ex] 
        
        \frac{\mathrm{d} TGF-\beta/TGFBR2 }{\mathrm{d}t}  & = &  k_{as,TGFBR2} \cdot TGF-\beta \cdot TGFBR2 - k_{dis,TGFBR2} \cdot TGF-\beta/TGFBR2  \\&& - d_{TGF-\beta/TGFBR2} * TGF-\beta/TGFBR2 \\[.5ex]
        
        \frac{\mathrm{d} TGFBR1-P }{\mathrm{d}t}  & = &  v_{max,TGFBR1-P} \frac{TGF-\beta/TGFBR2 \cdot TGFBR1}{K_{m, TGFBR1} + TGFBR1} - d_{TGFBR1-P} \cdot TGFBR1-P\\[.5ex]
        
        \frac{\mathrm{d} mSos }{\mathrm{d}t}  & = &  \alpha_{Sos} \frac{1}{1 + (K_{d,pSos}/(TGFBR1-P))^{n_{pSos}}} \cdot gSos - d_{mSos} \cdot mSos \\[.5ex]
        \frac{\mathrm{d} Sos }{\mathrm{d}t}  & = &  \beta_{Sos} \cdot mSos - d_{Sos} \cdot Sos - k_{as,SGSS} \cdot Sos \cdot Grb2 \cdot Shc \cdot Sara + k_{dis,SGSS} \cdot SGSS \\[.5ex]

        
        \frac{\mathrm{d} mGrb2 }{\mathrm{d}t}  & = &  \alpha_{Grb2} \frac{1}{1 + (K_{d,pGrb2}/(TGFBR1-P))^{n_{pGrb2}}} \cdot gGrb2 - d_{mGrb2} \cdot mGrb2 \\[.5ex]
        \frac{\mathrm{d} Grb2 }{\mathrm{d}t}  & = &  \beta_{Grb2} \cdot mGrb2 - d_{Grb2} \cdot Grb2 - k_{as,SGSS} \cdot Sos \cdot Grb2 \cdot Shc \cdot Sara + k_{dis,SGSS} \cdot SGSS \\[.5ex]


        \frac{\mathrm{d} mShc }{\mathrm{d}t}  & = &  \alpha_{Shc} \frac{1}{1 + (K_{d,pShc}/(TGFBR1-P))^{n_{pShc}}} \cdot gShc - d_{mShc} \cdot mShc \\[.5ex]
        \frac{\mathrm{d} Shc }{\mathrm{d}t}  & = &  \beta_{Shc} \cdot mShc - d_{Shc} \cdot Shc - k_{as,SGSS} \cdot Sos \cdot Grb2 \cdot Shc \cdot Sara + k_{dis,SGSS} \cdot SGSS \\[.5ex]

        
        \frac{\mathrm{d} mSara }{\mathrm{d}t}  & = &  \alpha_{Sara} \frac{1}{1 + (K_{d,pSara}/(TGFBR1-P))^{n_{pSara}}} \cdot gSara - d_{mSara} \cdot mSara \\[.5ex]
        \frac{\mathrm{d} Sara }{\mathrm{d}t}  & = &  \beta_{Sara} \cdot mSara - d_{Sara} \cdot Sara - k_{as,SGSS} \cdot Sos \cdot Grb2 \cdot Shc \cdot Sara + k_{dis,SGSS} \cdot SGSS \\[.5ex]

        \frac{\mathrm{d} SGSS }{\mathrm{d}t}  & = &  k_{as,SGSS} \cdot Sos \cdot Grb2 \cdot Shc \cdot Sara - k_{dis,SGSS} \cdot SGSS - d_{SGSS} * SGSS\\[.5ex]

        \frac{\mathrm{d} mSmad2 }{\mathrm{d}t}  & = &  \alpha_{Smad2} \frac{1}{1 + (K_{d,Smad2}/SGSS)^{n_{Smad2}}} \cdot gSmad2 - d_{mSmad2} \cdot mSmad2 \\[.5ex]
        \frac{\mathrm{d} Smad2 }{\mathrm{d}t}  & = &  \beta_{Smad2} \cdot mSmad2 - d_{Smad2} \cdot Smad2 - v_{max,Smad2-P}\frac{SGSS \cdot Smad2}{K_{m, Smad2} + Smad2} \\[.5ex]
        
        \frac{\mathrm{d} Smad2-P }{\mathrm{d}t}  & = & v_{max,Smad2-P}\frac{TGFBR1-P \cdot Smad2}{K_{m, Smad2} + Smad2} - d_{Smad2-P} \cdot Smad2-P\\[.5ex]
        
        \frac{\mathrm{d} mAI-2 }{\mathrm{d}t}  & = &  \alpha_{AI-2} \frac{1}{1 + (K_{d,AI-2}/Smad2-P)^{n_{AI-2}}} \cdot gAI-2 - d_{mAI-2} \cdot mAI-2 \\[.5ex]
        \frac{\mathrm{d} AI-2 }{\mathrm{d}t}  & = &  \beta_{AI-2} \cdot mAI-2 - d_{AI-2} \cdot AI-2 \\&& - k_{as,AI-2/Cqs-S} \cdot AI-2 \cdot Cqs-S + k_{dis,AI-2/Cqs-S} \cdot AI-2/Cqs-S\\[.5ex]
        
        \frac{\mathrm{d} mCqs-S }{\mathrm{d}t}  & = &  \alpha_{Cqs-S} \cdot gCqs-S - d_{mCqs-S} \cdot mCqs-S \\[.5ex]
        \frac{\mathrm{d} Cqs-S }{\mathrm{d}t}  & = &  \beta_{Cqs-S} \cdot mCqs-S - d_{Cqs-S} \cdot Cqs-S \\&&  - k_{as,AI-2/Cqs-S} \cdot AI-2 \cdot Cqs-S + k_{dis,AI-2/Cqs-S} \cdot AI-2/Cqs-S \\[.5ex]
        
        \frac{\mathrm{d} AI-2/Cqs-S }{\mathrm{d}t}  & = &  k_{as,AI-2/Cqs-S} \cdot AI-2 \cdot Cqs-S - k_{dis,AI-2/Cqs-S} \cdot AI-2/Cqs-S \\&& -d_{AI-2/Cqs-S} AI-2/Cqs-S\\[.5ex]
        
        \frac{\mathrm{d} mRhoA }{\mathrm{d}t}  & = &  \alpha_{RhoA} \frac{1}{1 + (K_{d,pLuxU}/(AI-2/Cqs-S))^{n_{pLuxU}}} \cdot gRhoA - d_{mRhoA} \cdot mSmad2 \\[.5ex]
        \frac{\mathrm{d} RhoA }{\mathrm{d}t}  & = &  \beta_{RhoA} \cdot mRhoA - d_{RhoA} \cdot RhoA \\[.5ex]
        
        
        % \frac{\mathrm{d} mMARKER }{\mathrm{d}t}  & = &  \alpha_{MARKER} \cdot gMARKER - d_{mMARKER} \cdot mMARKER \\[.5ex]
        % \frac{\mathrm{d} MARKER }{\mathrm{d}t}  & = &  \beta_{MARKER} \cdot mMARKER - d_{MARKER} \cdot MARKER \\[.5ex]
    \end{array}\right.
      `),
      // katextabal_d:katex.renderToString(String.raw`
      // `),
      mynav: [
        {
          name: 'Notations',
          id: 'notation'
        },
        {
          name: 'Basic View',
          id: 'basic'
        },
        {
          name: 'Submodels',
          id: 'submodels'
        },
        {
          name: 'Complete Model',
          id: 'mainmodel'
        },
        {
          name: 'Results',
          id: 'result'
        },
        {
          name: 'References',
          id: 'reference'
        },
        {
          name: 'KU Leuven Model',
          id: 'model-KU_Leuven'
        }
      ],
      table_para_a:[{
          para:'α_TGFBR1',
          desc:'transcription rate of TGFBR1',
        },{
          para:'α_TGFBR2',
          desc:'transcription rate of TGFBR2',
        },{
          para:'α_Sos',
          desc:'transcription rate of Sos',
        },{
          para:'α_Grb2',
          desc:'transcription rate of Grb2',
        },{
          para:'α_Shc',
          desc:'transcription rate of Shc',
        },{
          para:'α_Sara',
          desc:'transcription rate of Sara',
        },{
          para:'α_Smad2',
          desc:'transcription rate of Smad2',
        },{
          para:'α_AI-2',
          desc:'transcription rate of AI-2',
        },{
          para:'α_Cqs-S',
          desc:'transcription rate of Cqs-S',
        },{
          para:'α_RhoA',
          desc:'transcription rate of RhoA',
        }
      ],
      table_para_b:[{
          para:'β_TGFBR1',
          desc:'translation rate of TGFBR1',
        },{
          para:'β_TGFBR2',
          desc:'translation rate of TGFBR2',
        },{
          para:'β_Sos',
          desc:'translation rate of Sos',
        },{
          para:'β_Grb2',
          desc:'translation rate of Grb2',
        },{
          para:'β_Shc',
          desc:'translation rate of Shc',
        },{
          para:'β_Sara',
          desc:'translation rate of Sara',
        },{
          para:'β_Smad2',
          desc:'translation rate of Smad2',
        },{
          para:'β_AI-2',
          desc:'translation rate of AI-2',
        },{
          para:'β_Cqs-S',
          desc:'translation rate of Cqs-S',
        },{
          para:'β_RhoA',
          desc:'translation rate of RhoA',
        }
      ],
      table_para_k:[{
          para:'k_as,TGFBR2',
          desc:'association rate of TGF-β and TGFBR2',
        },{
          para:'k_dis,TGFBR2',
          desc:'disassociation rate of TGF-β and TGFBR2',
        },{
          para:'k_as,SGSS',
          desc:'association rate of SGSS(Sos/Grb2/Shc/Sara)',
        },{
          para:'k_dis,SGSS',
          desc:'disassociation rate of SGSS(Sos/Grb2/Shc/Sara)',
        },{
          para:'k_as,AI-2/Cqs-S',
          desc:'association rate of AI-2 and Cqs-S',
        },{
          para:'k_dis,AI-2/Cqs-S',
          desc:'disassociation rate of AI-2/Cqs-S',
        }
      ],
      table_para_d:[{
          para:'d_mTGFBR1',
          desc:'decomposition rate of TGFBR1 mRNA',
        },{
          para:'d_mTGFBR2',
          desc:'decomposition rate of TGFBR2 mRNA',
        },{
          para:'d_mSos',
          desc:'decomposition rate of Sos mRNA',
        },{
          para:'d_mGrb2',
          desc:'decomposition rate of Grb2 mRNA',
        },{
          para:'d_mShc',
          desc:'decomposition rate of Shc mRNA',
        },{
          para:'d_mSara',
          desc:'decomposition rate of Sara mRNA',
        },{
          para:'d_mSmad2',
          desc:'decomposition rate of Smad2 mRNA',
        },{
          para:'d_mAI-2',
          desc:'decomposition rate of AI-2 mRNA',
        },{
          para:'d_mCqs-S',
          desc:'decomposition rate of Cqs-S mRNA',
        },{
          para:'d_mRhoA',
          desc:'decomposition rate of RhoA mRNA',
        },{
          para:'d_TGFBR1',
          desc:'decomposition rate of TGFBR1',
        },{
          para:'d_TGFBR2',
          desc:'decomposition rate of TGFBR2',
        },{
          para:'d_Sos',
          desc:'decomposition rate of Sos',
        },{
          para:'d_Grb2',
          desc:'decomposition rate of Grb2',
        },{
          para:'d_Shc',
          desc:'decomposition rate of Shc',
        },{
          para:'d_Sara',
          desc:'decomposition rate of Sara',
        },{
          para:'d_Smad2',
          desc:'decomposition rate of Smad2',
        },{
          para:'d_AI-2',
          desc:'decomposition rate of AI-2',
        },{
          para:'d_Cqs-S',
          desc:'decomposition rate of Cqs-S',
        },{
          para:'d_RhoA',
          desc:'decomposition rate of RhoA',
        },{
          para:'d_TFGBR1-P',
          desc:'disassociation rate of TGFBR1-P',
        },{
          para:'d_Smad2-P',
          desc:'disassociation rate of Smad2-P',
        },{
          para:'d_TGF-β/TGFBR2',
          desc:'disassociation rate of TGF-β/TGFBR2',
        },{
          para:'d_SGSS',
          desc:'disassociation rate of SGSS',
        },{
          para:'d_AI-2/Cqs-S',
          desc:'disassociation rate of AI-2/Cqs-S',
        }
      ],
      table_para_km:[{
          para:'v_max,TGFBR1-P',
          desc:'max phosphorylation rate of TGFBR1 per unit enzyme ',
        },{
          para:'K_m,TGFBR1',
          desc:'Michaelis constant of phosphorylation of TGFBR1',
        },{
          para:'v_max,Smad2-P',
          desc:'max phosphorylation rate of Smad2 per unit enzyme ',
        },{
          para:'K_m,Smad2',
          desc:'Michaelis constant of phosphorylation of Smad2',
        },{
          para:'K_d,Smad2',
          desc:'dissociation constant of pSmad2 and SGSS(transcription factor) when transcripting Smad2',
        },{
          para:'n_Smad2',
          desc:'Hill constant of pSmad2 and SGSS(transcription factor) when transcripting Smad2',
        },{
          para:'K_d,AI-2',
          desc:'dissociation constant of pRhoA and Smad2-P(transcription factor) when transcripting AI-2',
        },{
          para:'n_AI-2',
          desc:'Hill constant of pRhoA and Smad2-P(transcription factor) when transcripting AI-2',
        },{
          para:'K_d,pLuxU',
          desc:'dissociation constant of pLuxU and AI-2/Cqs-S(transcription factor) when transcripting RhoA',
        },{
          para:'n_pLuxU',
          desc:'Hill constant of pLuxU and AI-2/Cqs-S(transcription factor) when transcripting RhoA',
        },{
          para:'K_d,pSos',
          desc:'dissociation constant of pSos and TGFBR1-P(transcription factor) when transcripting Sos',
        },{
          para:'n_pSos',
          desc:'Hill constant of pSos and TGFBR1-P(transcription factor) when transcripting Sos',
        },{
          para:'K_d,pGrb2',
          desc:'dissociation constant of pGrb2 and TGFBR1-P(transcription factor) when transcripting Grb2',
        },{
          para:'n_pGrb2',
          desc:'Hill constant of pGrb2 and TGFBR1-P(transcription factor) when transcripting Grb2',
        },{
          para:'K_d,pShc',
          desc:'dissociation constant of pShc and TGFBR1-P(transcription factor) when transcripting Shc',
        },{
          para:'n_pShc',
          desc:'Hill constant of pShc and TGFBR1-P(transcription factor) when transcripting Shc',
        },{
          para:'K_d,pSara',
          desc:'dissociation constant of pSara and TGFBR1-P(transcription factor) when transcripting Sara',
        },{
          para:'n_pSara',
          desc:'Hill constant of pSara and TGFBR1-P(transcription factor) when transcripting Sara',
        }
      ],
    }
  },
  components: {
    sidenav: sidenav,
    mytable,
  },
  mounted () {
    var item, index
    // console.log(this.$refs.collapse)
    // for (item of this.$refs.collapse.$children){
    //   console.log(item)
    //   item.$el.style.cssText = 'font-size:1rem';
    // }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.anchor{
  position: relative;
  top: -44px; // 偏移值
  display: block;
  height: 0;
  overflow: hidden;
}
.pathway-sketch{
  width:100%;
}
.figure{
  width:100%;
}
.model{
  display: flex;
  .sidenav{
    width:15%;
  }
  .model-body{
    margin:0% 5% 5% 5%;
    h1{
      text-align: center;
      margin-top: 5%;
      margin-bottom: 2%;
    }
    .model-submodel{
      margin-left:10%;
      margin-right:10%;
    }
  }
}
.el-collapse-item div .el-collapse-item__content div p{
  font-size:1rem
}
/deep/ .el-collapse-item__header{
  font-size:1.2rem;
  font-weight: bold;
}

.mylink{
  // font-size: 13px;
  // color: black;
  // font-family: 'Open Sans', sans-serif;
  font-weight: bold;
  letter-spacing: 1px;
  transition: color 100ms linear;
  text-decoration: none;
  &:link, &:visited{
    color:black
  }
  &:hover, &:active{
    color: yellowgreen
  }
}
.fig-caption{
  text-align:center;
  margin:auto;
  font-weight: bold;
}
.table-caption{
  text-align:center;
  margin:auto;
  padding-top: 10px;
  padding-bottom:25px;
  font-weight: bold;
}
</style>
