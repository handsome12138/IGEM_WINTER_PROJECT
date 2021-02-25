<template>
 <div class="row" style="text-align:left">
  <!--<aside class="sidenav">
	<ul class="leftnav">
		<li class="nav-item">
			<a class="nav-link" href="#Subtitle1">Lab safety</a>
		</li>
		<li class="nav-item">
			<a class="nav-link" href="#Subtitle2">Project Design</a>
		</li>
		<li class="nav-item">
		<a class="nav-link" href="#Subtitle3">References</a>
		</li>
	</ul>
  </aside>   -->

  <sidenav :navs="navs" class="sidenav"></sidenav>

  <main>
	<div class="pageName">
		<h1>Design</h1>
		<div class="divider"></div>
	</div>

	<section>
		<h3>Integrated Signaling Pathway Modules In Each Chamber</h3>
		<p>
			To enable the biologists to build intercellular synthetic biology circuits, we proposed an signaling
pathway system. This is a toolkit includes a series of cells with integrated signaling pathway
modules. Each cell has two or three layers that are used for information processing. These are
input, hidden, and output layer (Fig. 1).
		</p>
		<figure>
			<img :src="sys" style="width: 60%" />
		</figure>
		<figcaption>Figure 1. Construction of a signaling pathway system.</figcaption>
	</section>
	<hr>

	<section>
		<a class="anchor1" name="signal" id="signal"></a>
		<h2>Signaling Pathways</h2>
		<h3>Chosen Pathways</h3>
		<p>
			We decide to use the specific interactions between ligands and receptors to trigger each signaling
pathways. Here are three ligands we had chosen to triggering important signaling pathways for
further research of HCC.
		</p>
		<h4>TGF-β</h4>
		<p>Receptor：TGFBR2</p>
		<p>Downstream: TGFB1→Smads→RhoA</p>
		<p>TGF-beta signaling is involved in the regulation of proliferation, differentiation and survival/or
apoptosis of many cells, including glioma cells. TGF-beta acts via specific receptors activating
multiple intracellular pathways resulting in phosphorylation of receptor-regulated Smad2/3
proteins that associate with the common mediator, Smad4. Such complex translocates to the
nucleus, binds to DNA and regulates transcription of many genes. Furthermore, TGF-beta -
activated kinase-1 (TAK1) is a component of TGF-beta signaling and activates mitogen-activated
protein kinase cascades. Negative regulation of TGF-beta /Smad signaling may occur through the
inhibitory Smad6/7. Increased expression of TGF-beta 1-3 correlates with a degree of malignancy
of human gliomas. TGF-beta may contribute to tumor pathogenesis by direct support of tumor
growth, self-renewal of glioma initiating stem cells and inhibiting of anti-tumor immunity.
Inhibitors of TGF-beta signaling reduce viability and invasion of gliomas in animal models and
show promises as novel, potential anti-tumor therapeutics.</p>
		<p>
			TGF-beta superfamily of cytokines bind to receptors at the cell surface, and recruit two type I
receptors and two type II receptors forming a tetrameric complex. Activated TGF-beta superfamily
receptors induce a series of phosphorylation cascade, from receptor phosphorylation to
subsequent phosphorylation and activation of downstream signal transducer R-Smads (receptor activated Smads). Phosphorylated R-Smads form a heteroligomeric (often trimeric) complex with
Smad4 (Co-Smad). The Smad complex is imported into the nucleus and regulates the expression
of target genes by direct binding to the target gene promoter and/or through the interaction with
transcriptional cofactors in a cell-type-specific manner.
		</p>
		<h5>The chamber design of TGF-β</h5>
		<figure>
			<img :src="beta" style="padding-top: 3%; width: 70%; -webkit-width: 50%;" />
		</figure>
		<figcaption>Figure 2. These pictures show the design of the cells in each chamber from the upper level to the
