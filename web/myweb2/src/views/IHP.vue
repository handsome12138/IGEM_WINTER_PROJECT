<template>
<div class="row" style="text-align:left">

  <sidenav :navs="navs" class="sidenav"></sidenav>


  <main>
	<div class="pageName">
		<h1>Integrated Human Practice</h1>
		<div class="divider"></div>
	</div>

	<section>
        <a class="anchor1" name="intro" id="intro"></a>
        <h2>Introduction</h2>
		<p>
			In the integrated Human Practices section, we will elaborate on how interaction with stakeholders shapes our project. Make sure to also read how and why we interact with stakeholders in Human Practices. Integrated Human Practices is displayed in two ways one tells you per stakeholder (or event) its main impact that led us to the creation of ΣPathway, the other links all of our human practices efforts together by describing the stakeholders’ or experts’ perceptions of the problem and the solution, ethical, safety and security considerations and how we envision ΣPathway to be applied in the real world.
		</p>
        <p style="font-weight: bold;">Note: This part is not done yet. Introduction is given above.</p>
		<figure>
            <img :src="ihp" />     
        </figure>
	</section>
	<hr>

  </main>

</div>
</template>

<style>


</style>

<script>
import sidenav from '../components/Side_nav.vue'
import ihp from '../assets/hp/ihp.png'


export default {
  components: {
    sidenav: sidenav
  },

  data: function () {
    return {
        ihp: ihp,
        navs: [{
            name: 'Introduction',
            id: 'intro'
        }]
    }
  }
}
</script>
