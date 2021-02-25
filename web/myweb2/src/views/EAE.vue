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
		<h1>Education and Engagement </h1>
		<div class="divider"></div>
	</div>

	<section>
		<a class="anchor1" name="background" id="background"></a>
		<h2>Background</h2>
		<p>
			Novelty in science brings along challenges in the matter of regulation, social acceptance and ethics. We believe the best way to overcome such barriers within synthetic biology is to involve a broader range of people rather than scientists alone in the discussion regarding the discipline and its implications. This is why we aimed to reach a wide demographic, particularly those we feel may be left out of the conversation on synthetic biology: poor students with no decent education in China.
		</p>
		
		<p>
			Education is widely accepted to be a fundamental knowledge resource, both for individuals and societies. Indeed, in most countries basic education is nowadays perceived not only as a right but also as a duty – governments are typically expected to ensure access to basic education, while citizens are often required by law to be educated up to a certain level. From a historical perspective, the world went through a great expansion in education over the past centuries. This can be seen across all quantity measures. Despite these general worldwide improvements, some countries have been lagging behind, and educational disparities between different districts within most countries are also increasing.
		</p>
	</section>
	<hr>

	<section>
		<a class="anchor1" name="responsibility" id="responsibility"></a>
		<h2>Our Responsibilities</h2>
		<p>
			China is a country with unbalanced regional development, and the emerging problem of uneven distribution of educational resources is very obvious. What's more, constrained by long-term conventional thinking, people are more willing to pick something up which seems to be more practical, while ignoring basic science, especially subjects such as biology, which do not bring obvious ecnomic benefits. However, as iGEMers, who are committed to promoting the development of synthetic biology, we can predict great economic benefits from the development of life sciences, such as the industrial transformation of some synthetic biology projects. In addition, as is known to all, the 21st century is a biological century, and life science has a great prospect for development. The lack of knowledge in this field will have a bad impact on the development of children, especially in poor areas.
		</p>
		
		<p>
			Being a team with a strong sense of social responsibility, ZJU-China is willing to make contributions to helping the poor get out of this predicament. Considering that iGEM community bears the spirit of synthetic biology, ZJU-China this year will carry out scientific popularization of synthetic biology for primary and middle school students in poor areas. We would like to go to these school and present to students what synthetic biology is, We will also actively play the role of the Internet, a powerful medium, to popularize the basic knowledge of synthetic biology and some interesting frontier fields among children in poor areas and also for those in need.
		</p>
	</section>
	<hr>

	<section>
		<a class="anchor1" name="wedo" id="wedo"></a>
		<h2>What Will We Do?</h2>
		<p>
			Considering our docking schools, such as the Naqu Secondary School in XiZang Province, located in the poor mountainous areas, it hard to estimate the cognitive level of students there, therefore, we will design a questionnaire to know the specific situation, including the main infrastructure, the children’s grasp of the knowledge of biology, and the teachers' understanding of synthetic biology, in order to make a more suitable plan catering to local conditions.
		</p>
		
		<p>
			We plan to achieve our educational goal in three different forms:
		</p>
		<h3 style="margin-left: 3%;">Comics</h3>
		<div style="display: flex;width: 90%;">
			<div>
			<p style="margin-left: 5%;">With years of experience in comics, the knowledge of synthetic biology is reified and simplified in the form of caricatures by ZJU-China to stimulate the learning interest of children in poor areas. Monthly comics will be available in both newspaper and online. For areas with difficulties in accessing the Internet, printed comics on environment-friendly paper will be distributed. For areas with easy access to the Internet, electronic versions will be distributed.</p>
			</div>
			<div style="margin-left: 5%;"><img :src="parlor" style="width: 160%;height: 90%;" /></div> 		
		</div>
		<p style="margin-left: 4%;">At the same time, we will also published cartoons on ZJU-iGEM WeChat, Instagram, Facebook, Twitter and Weibo platform, so as to popularize the knowledge of synthetic biology to the general public. We will contact QianJiang newspaper and other publishers to post our monthly comics for public benefit.</p>
		<h3 style="margin-left: 3%;">Live Broadcasting</h3>
		<div style="display: flex;width: 90%;">
			<div>
			<p style="margin-left: 5%;width: 95%;">For schools with electronic facilities, live lectures will be held to best restore the effect of face to face study. With investigation with local educational department and combining with the actual situation of local students, we will work out an feasible live lecture plan. Face-to-face lectures will be given if permitted by authorisation and COVID-19 situation. The broadcasting will also be played by ZJUBTV for educational uses in ZJU.</p></div>
			<div style="margin-left: 5%;">
			<img :src="lb" style="width: 165%;height: 70%;margin-top: 15%;" />
			</div>
		</div>
		<h3 style="margin-left: 3%;">Video</h3>
		<div style="display: flex;width: 90%;">
			<div>
			<p style="margin-left: 5%;width: 90%;">The videos for knowledge popularization can be divided into the basic knowledge of biology, synthetic biology two projects, the vedio adapted to different level learner will be made. Through these videos, we integrated daily biology knowledge in all the aspects of children's life, which can be amusing for them to study and we will gradually teach the children knowledge and stimulate their interest in the life sciences when they have certain background knowledge. These videos will be posted in Bilibili and Youtube which are assessible for all.</p></div>
			<div style="margin-left: 1%;">
			<img :src="video" style="width: 170%;height: 60%;margin-top: 30%;" />
			</div>
		</div>
		<h3 style="margin-left: 3%;">Education To Public</h3>
		<div style="display: flex;">
			<p style="margin-left: 5%;">Besides from the popularization of basic knowledge in the poor areas, we are also keen to share our understanding of synthetic biology and our product ΣPathway to the academic public. Thus it can be educative if we can hold several meetings in Clubhouse and in our college. Clubhouse account @jcjoshua_ZJUiGEM will be used and a talk would be delivered in university hall of ZJU. The access to both of it will be available to all in case of preregistration.</p>
		</div>
		
	</section>
	<hr>

	<section>
		<a class="anchor1" name="con" id="con"></a>
		<h2>Conclusion</h2>
		<p>
			Through our effort, also that of other iGEM teams, we hope we would reduce the international imbalance in biology edacation, and propagate the basic knowledge of synthetic biology to the public which will make people worldwide realize the promising future of it.
		</p>

	</section>
	<hr>

	<router-link to='/IHP' id="ljump" class="ljump"><p id="ljumpto">Integrated Human Practice</p><p id="larrow"><-</p></router-link>
	<router-link to='/Inclusion' id="jump" class="jump"><p id="arrow">-></p><p id="jumpto">Inclusion</p></router-link>

  </main>

</div>
</template>

<style>



</style>

<script>
import lb from '../assets/hp/lb.jpg'
import parlor from '../assets/hp/parlor.png'
import video from '../assets/hp/video.png'
import sidenav from '../components/Side_nav'


export default {
  components: {
    sidenav: sidenav
  },

  data: function () {
    return {
      lb: lb,
      parlor: parlor,
      video: video,
      navs:[
     	{
     		name: 'Background',
     		id: 'background'

     	},
     	{
     		name: 'Our Responsibilities',
     		id: 'responsibility'

     	},
     	{
     		name: 'What Will We Do?',
     		id: 'wedo'

     	},
     	{
     		name: 'Conclusion',
     		id: 'con'

     	},
      ]
    }
  }
}
</script>