bottom level. Cells in each chamber have to secrete different protein and signaling molecule to
make the TGF-β signaling pathway be in motion. We use the ‘AND’ gate to simulate the poccess of
complex formation.</figcaption>
		<h4>Wnt-β-catenin</h4>
		<p>Receptor：FZD-5</p>
		<p>Downstream：DVL-1——β-catenin（CTNNB1）</p>
		<p>Wnt pathways are involved in the control of gene expression, cell behavior, cell adhesion, and cell
polarity. The Canonical (β-Catenin-Dependent) Wnt Signaling pathway is the best studied of the
Wnt pathways and is highly conserved through evolution. In this pathway, Wnt signaling inhibits
the degradation of β-catenin, which can regulate transcription of a number of genes. Wnt
signaling is activated via ligation of Wnt proteins to their respective dimeric cell surface receptors
composed of the seven transmembrane frizzled proteins and the LRP5/6. Upon ligation to their
receptors, the cytoplasmic protein disheveled (Dvl) is recruited, phosphorylated and activated.
Activation of Dvl induces the dissociation of GSK-3β from Axin and leads to the inhibition of GSK-
3β. Next, the phosphorylation and degradation of β-catenin is inhibited as a result of the
inactivation of the "destruction complex". Subsequently, stabilized β-catenin translocates into the
nucleus leading to changes in different target gene expressions.</p>
		
		<h5>The chamber design of Wnt-β-catenin</h5>
		<figure>
			<img :src="wnt" style="padding-top: 3%; width: 60%; -webkit-width: 50%;" />
		</figure>
		<figcaption>Figure 3. It shows the simulation of Wnt -β-catenin pathway in two chambers.</figcaption>

		<h4>PI3K</h4>
		<p>Upon growth factor stimulation and subsequent activation of receptor tyrosine kinases (RTKs),
class IA PI3Ks, consisting of p110α/p85, p110β/p85 and p110δ/p85, are recruited to the
membrane via interaction of the p85 subunit to the activated receptors directly (e.g.PDGFR) or to
adaptor proteins associated with the receptors (e.g. insulin receptor substrate 1, IRS1). The
activated p110 catalytic subunit converts phosphatidylinositol-4,5-bisphosphate (PIP2) to
phosphatidylinositol-3,4,5-triphosphate (PIP3) at the membrane, providing docking sites for
signaling proteins with pleckstrin-homology (PH) domains including the phosphoinositide-dependent kinase 1 (PDK1) and the Ser-Thr kinase
AKT. The activated AKT elicits a broad spectrum of downstream signaling events. Class IB PI3K
(p110γ/p101) can be activated directly by G-protein coupled receptors (GPCRs) through interacting
with the Gβγ subunit of trimeric G proteins. The p110β and p110δ can also be activated by GPCRs.
PTEN (phosphatase and tensin homologue) antagonizes the PI3K action by dephosphorylating
PIP3.</p>
		<p>Phosphatidylinositol-3 kinase (PI3K) is one of the most important regulatory proteins that is
involved in different signaling pathways and controlling of key functions of the cell. The PI3K
pathway is deregulated in the majority of human cancers. In sporadic tumors and in cancer cell
lines, there are numerous other genetic and epigenetic changes that have been extensively
documented by the human cancer genome project</p>
		
		<h5>The chamber design of PI3K pathway</h5>
		<figure>
			<img :src="pik" style="padding-top: 3%; width: 60%; -webkit-width: 50%;" />
		</figure>
		<figcaption>Figure 4. The chamber design of PI3K pathway</figcaption>
	</section>
	<hr>

	<section>
		<a class="anchor1" name="intercom" id="intercom"></a>
		<h2>Intercelluar Communication</h2>
		<p>As it's not proper to turn all the proteins that we want to study into a secreting type, we decide to
make intercelluar communication pathways to 'translate' our information.</p>
		<h3>The Secreting System</h3>
		<p>
			As We want to allow cells in the chamber be able to secret the proteins in the signal pathways and
