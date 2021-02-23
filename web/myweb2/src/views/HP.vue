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
		<h1>Human Practice</h1>
		<div class="divider"></div>
	</div>


	<section>
		<a class="anchor1" name="Overview" id="Overview"></a>
		<h2>Overview</h2>
		<p>
			Our project was inspired by organoid chip, aiming at simulating and splicing signaling pathway in vivo and making them basic elements of future signaling pathway database especially in the aspect of cancer screening. Integrated signaling pathway module is yet to be mature research, and there are still many aspects we are not clear about. In order to make our project responsible and good for society and have it optimized, human practice is supposed to play a supporting role in every step of project implementation. Not only will we thoroughly consider the influence our project will have on the world, but we also are intended to talk to the public, stakeholders, experts and maybe patients through interviews or feedback, reflect the results in our daily meeting, and modify our project based on that. Also remember to look at how we <a href="">integrated Human Practices</a> into our project.
		</p>
	</section>
	<hr>

	<section>
		<a class="anchor1" name="back" id="back"></a>
		<h2>Background Research</h2>
		<p>
			Signaling pathway is the key in ΣPathway, therefore, the first thing we wanted to learn about was how much attention did the academic public pay to signaling pathway? Therefore, we will make a simple questionnaire and delievered them to the academic public including bio-majored professors, scholars and students, through different social media. We will also specifically send our questionnaire to iGEM teams online, since our product is relevant to iGEMers’ research field and can become the source of their inspiration. In addition to the academic public concerns, we will survey what kinds of problems are in vivo integrated signaling pathway modeles able to solve in iGEMers’ and the academic public’s mind.
		</p>
		<p>
			We may then receive effective replies from the public, and several from the iGEMers. We expect there are a wide range of iGEMers, scholars and professors involved in the participants, which indicates that our survey is quite representative of different communities and bears signicance.
		</p>
		<p>
			A introduction to our initial conception will be presented in the cover of our questionaire to help subjects understand our rudimentary product, and in order to ensure compatibility and accracy of our result, exclusion creteria will be set including major, age, academic experience and etc.. 
		</p>
		<p>
			And in order to analyze our results, participants will be grouped according to their specificity which makes the collection of private information necessary and inevitable. All the privacy will be protected dependent of third-party app and by our sincere effort.
		</p>
		<p>
			A succinct questionaire is exampled below. 
		</p>
		<ul class="ques">
			<li>Individual information.</li>
			<li>How much do you know about synthetic biology?</li>
			<li>How important do you think signaling pathway in biocommunity?</li>
			<li>Would ΣPathway help with your study？</li>
			<li>What is your most concerning problem if ΣPathway successfully works ?</li>
			<li>How do you think ΣPathway can be improved?</li>
			<li>Etc.</li>
		</ul>
		<p>More questions will be pitched in terms of actual need.</p>
		<figure>
			<img :src="que" style="width: 40%;" />
		</figure>
	</section>

		<section>
		<a class="anchor1" name="stake" id="stake"></a>
		<h2>Interview Of Stakeholders</h2>
		<p>
			Since ΣPathway is a novel product to integrate and mimick signaling pathways, we believe that its impact in the medical and pharmaceutical practice is worth being discussed. And only after learning about the current role of signaling pathways play, can we consider ΣPathway potential influence in an appropriate manner.
		</p>
		<p>
			We hope to learn about the current situation about integrated signaling pathway from the stakeholders, in our case, the stakeholders are those who work in related field and those who are studying biology. The interviewees we found is supposed from a wide variety of careers, which include pharmcology professor, clinical physician, biology researcher, and etc. 
		</p>
		<p>
			In order to avoid misleading the interviewees, instead of using questionnaires, we will take the interviews face to face in person. Before the interviews, we will explain to them about the contents of this following interview, how will the results be used, and our interview will be recorded under permission of interviewee. We will make interviewees anonymous if required and make sure that all questions asked are neutral and have open-ended answers. 
		</p>
		<p>
			Our selection of subjects participated is fair without bias. The subjects are required by us of a relatively experienced career in terms of signaling pathways related work.Therefore, our interview can help us learn about the real and comprehensive prospect of stakeholders.
		</p>
		<p>
			According to the answers we get from the interviews, we will further modify our product and develop potential application.
		</p>
		<p>
			Three interviewees that I have contacted who are willing to take the interview are listed below:
		</p>
		<div class="pro">
			<div class="info">
				<ul>
					<li>Ricky Chen</li>
					<li>Dr, BSc Sichuan, MSc Bristol, PhD Qld</li>
					<li>Lecturer</li>
					<li>Faculty of Biomedical Sciences, Pharmacology the University of Western Australia
					</li>
				</ul>
			</div>
			<div class="pho">
				<img :src="pro1" style="width: 50%;margin-left: 20%;margin-top: 5%;" />
			</div>
		</div>
		<div class="pro">
			<div class="info">
				<ul>
					<li>David Mackey</li>
					<li>Professor, Practitioner Fellow, Ophthalmology, MD, UQ</li>
					<li>Centre for Ophthalmology and Visual Science</li>
					<li>University of Melbourne</li>
				</ul>
			</div>
			<div class="pho">
				<img :src="pro2" style="width: 50%;margin-left: 55%;margin-top: 7%;" />
			</div>
		</div>
		<div class="pro">
			<div class="info">
				<ul>
					<li>Hong Deng</li>
					<li>Associate Professor</li>
					<li>Clinical pathological physician
					</li>
					<li>The Second Affiliated Hospital, Zhejiang University School of Medicine 
					</li>
				</ul>
			</div>
			<div class="pho">
				<img :src="pro3" style="width: 60%;margin-top: 15%;margin-left: 5%;" />
			</div>
		</div>
	</section>
	<hr>

	<section>
		<a class="anchor1" name="experts" id="experts"></a>
		<h2>Interviewing The Experts</h2>
		<p>
			After the initial designs and interviews, we may still had some doubts about our project. Our initial design was to construct signaling pathway and applied them to modelling, but there can be problems that we can not solve. With our concerns, we can carry on further interviews with the professors in our school. Apart from our concerns about the value of our project, we also hoped professors would evaluate our project and give us some opinions on how to improve it based on requirement or expectation that stakeholders will have raised. The experts aren’t specifically comfirmed yet, professors proficient in different areas can be invited according to problems we confronted with.
		</p>
		
	</section>
	<hr>

	<section>
		<a class="anchor1" name="Callback" id="Callback"></a>
		<h2>Callback With The Stakeholders</h2>
		<p>
			After interviewing the experts, our questions should have been solved. For this part, we would like the stakeholders to imagine combining ΣPathway and the area they are majored at. Different visions can be proposed and it could be pretty helpful for us to develop products based on this technology. Terms mentioned above in the first interview are applied. Stackholders will be informed if their ideas are intended to be implemented, and their permissions will be solicited before our work.
		</p>
		<p>
			After our human practice, we should generally recognize that the combination of different fields and can solve more problems in real life.
		</p>
		<p>
			We’re glad to see that ΣPathway potential function fits people’s expectations on it, which confirmed the advantage of developing integrated signaling pathway modules.
		</p>
		<figure>
			<img :src="hd1" style="width: 50%;" />
			<img :src="hd2" style="width: 35%;padding-left: 10%;" />
		</figure>
		<p>
			Also, they may put forward many expectations that we are not capable of adapting to our project, many of which can be subjects of iGEM teams and other researcher. We believe that these visions can be solved one day in the future by the combining efforts of everyone involved in synthetic biology.
		</p>
	</section>
	<hr>

  </main>

