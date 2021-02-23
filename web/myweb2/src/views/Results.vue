<template>
<div class="row" style="text-align:left">


  <sidenav :navs="navs" class="sidenav"></sidenav>


  <main>
	<div class="pageName">
        <a class="anchor1" name="res" id="res"></a>
		<h1>Results</h1>
		<div class="divider"></div>
        
	</div>

	<section>
		<p>
			We expect that all the plasmids that we put into the cell will be able to express and they should
have the right space structure.
		</p>
		<p>
			Firstly, we decide to conduct co-immunoprecipitation between the protein expressed in our
system and the receptors in the cells which are designed to combined the protein, triggering the
following intercellular communication signal pathways to check whether proteins have right
structure. We expect the existence of compoud band which indicate the fact that the protein has
the right space structure in our secreting system.
		</p>
		<p>
			Secondly, we expect that the output part of our system will show the right result. We will use
some molecules or drugs which have already been investigated in previous studies. According to
the effect which the introduced variance will has on the signal pathway, we will apply the variance
to the corresponding chamber and check the final result by using the spectrophotometer. By
comparing the spectrophotometric value between the standard state and the experimental state,
we will get the result of the impact caused by the variance. We expect that the result will be the
same as the previous studies.
		</p>
		<p>
			To check whether our quorum sensing system has worked efficiently, we decide to cultivate the
whole chip for a while and then we will do count the cells in each chamber. We expect that the
amount of the cell will close to the basic amount that we plant into the chip chamber so that we
can tell that the difference is caused by our variance rather than the cell division.
		</p>
		<p>
			Lastly, we hope that our system will has a good simulation of how signal pathways work inside
cells so we will detect the protein synthetic capacity. We expect similar level of protein expression
or the amount of the protein expression can fit in an mathematic model which can transform the
final output into a standard result.
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
            name: 'Results',
            id: 'res'

        }]
    }
  }
}
</script>