most signal pathways that we want to discover are common paths which typically expressed in
eukaryotes.
		</p>
		<p>
			To reach our goal, we want to allow cells in the chamber be able to secret the proteins in the
signal pathways. Besides, as most signal pathways that we want to discover are common paths
which typically expressed in eukaryotes, we have to choose a suitable way to get all the proteins
be produced in a right space structure and well modified. Considering all these needs, we decide
to choose <i>Pichia pastoris (P. pastoris)</i> , a kind of saccharomycetes, to produce the proteins that we
need. This type of saccharomycetes has already shown great performance on keeping the
secreting protein to stay in a right glycosylated modified state and folding level (Ahmad et al.,
2014).
		</p>
		<p>
			By transfecting protein-encoded plasmid into it, they gain the ability to synthesize the proteins
that we need. Besides, in order to get cells in different chambers be able to communicate with
each other, we construct a signal transmission system.
		</p>
		
		
		<h4>Input Layer</h4>
		<p>
			The input layer enables a cell to sense the environmental signals using customized signal
pathways. The signals can be autoinducers, antigens, and changes of the physical environment.
Like a common signaling pathway, the input layer includes the receptors, kinases, transcription
factors, and promotors. For example, Krawczyk et al. (Krawczyk et al., 2020) proposed an
electrogenetic interface that used digital electronic input to program cellular behavior. They
described a signal pathway with a voltage-gated channel CaV1,2 (receptor), NFAT (kinase), and
PNFAT3 (promotor). Similarly, Aurand and March designed a biological sensor that can react to
cytokine (Aurand & March, 2016). Some synthetic circuits can even react to UV (Ulm & Jenkins,
2015). These signal pathways can be reused in the input layer. Scientists can also introduce
multiple signaling pathways to the input layer, which can make it possible to sense a variety of
environmental signals.
		</p>
		<h4>Hidden Layer (optional)</h4>
		<div style="display: flex;">
			<div style="width: 120%;">
				<p>
			In the hidden layer, we utilized protein-based logic gates proposed by Chen et al. (Chen et al.,
2002) to process complex information from the input layer. These logic gates include AND, OR,
and NOT gate, constructed by a series of heterodimeric molecules. For example, given
hypothetical heterodimer pairs A: A’, B: B’ (here “:” denotes noncovalent interaction), a NOT gate
can be constructed by A’, B’, and A’–B (here “–” denotes covalent interaction), where B’ is binding to
a repressor. When the signal molecule A’–B occurs, a simple system A: A’ –B: B’ forms, which
inhibits the gene expression (Fig. 5). Other logic gates are designed according to similar
mechanisms. These logic gates can be used repetitively to construct complex information
processing systems.
				</p></div>
				<div style="margin-left: 5%;">
		<figure>
			<img :src="gate" style="width: 80%;height:60%; -webkit-width: 50%;"/>
		</figure>
		<figcaption>Figure 5. The design of NOT gate.</figcaption></div>
		</div>
		
		<h4>Output Layer</h4>
		<p>
			This layer is used to customize cell behavior by using various structural and report genes. Genes
that produces intercellular signal molecules should also be integrated into this layer in order to
communicate the next cell.
		</p>
		<p>
			Based on the above-mentioned theory, we make our own design by using some pathways which
exist in bacterial carrying the responsibility of quorum sensing. Therefore, we are able to realize
the logic gate in the chosen signaling pathways. It will be shown in the following parts.
		</p>
		<p>
			As for more complex logic relationship, we could also use some hardware methods to control the
flow such as using micro-valves to control the flow on/off state.
		</p>
		<h3>Intercellular Communication</h3>
		<p>As the proteins in signal pathways are typically non-secreting proteins, we decide to use a transfer
