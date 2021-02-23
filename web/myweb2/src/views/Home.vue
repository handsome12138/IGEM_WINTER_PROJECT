<template>
    <div>
    	<div id=theme>
    		<img :src="pathway" id="pathway" />
    		<img :src="mount" id="mount" />
    	</div>
        
        <img :src="cell1" id="cell1" />
        <img :src="cell2" id="cell2" />
        <img :src="cell3" id="cell3" />
        <img :src="cell4" id="cell4" />
        <div>
        	<transition>
        	<img :src="train" v-show="show" id="toytrain" name="toy" />
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
	left: -10%;
	animation:mymove 8s 1s;
	-moz-animation:mymove 8s 1s; /* Firefox */
	-webkit-animation:mymove 8s 1s; /* Safari and Chrome */
	-o-animation:mymove 8s 1s; /* Opera */
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
    	mount: mount,
    	blank: blank,
    	show: false
    }
  },

  mounted(){
  		this.enter();
	},

  methods:{
  	enter(){
  		this.show = !this.show		
  	}
  }

}


</script>

