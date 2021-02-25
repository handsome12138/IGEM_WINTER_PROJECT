<template>
    <div>
    	<div id=theme>
    		<img :src="pathway" id="pathway" />
    		<img :src="mount" id="mount" />
    	</div>
        <router-link to='/Description' class="rout1"><img :src="cell1" id="cell1" :style="{'animation-play-state': state}" /></router-link>
        <router-link to='/Modeling'><img :src="cell2" id="cell2" :style="{'animation-play-state': state}" /></router-link>
        <router-link to='/Team'><img :src="cell3" id="cell3" :style="{'animation-play-state': state}" /></router-link>
        <router-link to='/HP'><img :src="cell4" id="cell4" :style="{'animation-play-state': state}" /></router-link>

        <router-link to='/Description'><img :src='chat1' id='chat1' v-show="show1" :style="{'animation-play-state': state1}"/></router-link>
        <router-link to='/Team'><img :src='chat2' id='chat2' v-show="show1"  :style="{'animation-play-state': state1}" /></router-link>
        <router-link to='/Modeling'><img :src='chat3' id='chat3' v-show="show1" :style="{'animation-play-state': state1}" /></router-link>
        <router-link to='/HP'><img :src='chat4' id='chat4' v-show="show1" :style="{'animation-play-state': state1}" /></router-link>
        
        
        
        
        
       
        <div>
        	<transition>
        	<img :src="train" v-show="show" id="toytrain" name="toy" :style="{'animation-play-state': state}" />
        	</transition>
        </div>
        
    </div>
</template>

<style>

#pathway{
	width: 100%;
	z-index: 5;
	height: 160%;
	position: absolute;
	left: 0%;
}

#cell1{
	z-index:10;
	width: 23%;
	height: 50%;
	position: absolute;
	left: 18%;
	top:105%;
	animation:cellone 1s  10s forwards;
	-moz-animation:cellone 1s  10s forwards;/* Firefox */
	-webkit-animation:cellone 1s  10s forwards; /* Safari and Chrome */
	-o-animation:cellone 1s  10s forwards; /* Opera */
}

@keyframes cellone
{
0% {left: 18%;top:105%;width:23%;height: 50%;}
75%{left: 23%;top:55%;width:18%;height: 40%;}
100% {left: 23%;top:67%;width:18%;height: 40%;}
}

@-moz-keyframes cellone
{
0% {left: 18%;top:105%;width:23%;height: 50%;}
75%{left: 23%;top:55%;width:18%;height: 40%;}
100% {left: 23%;top:67%;width:18%;height: 40%;}
}

@-webkit-keyframes cellone
{
0% {left: 18%;top:105%;width:23%;height: 50%;}
75%{left: 23%;top:55%;width:18%;height: 40%;}
100% {left: 23%;top:67%;width:18%;height: 40%;}
}

@-o-keyframes cellone
{
0% {left: 18%;top:105%;width:23%;height: 50%;}
75%{left: 23%;top:55%;width:18%;height: 40%;}
100% {left: 23%;top:67%;width:18%;height: 40%;}
}

#cell2{
	z-index:10;
	position: absolute;
	width: 23%;
	height: 50%;
	left: 35%;
	top:105%;	
	animation:celltwo 1s  11s forwards;
	-moz-animation:celltwo 1s  11s forwards;/* Firefox */
	-webkit-animation:celltwo 1s  11s forwards; /* Safari and Chrome */
	-o-animation:celltwo 1s  11s forwards; /* Opera */
}

@keyframes celltwo
{
0% {left: 35%;top:105%;width:23%;height: 50%;}
75%{left: 35%;top:55%;width:18%;height: 40%;transform: rotate(5deg);}
100% {left: 35%;top:67%;width:18%;height: 40%;transform: rotate(5deg);}
}

@-moz-keyframes celltwo
{
0% {left: 35%;top:105%;width:23%;height: 50%;}
75%{left: 35%;top:55%;width:18%;height: 40%;transform: rotate(5deg);}
100% {left: 35%;top:67%;width:18%;height: 40%;transform: rotate(5deg);}
}

@-webkit-keyframes celltwo
{
0% {left: 35%;top:105%;width:23%;height: 50%;}
75%{left: 35%;top:55%;width:18%;height: 40%;transform: rotate(5deg);}
100% {left: 35%;top:67%;width:18%;height: 40%;transform: rotate(5deg);}
}

@-o-keyframes celltwo
{
0% {left: 35%;top:105%;width:23%;height: 50%;}
75%{left: 35%;top:55%;width:18%;height: 40%;transform: rotate(5deg);}
100% {left: 35%;top:67%;width:18%;height: 40%;transform: rotate(5deg);}
}


#cell3{
	z-index:10;
	position: absolute;
	width: 25%;
	height: 55%;
	left: 50%;
	top:104%;
	animation:cellth 1s  12s forwards;
	-moz-animation:cellth 1s  12s forwards;/* Firefox */
	-webkit-animation:cellth 1s  12s forwards; /* Safari and Chrome */
	-o-animation:cellth 1s  12s forwards; /* Opera */
}