system to let it's information strength to be passed to the next level of chamber. We try to find
possible communication method from some intercellular communication pathways and we finally
decide to use AI-2 and CAI-I (Ng & Bassler, 2009). The reason why we use two types of signal
pathways is that we don't want the signal molecules secreted by cells in adjacent chambers will
interrupt with each other. So we let one level of chamber has the ability to get the signal from the
prior level and secret a different signal molecule to the next.
		</p>
		<p>As for AI-2 signal pathway, it's detected by sensor kinases CqsS (Schauder et al., 2001). When they
combined with each other, it will trigger the pLuxU to express the protein (Chen et al., 2002). As
for CAI-I signal pathway works similar to AI-2 signal pathway. It's detected by sensor kinase Lux-Q
(Miller et al., 2002). By using specific transcriptional regulatory factors, we make it come true to let the signal transfer from the original signal pathway to an intercellular communication way.
		</p>
		<figure>
			<img :src="f3" style="width: 60%" />
		</figure>
		<figcaption>Figure 6. AI-2 pathway. Left: the first level chamber. Right: the next level chamber; X protein
means the protein which is in the signal pathway that we want to simulate. X is expressed inside
the present chamber. X+1 protein means the protein which on the next level of X protein in the
signal pathway. X+1 protein is expressed inside the next chamber.</figcaption>
		<figure>
			<img :src="f4" style="width: 60%" />
		</figure>
		<figcaption>Figure 7. CAI-I pathway. Left: the first level chamber. Right: the next level chamber</figcaption>

	</section>
	<hr>

	<section>
		<a class="anchor1" name="imacc" id="imacc"></a>
		<h2>Improve Accuracy</h2>
		<p>As the signaling molecules are secreted into the surrounding environment and they will flow with
the fluid, we have to consider the possible interruption to the next level caused wrong signal
transmission. Besides, we also have to consider that the increase of the amount of cells will also
lead to interference of the total secretion, making an excessively strong signal strength.
		</p>
		<h3>Amount Control</h3>
		<p>In most researches, scientists normally try to figure out the relationship between the variance and
the pathway by testing the amount of the molecules of the signal pathway. However, as we try to
use chambers in which dozens of cells are cultivated and secreting the proteins to simulate how
the signal pathways carry on, the amount of the total cells may increase due to the cell division.
Under such circumstance, the amount of the molecules will also show an increase. Therefore, we
are not able to make a conclusion of the final results as we don't know whether the difference is
caused by the variance we applied or the cell growth.
		</p>
		<p>To solve this problem, we are triggered by the quorum sensing system in bacteria. By using QS
system, we are able to control the amount of cells in one chamber to a fixed range.
		</p>
		<p>We create a set of pathways which are able to sense the amount of the signal molecules in the
surrounding environment. When the level reaches to a threshold value which indicate the cell
amount increase, the suicide mechanism will be triggered and cytotoxic protein ccdB will be
expressed, killing the cell. Therefore, the total amount of the cells in one chamber will be
controlled. We firstly use C14-HSL/LuxI/VjbR/ccdB QS system to realize the design (Ball et al.,
2017).
		</p>
		<figure>
			<img :src="f5"  style="width: 60%" />
		</figure>
		<figcaption>Figure 8. C14-HSL/LuxI/VjbR/ccdB system</figcaption>
		<p>Moreover, as the signal molecules are secreted into the surrounding environment, it's possible
that the signal molecules will flow into the next chamber. So if only one type of system is used,
the regular growth of cells in the next chamber will be interrupted. Therefore, we decide to use
different signal molecules in two adjacent chambers. Here we find Swr QS system as another one
to control the growth (Khajanchi et al., 2009).
		</p>
		<figure>
			<img :src="f6" style="width: 60%"  />
		</figure>
		<figcaption>Figure 9. C4-HSL/SwrI/SwrR/ccdB system</figcaption>
		<figure>
			<img :src="f7" style="width: 60%"  />
		</figure>
		<figcaption>Figure 10. By changing the signal molecules, adjacent signal molecules will not interrupt with each other.</figcaption>

	</section>

		<section>
		<a class="anchor1" name="imue" id="imue"></a>
		<h2>Improve Usage Experience</h2>
		<p>We want the user of our products to have a direct judgment to their results, so we make a design
