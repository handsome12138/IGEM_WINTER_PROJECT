<template>
<div class="row" style="text-align:left">

  <sidenav :navs="navs" class="sidenav"></sidenav>

  <main>
	<div class="pageName">
		<h1>Future</h1>
		<div class="divider"></div>
	</div>

	<section>
        <a class="anchor1" name="bio" id="bio"></a>
        <h2>Biological Part</h2>
        <p>
            There are still some difficulties in protein interactions with phosphorylation involved. For instance, phosphorylation cannot be simulated by extracellular signals.In order to achieve multi-level phosphorylation simulations such as the MAPKKK pathway, here we propose two solutions for that:
        </p>
        <ul class="solution">
            <li>The first one is to perform in vitro simulations by introducing each step of the signaling pathway from scratch.</li>
            <li>The second solution is to apply designs similar to phosphorylated antibody detection microarray for detection.</li>
        </ul>
        <p>
            In addition, to make our simulation more precise, the influences of the natural secretion(ranging from proteins to microRNAs) by our chassis on downstream cells are worth exploring.
        </p>
        <p>
            We expect to widen the application range of our Sigmal Pathways to other signaling pathways that are related to the metabolism of tumors, thus facilitating the work of researchers. Meanwhile, we would like to seek the possibility of integrating any two interacting elements to form a signaling pathway of interest, which means the interface of our Sigmal Pathways elements need further standardization.
        </p>
    </section>
    <hr>

    <section>
        <a class="anchor1" name="nbio" id="nbio"></a>
        <h2>Non-Biological Part</h2>
        <p>
            While we are making progress on our project, we also go through the previous IGEM teams’ projects concerning signaling pathways. Collection of the achievements of those projects would be another target that we make endeavor on.
        </p>
        <p>
            We plan to establish a forum for feedback on the use of our products, and invite relevant experts to conduct regular exchanges to help civilians and scientists who apply the product better understand the operation process and application plan of the corresponding channel.
        </p>
        <p>
            We plan to build a database of signaling pathways included in our products, which includes the composition of signal pathways, influencing factors, and interactions with other pathways. Users can guide their own experimental design by searching for relevant information about signaling pathways in the database.
        </p>
    </section>
    <hr>

  </main>

</div>
</template>

<style>



</style>

<script>
import sidenav from '../components/Side_nav'

export default {
   components: {
    sidenav: sidenav
  },

  data: function () {
    return {
      navs: [   {
            name: 'Biological Part',
            id: 'bio'

        },
        {
            name: 'Non-Biological Part',
            id: 'nbio'

        }]
    }
  }
}
</script>
