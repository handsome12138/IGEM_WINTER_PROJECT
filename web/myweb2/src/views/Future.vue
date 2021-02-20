<template>
<div class="row">
  <aside class="sidenav">
	<ul class="leftnav">
		<li class="nav-item">
			<a class="nav-link" href="#Subtitle1">Biological Part</a>
		</li>
        <li class="nav-item">
            <a class="nav-link" href="#Subtitle2">Non-Biological Part</a>
        </li>
	</ul>
  </aside>

  <main>
	<div class="pageName">
		<h1>Future</h1>
		<div class="divider"></div>
	</div>

	<section>
        <h2 id="Subtitle1">Biological Part</h2>
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
        <h2 id="Subtitle2">Non-Biological Part</h2>
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

.row {
    display: flex;
}

.sidenav{
	flex: 0 0 20%;
}

.sidenav ul {
    font-family: 'Sansita',sans-serif;
    list-style-type: none;
    position:fixed;
    padding-top: 30px;
    padding-left:40px;
}

.sidenav a {
    text-align: center;
    font-size: 1.2rem;
    color: #767676;
}

.sidenav a.active {
    color: white;
    background-color: #8BBED5;
    border-radius: 1rem;
}

.solution{
    padding-left: 20px;
}

main {
    padding-top: 12vh;
    padding-left: 6vw;
    flex: 0 0 80%;
    text-align: left;
}

.pageName {
    width: 100%;
    border-bottom-style:solid; 
    border-bottom-width:medium;
    margin-bottom: 5vh;
    margin-top:0;
    padding-left: 0%;

}


main section {
    padding-left: 0px;
    padding-right: 120px;
}

main hr {
    border-style: solid;
    border-color: #2C2C2C;
    margin-right: 3vw;
    margin-left: 3vw;
}

main p{
	white-space: pre-wrap;
	text-indent: 1em;
}


</style>
 
<script>

export default {
  data: function(){
    return{

    }
  }
}
</script>