@keyframes cellth
{
0% {left: 50%;top:104%;width:25%;height: 55%;}
75%{left: 50%;top:55%;width:20%;height: 42%;}
100% {left: 50%;top:67%;width:20%;height: 42%;}
}

@-moz-keyframes cellth
{
0% {left: 50%;top:104%;width:25%;height: 55%;}
75%{left: 50%;top:55%;width:20%;height: 42%;}
100% {left: 50%;top:67%;width:20%;height: 42%;}
}

@-webkit-keyframes cellth
{
0% {left: 50%;top:104%;width:25%;height: 55%;}
75%{left: 50%;top:55%;width:20%;height: 42%;}
100% {left: 50%;top:67%;width:20%;height: 42%;}
}

@-o-keyframes cellth
{
0% {left: 50%;top:104%;width:25%;height: 55%;}
75%{left: 50%;top:55%;width:20%;height: 42%;}
100% {left: 50%;top:67%;width:20%;height: 42%;}
}

#cell4{
	z-index:10;
	position: absolute;
	width: 25%;
	height: 55%;
	left: 61%;
	top:107%;
	animation:cellfour 1s  13s forwards;
	-moz-animation:cellfour 1s  13s forwards;/* Firefox */
	-webkit-animation:cellfour 1s  13s forwards; /* Safari and Chrome */
	-o-animation:cellfour 1s  13s forwards; /* Opera */
}

@keyframes cellfour
{
0% {left: 61%;top:107%;width:25%;height: 55%;}
75%{left: 61%;top:55%;width:20%;height: 42%;}
100% {left: 61%;top:71%;width:20%;height: 42%;}
}

@-moz-keyframes cellfour
{
0% {left: 61%;top:107%;width:25%;height: 55%;}
75%{left: 61%;top:55%;width:20%;height: 42%;}
100% {left: 61%;top:71%;width:20%;height: 42%;}
}

@-webkit-keyframes cellfour
{
0% {left: 61%;top:107%;width:25%;height: 55%;}
75%{left: 61%;top:55%;width:20%;height: 42%;}
100% {left: 61%;top:71%;width:20%;height: 42%;}
}

@-o-keyframes cellfour
{
0% {left: 61%;top:107%;width:25%;height: 55%;}
75%{left: 61%;top:55%;width:20%;height: 42%;}
100% {left: 61%;top:71%;width:20%;height: 42%;}
}

#mount{
	z-index:2;
	width: 100%;
	height: 150%;
	position: absolute;
	left: 0%;
}

#toytrain{
	z-index:4;
	width: 120%;
	height: 150%;
	position: absolute;
	top:25%;
	left: 90%;
	animation:mymove 8s 1s forwards;
	-moz-animation:mymove 8s 1s forwards; /* Firefox */
	-webkit-animation:mymove 8s 1s forwards; /* Safari and Chrome */
	-o-animation:mymove 8s 1s forwards; /* Opera */ 	
}


@keyframes mymove
{
0% {left: 90%;}
100% {left: -10%;}
}

@-moz-keyframes mymove
{
0% {left: 90%;}
100% {left: -10%;}
}

@-webkit-keyframes mymove
{
0% {left: 90%;}
100% {left: -10%;}
}

@-o-keyframes mymove
{
0% {left: 90%;}
100% {left: -10%;}
} 

#chat1{
	z-index:10;
	position: absolute;
	left: 23%;
	top:67%;
	opacity: 0.9;
	width: 0%;
	height: 0%;
	animation:chatone 1s 0.2s forwards;
	-moz-animation:chatone 1s 0.2s forwards; /* Firefox */
	-webkit-animation:chatone 1s 0.2s forwards; /* Safari and Chrome */
	-o-animation:chatone 1s 0.2s forwards; /* Opera */ 
}

@keyframes chatone
{
0% {width: 0%;height:0%;left: 23%;top: 67%;}
100% {width: 15%;height: 28%;left: 18%;top: 58%;}
}

@-moz-keyframes chatone
{
0% {width: 0%;height:0%;left: 23%;top: 67%;}
100% {width: 15%;height: 28%;left: 18%;top: 58%;}
}

@-webkit-keyframes chatone
{
0% {width: 0%;height:0%;left: 23%;top: 67%;}
100% {width: 15%;height: 28%;left: 18%;top: 58%;}
}

@-o-keyframes chatone
{
0% {width: 0%;height:0%;left: 23%;top: 67%;}
100% {width: 15%;height: 28%;left: 18%;top: 58%;}
} 

#chat2{
	z-index:10;
	position: absolute;
	left: 50%;
	top:67%;
	opacity: 0.9;
	width: 0%;
	height: 0%;
	animation:chattwo 1s 0.6s forwards;
	-moz-animation:chattwo 1s 0.6s forwards; /* Firefox */
	-webkit-animation:chattwo 1s 0.6s forwards; /* Safari and Chrome */
	-o-animation:chattwo 1s 0.6s forwards; /* Opera */ 
}

