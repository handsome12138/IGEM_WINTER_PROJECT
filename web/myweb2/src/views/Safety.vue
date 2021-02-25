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
		<h1>Safety</h1>
		
	</div>

	<section>
		<p>
			As it should, safety has always been a top priority to the ZJU-China iGEM team. This is especially true when considering the potential bad consequences that may caused by engineered cells. Our planned experiments presented in detail does not have any biosafety concerns in the laboratory or the environment.
		</p>
	</section>
	<hr>

	<section>
		<a class="anchor1" name="lab" id="lab"></a>
		<h2>Lab Safety</h2>
		<p>
			All of the laboratory team members in our team underwent detailed safety training before any laboratory work had begun. Basic rules in laboratories that must be applied included, but not limited to:
		</p>
		<ul class="limit">
			<li>It is forbidden to smoke in all rooms.</li>
			<li>It is forbidden to drink and eat in the laboratory rooms.</li>
			<li>It is compulsory to wear a conventional lab coat, gloves, pants and closed shoes.</li>
			<li>Long hair must be tied back.</li>
			<li>It is compulsory to wash our hands regularly.</li>
			<li>In some cases (UV light, projection risk), it is compulsory to wear protection glasses.</li>
			<li>Proper use of laboratory equipment and devices.</li>
			<li>Appropriate handling and storage of various hazardous and(or) flammable materials.</li>
		</ul>
		<p>
			Laboratory team members were provided with all the necessary personal protective equipment to ensure their safety. To prevent the biological pollution caused by the spread of the microorganisms, it is compulsory to take all necessary sterilisation steps before entering or leaving the laboratory premises. We also disinfected biological safety cabinets were after each use.
		</p>
	</section>
	<hr>

	<section>
		<a class="anchor1" name="prodes" id="prodes"></a>
		<h2>Project Design</h2>
		<h3>Joshua Safety</h3>
		<p>
			Based on bioethics guideline of synthetic biology, we are convinced that our engineered Pichia pastoris should be friendly to environment and our staff even in the case of leakage. Thus, we managed to introduce a traditional homology‐based system for targeted gene aro1 disruption in P. pastoris ura3Δ1 parent strain according to scheme following below, which blocked biosynthesis of all three aromatic amino acids tyrosine, phenylalanine, and tryptophan, making it an auxotrophic strain (Figure 1). Aro1 was disrupted by an auxotrophic biomarker ura3. The strain <i>P. pastoris</i> ura3Δ1 aro1::URA3 constructed showed a surprising sensitivity to rich culture medium and must be grown in supplemented minimal medium with three aromatic amino acids, which means it is unable to survive outside culture medium. And it is confirmed that this strain can function as a powerful expression host for eukaryotic proteins.1
		</p>
		<figure>
			<img :src="safe" style="width: 70%; -webkit-width:40%; "/>
		</figure>
		<figcaption>Figure 1 the homology-based system in <i>P.pastoris</i></figcaption>
		<p>
			And for cell free system in our product, in which living organism is not included thus could be possibly regarded as enviromentally safe. Currently there is no study specific at the implication of transformed plasmid in CFS on environment and human health which should be considered in our laboratory work and human practice.
		</p>
		<p>
			Safety warning signs including “Gloves!” Prohibited for under 18” will be applied in product packaging and user brochure.
		</p>
		<h3>The Biochips Used in the Project</h3>
		<p>
			The project used a biochip as a container for large numbers of simultaneous biochemical reactions. The chip is a fine-scale cell chamber containing an array of microwells. In each microwell, there are numbers of engineered cells, which could not be released or exposed to the environment. No structural, report, and signaling protein produced by cells are exposed to the environment. They only transfer from one microwell to another through the microfluidic tubing. After the experiment, the biochip should be cleaned and sterilized in order to prevent the potential pollution caused by engineered cells and their productions. In an extremely unlikely case of environmental release, the cells in the biochip are equipped with robust kill-switch (as described above) mechanisms in order to prevent biological pollution.
		</p>

	</section>
	<hr>

	<router-link to='/Hardware' id="ljump" class="ljump"><p id="ljumpto">Hardware</p><p id="larrow"><-</p></router-link>
	<router-link to='/Results' id="jump" class="jump"><p id="arrow">-></p><p id="jumpto">Results</p></router-link>

	<section class="ref">
	<a class="anchor1" name="rref" id="rref"></a>
	<h2>References</h2>
	<ol>
		<li id="ref1">Whittaker, M. M., & Whittaker, J. W. (2005). Construction and characterization of Pichia pastoris strains for labeling aromatic amino acids in recombinant proteins. <i>Protein expression and purification, 41(2), 266-274.</i></li>
	</ol>
	</section>

  </main>

</div>
</template>

<style>

.row {
    display: flex;
    -moz-display: flex;/* Firefox */
    -webkit-display: flex; /* Safari and Chrome */
    -o-display: flex; /* Opera */
    -ms-display: flex;
    
}

main {
	padding-top: 12vh;
    flex: 0 0 70%;
    -ms-flex: 0 0 65%;
    -moz-flex: 0 0 70%;/* Firefox */
    -webkit-flex: 0 0 70%; /* Safari and Chrome */
    -o-flex: 0 0 70%; /* Opera */
    text-align: left;
    background-color: white;
    padding-left: 3%;
    margin-left: 3%;
}

.pageName {
    width: 90%;
    border-bottom-style:solid;
    border-bottom-width:medium;
    margin-bottom: 5vh;
    margin-top:0;
    padding-left: 0%;

}

.limit{
	padding-left: 20px;
}

figure,figcaption{
	text-align: center;
	padding-bottom: 10px;
	
}

figcaption{
	font-weight: 200 !important;
	font-size: 0.85rem !important;
}

main section {
    padding-left: 0%;
    padding-right: 10%;
}

main hr {
    border-style: solid;
    border-color: #2C2C2C;
    margin-right: 15%;
    margin-bottom: 5%;
}

main p{
	white-space: pre-wrap;
	text-indent: 1em;
}

main .ref ol {
    margin-left: 1.1em;
    padding-left: 0px;
}
.ref h2 {
    font-weight: normal;
}
.ref ol {
    font-size: 0.9rem;
}

.ref{
	padding-top: 10%;
}

.anchor1{
  position: relative;
  top: -100px;
  display: block;
  height: 0;
  overflow: hidden;
}

</style>

<script>
import safe from '../assets/safety/safety.jpg'
import sidenav from '../components/Side_nav'


export default {
  components: {
    sidenav: sidenav
  },

  data: function () {
    return {
      safe: safe,
      navs:[
     	{
     		name: 'Lab Safety',
     		id: 'lab'

     	},
     	{
     		name: 'Project Design',
     		id: 'prodes'

     	},
     	{
     		name: 'References',
     		id: 'rref'

     	}
      ]
    }
  }
}
</script>