which looks like reversed 'traffic lights'. The stronger the signal strength is in a specific chamber,
the intensity of the green fluorescence of this chamber will be lower. Therefore, the user can have
a rough estimate to the result or they can use luminometer to have an accurate evaluation.
		</p>
		<h3>Recording System</h3>
		<p>Our recording system includes a pair of nearly identical recording plasmids, R1 and R2, that differ
only by 3 nucleotides in an EGFP gene that encodes enhanced green fluorescent protein. The
EGFP gene in R1 expresses full-length fluorescent protein, whereas the EGFP gene in R2 contains
a premature stop codon and cannot produce fluorescent protein (Fig. 11)
		</p>
		<p>The R1/R2 ratio serves as the information carrier that reflects the signal of interest in an analog
mode. To convert the signal of interest into an R1/R2 ratio change, a Cas9-sgRNA pair induced by
the stimulus cleaves plasmid R1 but not R2. The expression of the Cas9-sgRNA complex is
controlled by the signal of interest and results in R1 depletion in the bacteria. (Tang & Liu, 2018)
		</p>
		
		<figure style="display: flex;">
			<img :src="f8" style="width: 80%;height: 20%;margin-left: 10%;" />
			
		</figure>
		<figcaption>Figure 11. Both R1 and R2 confer resistance to different antibiotics. Which means the memory system can be rewritten by adding specific antibiotics which adjust the ratio of R1:R2 to the default.</figcaption>

	</section>

	<section>
		<a class="anchor1" name="plasmid" id="plasmid"></a>
		<h2>Chosen Plasmid</h2>
		<h3>Plasmids We Use</h3>
		<p>As we focus on some typical types of signal pathways which make difference in Eukaryotes,
especially in human, we have to find an expression system which can efficiently express
Eukaryotes genes inside our saccharomycetes. By scanning previous studies, we find one kind of
plasmid which has already been widely used in <i>P.pastoris</i> expression systems. It's pPIC9k (Scorer
et al., 1994). Researchers have tried to clone multiple types of eukaryotes genes into this plasmid,
such as myostatin propeptide (Du et al., 2015), recombinant human-source collagen (侯增淼 et al.,
2019). In all these studies, this system has shown great maneuverability as well as high expression
efficiency. Therefore, we decide to use it to express all proteins of the signal pathway.
		</p>
		<figure>
			<img :src="f9" style="width: 60%" />
		</figure>
		<figcaption>Figure 12. The plasmid profile of pPIC9k</figcaption>
		<p>Besides, our design also contains some prokaryotic genes to express. These genes play roles in
the QS and intercellular communication parts. So we have to find ways to allow prokaryotic genes
to be expressed stably inside <i>P.pastoris</i>. Therefore, we decide to use the most common shuffle
plasmid, pCMV-HA. It has already been widely used to allow <i>E.coli</i> genes steadily expressed in
yeast and there have already been much mature products in the market.
		</p>
		
		<figure>
			<img :src="f10" style="width: 60%" />
		</figure>
		<figcaption>Figure 13. The plasmid profile of pCMV-HA</figcaption>
	</section>
	<hr>


	<router-link to='/Description' id="ljump" class="ljump"><p id="ljumpto">Description</p><p id="larrow"><-</p></router-link>
	<router-link to='/Hardware' id="jump" class="jump"><p id="arrow">-></p><p id="jumpto">Hardware</p></router-link>

	<section class="ref">
	<h2>Bibliography</h2>
	<ol>
		<li id="ref1">Ahmad, M., Hirz, M., Pichler, H., & Schwab, H. (2014). Protein expression in Pichia pastoris: Recent achievements and perspectives for heterologous protein production. <i>Applied Microbiology and Biotechnology, 98</i>(12), 5301–5317. <a href="https://doi.org/10.1007/s00253-014-5732-5">https://doi.org/10.1007/s00253-014-5732-5</a></li>
		<li id="ref1">Aurand, T. C., & March, J. C. (2016). Development of a synthetic receptor protein for sensing inflammatory mediators interferon-γ and tumor necrosis factor-α. <i>Biotechnology and Bioengineering, 113</i>(3), 492–500. <a href="https://doi.org/10.1002/bit.25832">https://doi.org/10.1002/bit.25832</a></li>
		<li id="ref1">Ball, A. S., Chaparian, R. R., & van Kessel, J. C. (2017). Quorum Sensing Gene Regulation by
