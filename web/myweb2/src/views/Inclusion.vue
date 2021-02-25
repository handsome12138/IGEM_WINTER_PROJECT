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
		<h1>Inclusion</h1>
		<div class="divider"></div>
	</div>

	<section>
		<a class="anchor1" name="back1" id="back1"></a>
		<h2>Background</h2>
		<p>
			Historically, people around the world have been excluded from the scientific community based on gender, ethnicity, and/or socioeconomic status. In the scientific world, female still remains a minorty. This eminent and mean exclusivity reduce the number of people working on the advancement of knowledge, resulting in lags in the advancements of synthetic biology especailly, and may further lead to loss of interest for science of those unequally treated . Inclusivity means that everyone, no matter what their background is, can bear the very equal opportunity to receive education, get enrolled in academic discussion and pitch their ideas which can be precious to the development of our cognitive level.
		</p>
		<figure>
			<img :src="equal" style="width: 60%" />
		</figure>
		
	</section>
	<hr>

	<section>
		<a class="anchor1" name="gem" id="gem"></a>
		<h2>Inclusion Within IGEM</h2>
		<p>
			The iGEM foundation acknowledges the values of equity, equality, diversity and inclusivity within the scientific community, and has therefore developed an open community in which they encourage collaboration. Since 2013, iGEM has formed a committee focusing on diversity and inclusivity. And for us, ZJU-CHINA, more work needs to be done to ensure an inclusive and welcoming community in China since China has a highly homologous society. 
		</p>
		<figure>
			<img :src="igem" style="width: 70%" />
		</figure>
	</section>
	<hr>

	<section>
		<a class="anchor1" name="path" id="path"></a>
		<h2>Inclusion Within ΣPathway</h2>
		<p>
			First and foremost, we share these values and have been critical about the inclusivity of our project throughout the competition. We acknowledge that inclusiveness is key to an equitable scientific community. Reflecting on a wide range of different views and opinions increases our chance of identifying problems within the design and further potential implementation of our project. In the long term this would increase our chance of contributing to creating a better and equal world to all.
		</p>
	</section>
	<hr>

	<section>
		<a class="anchor1" name="our" id="our"></a>
		<h2>Our Team</h2>
		<p>
			We are a team of members with individual and shared values, different living habits and educational background. During our winter project, we quickly realised that this can be an advantage for this team. Throughout the winter project we created an inclusive atmosphere where all team members can freely express their ideas, and make them have a feeling of belonging, and our values are accommodated to the best of our abilities. We do this to ensure that everyone can learn as much as they can from the iGEM experience and get the most out of our project. 
		</p>
		<figure>
			<img :src="team1" style="width: 40%" />
			<img :src="team2" style="width: 39%" />
		</figure>
	</section>
	<hr>

	<section>
		<a class="anchor1" name="edu" id="edu"></a>
		<h2>Student Education</h2>
		<p>
			In this project, we put our focus on the student struggled with their education because of  individual povelty and imbalanced development. It is widely believed that wealth shouldn’t be a shortcut to higher education and decent life which can otherwise lead to serious social immobility. We are born to be equitable and should be treated especially equally in terms of issues regrading education and health. Thus it’s our responsiblity and core spirit which drives us to give docking school of ZJU more educational resources of synthetic biology. You can see <router-link to="/EAE">education and engagement</router-link> for the detailed information.
		</p>
	</section>
	<hr>

	<section>
		<a class="anchor1" name="sum" id="sum"></a>
		<h2>Summary</h2>
		<p>
			Inclusion can be approached by different means and we realise our effort can only work throughout several months. But, when the values of iGEM, inclusion, becomes a consensus in cause of academia and iGEMers, a giant leap can be made in the equity and equality regardless of gender, ethnicity, and/or socioeconomic status. 
		</p>
		
	</section>
	<hr>

	<router-link to='/EAE' id="ljump" class="ljump"><p id="ljumpto">Education and Engagement</p><p id="larrow"><-</p></router-link>
	<router-link to='/Bioethics' id="jump" class="jump"><p id="arrow">-></p><p id="jumpto">Bioethics</p></router-link>


  </main>

</div>
</template>

<style>


</style>

<script>
import equal from '../assets/hp/equal.jpg'
import igem from '../assets/hp/igem.jpg'
import team1 from '../assets/hp/team1.jpg'
import team2 from '../assets/hp/team2.jpg'
import sidenav from '../components/Side_nav'


export default {
  components: {
    sidenav: sidenav
  },

  data: function () {
    return {
      equal: equal,
      igem: igem,
      team1: team1,
      team2: team2,
      navs:[
     	{
     		name: 'Background',
     		id: 'back1'

     	},
     	{
     		name: 'Inclusion Within IGEM',
     		id: 'gem'

     	},
     	{
     		name: 'Inclusion Within ΣPathway',
     		id: 'path'

     	},
     	{
     		name: 'Our Team',
     		id: 'our'

     	},
     	{
     		name: 'Student Education',
     		id: 'edu'

     	},
     	{
     		name: 'Summary',
     		id: 'sum'

     	}
      ]
    }
  }
}
</script>