</div>
</template>

<style>



.ques{
	border:3px solid red;
	padding-left: 5%;
	padding-top: 2%;
	padding-bottom: 2%;
	margin-left: 10%;
	width: 70%;
	border-radius: 4% / 8%;
}

.pro{
	display: flex;
	border:3px solid red;
	margin-bottom: 3%;
	padding-top: 2%;
	padding-bottom: 1%;
	width: 93%;
	border-radius: 3% / 12%;
}

.info li{
	padding-top: 1%;
}

.info ul{
	list-style: none;
}

</style>

<script>
import que from '../assets/hp/question.png'
import pro1 from '../assets/hp/pro1.jpg'
import pro2 from '../assets/hp/pro2.jpg'
import pro3 from '../assets/hp/pro3.jpg'
import hd1 from '../assets/hp/hd1.png'
import hd2 from '../assets/hp/hd2.png'
import sidenav from '../components/Side_nav'


export default {
  components: {
    sidenav: sidenav
  },

  data: function () {
    return {
      que: que,
      pro1: pro1,
      pro2: pro2,
      pro3: pro3,
      hd1: hd1,
      hd2: hd2,
      navs:[
     	{
     		name: 'Overview',
     		id: 'Overview'

     	},
     	{
     		name: 'Background Research',
     		id: 'back'

     	},
     	{
     		name: 'Interview Of Stakeholders',
     		id: 'stake'

     	},
     	{
     		name: 'Interviewing The Experts',
     		id: 'experts'

     	},
     	{
     		name: 'Callback With The Stakeholders',
     		id: 'Callback'

     	}
      ]
    }
  }
}
</script>