LuxR/HapR Master Regulators in Vibrios. <i>Journal of Bacteriology, 199</i>(19). <a href="https://doi.org/10.1128/JB.00105-17">https://doi.org/10.1128/JB.00105-17</a></li>
		<li id="ref1">Chen, X., Schauder, S., Potier, N., Van Dorsselaer, A., Pelczer, I., Bassler, B. L., & Hughson, F. M.(2002). Structural identification of a bacterial quorum-sensing signal containing boron. <i>Nature, 415</i>(6871), 545–549. <a href="https://doi.org/10.1038/415545a">https://doi.org/10.1038/415545a</a></li>
		<li id="ref1">Du, W., Xia, J., Zhang, Y., Liu, M. J., Li, H. B., Yan, X. M., Zhang, J. S., Li, N., Zhou, Z. Y., & Xie, W. Z.(2015). Expression of recombinant myostatin propeptide pPIC9K-Msp plasmid in Pichia pastoris.<i>Genetics and Molecular Research, 14</i>(4), 18414–18420. <a href="https://doi.org/10.4238/2015.December.23.29">https://doi.org/10.4238/2015.December.23.29</a></li>
		<li id="ref1">Khajanchi, B. K., Sha, J., Kozlova, E. V., Erova, T. E., Suarez, G., Sierra, J. C., Popov, V. L., Horneman, A. J., & Chopra, A. K. (2009). N-acylhomoserine lactones involved in quorum sensing control the type VI secretion system, biofilm formation, protease production, and in vivo virulence in a clinical isolate of Aeromonas hydrophila. <i>Microbiology (Reading, England), 155</i>(Pt 11), 3518–3531. <a href="https://doi.org/10.1099/mic.0.031575-0">https://doi.org/10.1099/mic.0.031575-0</a></li>
		<li id="ref1">Krawczyk, K., Xue, S., Buchmann, P., Charpin-El-Hamri, G., Saxena, P., Hussherr, M.-D., Shao, J., Ye, H., Xie, M., & Fussenegger, M. (2020). Electrogenetic cellular insulin release for real-time glycemic control in type 1 diabetic mice. <i>Science, 368</i>(6494), 993–1001. <a href="https://doi.org/10.1126/science.aau7187">https://doi.org/10.1126/science.aau7187</a></li>
		<li id="ref1">Miller, M. B., Skorupski, K., Lenz, D. H., Taylor, R. K., & Bassler, B. L. (2002). Parallel Quorum Sensing Systems Converge to Regulate Virulence in Vibrio cholerae. <i>Cell, 110</i>(3), 303–314. <a href="https://doi.org/10.1016/S0092-8674(02)00829-2">https://doi.org/10.1016/S0092-8674(02)00829-2</a></li>
		<li id="ref1">Ng, W.-L., & Bassler, B. L. (2009). Bacterial Quorum-Sensing Network Architectures. <i>Annual Review of Genetics, 43</i>(1), 197–222. <a href="https://doi.org/10.1146/annurev-genet-102108-134304">https://doi.org/10.1146/annurev-genet-102108-134304</a></li>
		<li id="ref1">Schauder, S., Shokat, K., Surette, M. G., & Bassler, B. L. (2001). The LuxS family of bacterial autoinducers: Biosynthesis of a novel quorum-sensing signal molecule. <i>Molecular Microbiology, 41</i>(2), 463–476. <a href="https://doi.org/10.1046/j.1365-2958.2001.02532.x">https://doi.org/10.1046/j.1365-2958.2001.02532.x</a></li>
		<li id="ref1">Scorer, C. A., Clare, J. J., McCombie, W. R., Romanos, M. A., & Sreekrishna, K. (1994). Rapid Selection Using G418 of High Copy Number Transformants of Pichia pastoris for High–level Foreign Gene Expression. <i>Bio/Technology, 12</i>(2), 181–184. <a href="https://doi.org/10.1038/nbt0294-181">https://doi.org/10.1038/nbt0294-181</a></li>
		<li id="ref1">Tang, W., & Liu, D. R. (2018). Rewritable multi-event analog recording in bacterial and mammalian cells. <i>Science (New York, N.Y.), 360</i>(6385). <a href="https://doi.org/10.1126/science.aap8992">https://doi.org/10.1126/science.aap8992</a></li>
		<li id="ref1">Ulm, R., & Jenkins, G. I. (2015). Q&A: How do plants sense and respond to UV-B radiation? <i>BMC Biology, 13</i>(1), 45. <a href="https://doi.org/10.1186/s12915-015-0156-y">https://doi.org/10.1186/s12915-015-0156-y</a></li>
		<li id="ref1">侯增淼, 李晓颖, 李敏, 杨金芳, 杨小琳, 赵金礼, Hou, Z., Li, X., Li, M., Yang, J., Yang, X., & Zhao, J. (2019). 重组人源性胶原蛋白的制备及表征. <i>生物工程学报, 35</i>(2), 319–326.</li>
		
	</ol>
	</section>

  </main>