@keyframes chattwo
{
0% {width: 0%;height:0%;left: 50%;top: 67%;}
100% {width: 15%;height: 28%;left: 55%;top: 52%;}
}

@-moz-keyframes chattwo
{
0% {width: 0%;height:0%;left: 50%;top: 67%;}
100% {width: 15%;height: 28%;left: 55%;top: 52%;}
}

@-webkit-keyframes chattwo
{
0% {width: 0%;height:0%;left: 50%;top: 67%;}
100% {width: 15%;height: 28%;left: 55%;top: 52%;}
}

@-o-keyframes chattwo
{
0% {width: 0%;height:0%;left: 50%;top: 67%;}
100% {width: 15%;height: 28%;left: 55%;top: 52%;}
} 

#chat3{
	z-index:10;
	position: absolute;
	left: 35%;
	top:67%;
	opacity: 0.9;
	width: 0%;
	height: 0%;
	animation:chatth 1s 0.4s forwards;
	-moz-animation:chatth 1s 0.4s forwards; /* Firefox */
	-webkit-animation:chatth 1s 0.4s forwards; /* Safari and Chrome */
	-o-animation:chatth 1s 0.4s forwards; /* Opera */ 
}

@keyframes chatth
{
0% {width: 0%;height:0%;left: 35%;top: 67%;}
100% {width: 15%;height: 30%;left: 32%;top: 52%;}
}

@-moz-keyframes chatth
{
0% {width: 0%;height:0%;left: 35%;top: 67%;}
100% {width: 15%;height: 30%;left: 32%;top: 52%;}
}

@-webkit-keyframes chatth
{
0% {width: 0%;height:0%;left: 35%;top: 67%;}
100% {width: 15%;height: 30%;left: 32%;top: 52%;}
}

@-o-keyframes chatth
{
0% {width: 0%;height:0%;left: 35%;top: 67%;}
100% {width: 15%;height: 30%;left: 32%;top: 52%;}
} 

#chat4{
	z-index:10;
	position: absolute;
	left: 61%;
	top:71%;
	opacity: 0.9;
	width: 0%;
	height: 0%;
	animation:chatfour 1s 0.8s forwards;
	-moz-animation:chatfour 1s 0.8s forwards; /* Firefox */
	-webkit-animation:chatfour 1s 0.8s forwards; /* Safari and Chrome */
	-o-animation:chatfour 1s 0.8s forwards; /* Opera */ 
}

@keyframes chatfour
{
0% {width: 0%;height:0%;left: 61%;top: 71%;}
100% {width: 15%;height: 28%;left: 70%;top: 55%;}
}

@-moz-keyframes chatfour
{
0% {width: 0%;height:0%;left: 61%;top: 71%;}
100% {width: 15%;height: 28%;left: 70%;top: 55%;}
}

@-webkit-keyframes chatfour
{
0% {width: 0%;height:0%;left: 61%;top: 71%;}
100% {width: 15%;height: 28%;left: 70%;top: 55%;}
}

@-o-keyframes chatfour
{
0% {width: 0%;height:0%;left: 61%;top: 71%;}
100% {width: 15%;height: 28%;left: 70%;top: 55%;}
} 


</style>

<script>

import loading from '../assets/home/loading.gif'
import train from '../assets/home/train.png'
import pathway from '../assets/home/pathway.png'
import cell1 from '../assets/home/cell1.png'
import cell2 from '../assets/home/cell2.png'
import cell3 from '../assets/home/cell3.png'
import cell4 from '../assets/home/cell4.png'
import mount from '../assets/home/mount.png'
import blank from '../assets/home/blank.jpg'
import chat1 from '../assets/home/chat1.png'
import chat2 from '../assets/home/chat2.png'
import chat3 from '../assets/home/chat3.png'
import chat4 from '../assets/home/chat4.png'

export default {
  data: function(){
    return{
    	load: loading,
    	train: train,
    	pathway: pathway,
    	cell1: cell1,
    	cell2: cell2,
    	cell3: cell3,
    	cell4: cell4,
    	chat1: chat1,
    	chat2: chat2,
    	chat3: chat3,
    	chat4: chat4,
    	mount: mount,
    	blank: blank,
    	show: false,
    	show1: false,
    	scrollTop: 0,
    	state: 'paused',
    	state: 'paused'
    }
  },

  mounted(){
  		window.addEventListener('scroll', this.Scroll, true)
	},

  methods:{
  	Scroll () {
      const that = this
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      that.scrollTop = scrollTop
      if (that.scrollTop > 60) {
        that.show = true
        that.state = 'running'
        setTimeout(function() {
        	that.show1 = true
        	that.state1 = 'running'
        }, 14000);
      } 
    },

  	/*enter(){
  		this.show = !this.show		
  	}*/
  }

}


</script>
