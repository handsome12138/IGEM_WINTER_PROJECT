<template>
<div class="row" style="text-align:left">
  <sidenav :navs="navs" class="sidenav"></sidenav>

  <main>
	<div class="pageName">
		<h1>Hardware</h1>
		<div class="divider"></div>
	</div>

	<section>
		<a class="anchor1" name="des" id="des"></a>
		<h2>Description</h2>
		<p>
			In order to realize the characteristics of the project, such as "simple, portable, free combination and modularization", Lego is used as the creative prototype, combined with microfluidic chip and other
			knowledge, the following hardware is designed for the project "Σ pathway"
		</p>
	</section>
	<hr>

	<section>
		<a class="anchor1" name="fun" id="fun"></a>
		<h2>Function</h2>
		<ol>
			<li>It can be disassembled and assembled at will</li>
			<li>It can realize different liquid velocity in pipeline layer</li>
			<li>It can control the opening and closing of specific channels</li>
		</ol>
	</section>
	<hr>

	<section>
		<a class="anchor1" name="dmm" id="dmm"></a>
		<h2>Design & Material & Manufacture</h2>
		<h3>Overall appearance of hardware:</h3>
		<p>
			The hardware can be divided into microchip and micropump
		</p>
		<figure>
			<img :src="chip1" id="chip"/>
			<img :src="chip2" id="chip"/> 
		</figure>
		<figcaption>Figure 1 Microchip</figcaption>
		<figure>
			<img :src="pump1" id="chip"/>
			<img :src="pump2" id="chip"/> 
		</figure>
		<figcaption>Figure 2 Micropump</figcaption>
		<h3>The overall design of the chip is divided into four layers</h3>
		<h4>From top to bottom</h4>
		<ol>
			
			<li><p>Protection layer 1 material name = Acrylic cast sheet of PMMA (TM) gs</p>
				<p>purpose: As a lid to protect Sample addition layer</p>
			</li>
			<li><p>Sample addition layer material name = Acrylic cast sheet of PMMA (TM) gs</p>
				<p>purpose: Add sample to Cells and pipelines layer &connect</p>
			</li>
			<li><p>Cells and pipelines layer material name = PDMS</p>
				<p>purpose: Provide environment and space for cell chamber and fluid flow</p>
			</li>
			<li><p>Protection layer 2 material name = Acrylic cast sheet of PMMA (TM) gs</p>
				<p>purpose: Protect Cells and pipelines layer connect</p>
			</li>
		</ol>
		<h4>Other design:</h4>
		<ol>
			
			<li><p>The screw for controlling the pipe switch ,which makes use of the elasticity of PDMS, so just screw down the screw</p>
				<figure>
					<img :src="screw1" id="screw" /> 
				</figure>
				<figcaption>Figure 3 Screw</figcaption>
			</li>
			<li><p>Fixing screws for connecting four layers</p>
				<figure>
					<img :src="screw2" id="screw" /> 
				</figure>
				<figcaption>Figure 4 Fixing Screw</figcaption>
			</li>
			<li><p>Sliding structure to control Protection layer 1</p>
				<figure>
					<img :src="slide" id="screw" /> 
				</figure>
				<figcaption>Figure 5 Sliding structure</figcaption>
			</li>
			<li><p>Insert for connection between chips</p>
				<figure>
					<img :src="inserted" style="width: 60%;" /> 
				</figure>
				<figcaption>Figure 6 Connected Chips</figcaption>
			</li>
		</ol>
		<h3>The overall design of the micropump is as follows:</h3>
		<figure>
			<img :src="opump" style="width: 50%;" /> 
		</figure>
		<figcaption>Figure 7 Overall Design of Micropump</figcaption>
		<h4>The main parts of micropump are as follows</h4>
		<ol>
			
			<li>Outer wall of micropump (with cover but without bottom), material = rigid PVC
			</li>
			<li>Inner wall of micropump (with bottom but without cover), material =
rigid PVC
			</li>
			<li>Cover: protective device, material = rigid PVC
			</li>
			<li>Dialysis bag: prevent some particles from passing through
			</li>
			<li>Tube: used for adding sample and discharging liquid and gas
			</li>
		</ol>
		<h3>Principle of micropump: osmotic pressure</h3>
		<p>
			According to the working
principle of osmotic micropump, under the action of osmotic pressure,
water enters the inner cavity from the outer cavity, causing the pressure of the outer cavity to decrease, thus
driving the external liquid connected with it to flow to the outer cavity of the micropump to complete the
liquid flow drive. It can be seen that the driving force of liquid is osmotic pressure, and the condition
optimization of micropump can be transformed into the process of condition optimization affecting
osmotic pressure. First, according to the calculation formula of osmotic pressure,
		</p>
		<p>
			Where C is the molar concentration of solute, R is the gas constant, and F is the absolute temperature. It
can be seen that the osmotic pressure depends on th e concentration of osmotic driving reagent and the
ambient temperature. According to the calculation formula of the volume velocity of water passing through
the semi permeable membrane
		</p>
		<p>
			Where j is the volume