</div>
</template>

<style>

#ljump{
	display: flex;
	float: left;
	margin-right: 12%;
	border: 1px solid black;
	border-radius: 8px 8px 8px 8px;
	font-weight: bold;
	font-size: 20px;
	text-decoration: none;	
}

.jump:hover{
	background-color: #CFCFCF;
}

.ljump:hover{
	background-color: #CFCFCF;
}

.ejump:hover{
	background-color: #CFCFCF;
}

.eljump:hover{
	background-color: #CFCFCF;
}


#ljumpto{
	color: black;
	margin: 4px 0px 6px 0px;
	font-family: 'Comic Sans MS','华文细黑';
}

#larrow{
	color:red;
	margin: 6px 8px 0px 0px;
}


</style>

<script>
import beta from '../assets/design/beta.png'
import wnt from '../assets/design/wnt.png'
import sys from '../assets/design/sys.png'
import gate from '../assets/design/gate.png'
import pik from '../assets/design/pik.png'
import f3 from '../assets/design/f3.png'
import f4 from '../assets/design/f4.png'
import f5 from '../assets/design/f5.png'
import f6 from '../assets/design/f6.png'
import f7 from '../assets/design/f7.png'
import f8 from '../assets/design/f8.png'
import f9 from '../assets/design/f9.png'
import f10 from '../assets/design/f10.png'
import sidenav from '../components/Side_nav'


export default {
  components: {
    sidenav: sidenav
  },

  data: function () {
    return {
      beta: beta,
      wnt: wnt,
      sys: sys,
      gate: gate,
      pik: pik,
      f3: f3,
      f4: f4,
      f5: f5,
      f6: f6,
      f7: f7,
      f8: f8,
      f9: f9,
      f10: f10,
      scroll: scroll,
      navs:[
     	{
     		name: 'Signaling Pathways',
     		id: 'signal'

     	},
     	{
     		name: 'Intercelluar Commmunication',
     		id: 'intercom'

     	},
     	{
     		name: 'Improve Accuracy',
     		id: 'imacc'

     	},
     	{
     		name: 'Improve Usage Experience',
     		id: 'imue'

     	},
     	{
     		name: 'Chosen Plasmid',
     		id: 'plasmid'

     	}
      ]
    }
  },

  mounted(){
  		
	},

  methods: {

  }
}
</script>

