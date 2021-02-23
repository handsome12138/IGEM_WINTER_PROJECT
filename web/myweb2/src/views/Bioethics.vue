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
		<h1>Bioethics</h1>
		<div class="divider"></div>
	</div>


	<section>
		<a class="anchor1" name="Outline" id="Outline"></a>
		<h2>Outline</h2>
		<p>
			Bioethics are concerned with the ethical questions that arise in the relationships among life sciences, biotechnology, medicine and medical ethics, politics, law and philosophy. Many research or iGEM teams are developing genetically modified bacteria or other microbes that could one day help with diagnosing, treating infection and making the world a better place . However, before such bacteria can be safely let loose, we will need to find a way to prevent them from escaping into the wider environment, where they might grow and cause harm. 
		</p>
	</section>
	<hr>

	<section>
		<a class="anchor1" name="environment" id="environment"></a>
		<h2>Environment friendly</h2>
		<p>
			ZJU_China has always been and will be a team with highly standarded responsiblity in bioethics. This year we introduce a traditional homology‐based system for targeted gene aro1 disruption in <i>P. pastoris</i> ura3Δ1 parent strain according to scheme following below, which blocked biosynthesis of all three aromatic amino acids tyrosine, phenylalanine, and tryptophan, making it an auxotrophic strain which must be grown in supplemented minimal medium. See <a href="">safety</a> for more detailed information.
		</p>
	</section>
	<hr>

	<section>
		<a class="anchor1" name="user" id="user"></a>
		<h2>User friendly</h2>
		<p>
			When we finally market our ΣPathway product, we will set down a user manual to ensure that all our users are aware of the possible harm of it and the appropriate way to deal with it. Safety warning signs including “Gloves!” Prohibited for under 18” will be applied in product packaging and user brochure. A small portable biological waste bin will be included in our package and we will recommend our user to dump it in the nearest biological waste bin. The product chamber will be entirely sealed to minimize the possibility of leakage.
		</p>
	</section>
	<hr>

	<section>
		<a class="anchor1" name="Staff" id="Staff"></a>
		<h2>Staff friendly</h2>
		<p>
			All of the laboratory team members in our team will receive detailed safety training before any laboratory work had begun. Basic rules in laboratories that must be applied. Don’t forget to take a look at it in <router-link to="/Safety">safety</router-link>.
		</p>
		<p>
			We hope through joint effort of iGEM community, ethics can be regarded as a common view in the development of synthetic biology.
		</p>
	</section>
	<hr>

	
  </main>

</div>
</template>

<style>


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
     		name: 'Outline',
     		id: 'Outline'

     	},
     	{
     		name: 'Environment friendly',
     		id: 'environment'

     	},
     	{
     		name: 'User friendly',
     		id: 'user'

     	},
     	{
     		name: 'Staff friendly',
     		id: 'Staff'

     	},
      ]
    }
  }
}
</script>