flow rate, K is the permeability coefficient, a is the effective permeability area, σ is
the osmotic pressure reflection coefficient of the membrane, Δ Π is the osmotic pressure difference, Δ P is
the water pressure difference, C is the molar concentration of solute, and R is the gas constant. It can be
seen that the osmotic pressure is not the only factor affecting the flow rate, so the influencing factors should
be investigated one by one. It can be seen from the literature that σ is determined by the pro perties of
semipermeable membrane and driving reagent solute, that is, for an ideal semipermeable membrane, water
molecules can pass through freely, Solute molecules are completely intercepted. For such a semi permeable
membrane, the osmotic pressure refle ction coefficient σ of the membrane is fixed. On the other hand, when
the driven liquid is pure water, △ Π is equal to the osmotic pressure Π of solute. If the water pressure
difference △ p between the two sides of the semi permeable membrane is ignored, a nd then equation(1.1) is introduced into equation (1.2), a simplified formula for calculating the volume velocity of water can be
obtained
		</p>
		<p>
			In this formula, because the permeability coefficient K is also a
constant, the flow rate of water driven
by osmotic pressure mainly depends on the properties of osmotic membrane σ, effective osmotic area a,
concentration C of osmotic driving reagent and ambient temperature T. Based on this, we can gradually
optimize the various factors affecting the infiltration velocity.
		</p>
		<h3>Package
of micropump and chip:</h3>
		<p>
			First, the inner cavity of the micropump is fixed with the outer cavity cover, and then connected with
the outer cavity through threads. After that, the micropump is bonded to the chip so that the microchannel
outlet on the chip is located in the center of the opening at the lower end of the outer cavity. The outer
cavity of the micropump is filled with secondary deionized water, and the inner cavity is filled with osm otic
driving reagent solution. There are two small holes on the outer wall of the outer cavity, one as the water
inlet and the other as the exhaust port. There are also two small holes on the outer cavity cover, one is used
as the entrance of the permeatio n reagent solution, and the other is used as the drainage hole. After the
driving reagent solution and secondary deionized water are injected into the inner and outer cavities
respectively, the inlet and exhaust port of the outer cavity are closed, the inl et of the inner cavity is closed,
and the discharge port is opened to connect with the external waste liquid pool. Open the torque actuated
valve, under the effect of the osmotic pressure difference between the inner and outer cavities, the water in
the ou ter cavity flows through the semi permeable membrane and into the inner cavity, thus driving the
external liquid connected with the chip to enter the microchannel through the channel entrance of the chip,
and flow through the microchannel in a continuous way.
		</p>

	</section>
	<hr>

	<section>
		<a class="anchor1" name="future" id="future"></a>
		<h2>Future</h2>
		<p>
			At present, the chip given above is equivalent to a template. Because it is a device for convenience, the future goal is also very clear. It is hoped that researchers can design their own logical path by DIY. The preliminary design ideas are as follows:
		</p>
		<figure>
			<img :src="future" style="width: 60%;" />
		</figure>
		<figcaption>Figure 1 Future Design</figcaption>
		<p>
			The cell and pipeline layer is divided into five parts from left to right, and the number of cells in each part can be planned by itself, because the connection and output between each part are unified. The chip designed on this basis can fre ely choose single input / double input / multi input, and the middle logic gate can also be designed according to the path.
		</p>

	</section>
	<hr>

	<section class="ref">
	<h2>References</h2>
	<ol>
		<li id="ref1">《用于微流控芯片细胞分析的流体控制系统研究》 作者姓名：杨春光</li>
	</ol>
	</section>
  </main>

</div>
</template>

<style>



#chip{
	width: 40%;
	margin-left: 5%;
}

#screw{
	width: 40%;
}



</style>

<script>
import future from '../assets/hardware/future.png'
import chip1 from '../assets/hardware/chip1.png'
import chip2 from '../assets/hardware/chip2.png'
import pump1 from '../assets/hardware/pump1.png'
import pump2 from '../assets/hardware/pump2.png'
import screw1 from '../assets/hardware/screw.png'
import screw2 from '../assets/hardware/screw2.png'
import slide from '../assets/hardware/slide.png'
import inserted from '../assets/hardware/inserted.png'
import opump from '../assets/hardware/opump.png'
import sidenav from '../components/Side_nav'


export default {
  components: {
    sidenav: sidenav
  },

  data: function () {
    return {
      future: future,
      chip1: chip1,
      chip2: chip2,
      pump1: pump1,
      pump2: pump2,
      screw1: screw1,
      screw2: screw2,
      slide: slide,
      inserted: inserted,
      opump: opump,
      navs:[
     	{
     		name: 'Description',
     		id: 'des'

     	},
     	{
     		name: 'Function',
     		id: 'fun'

     	},
     	{
     		name: 'Design & Manufacture',
     		id: 'dmm'

     	},
     	{
     		name: 'Future',
     		id: 'future'

     	}
      ]
    }
  }
}
</script>
