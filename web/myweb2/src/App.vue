<template>

  <div id="app">

    <div id="nav" >

      <a href="/">
      <img :src="logo" id="logo" />
      </a>

      <img :src="nav1" id="train" />

      <div class="header_bottom">

            <ul class="nav">

                <li><router-link to="/Home" id="ahome">Home</router-link></li>

                <li><router-link to="/Description" class="aproject">Project</router-link>

                  <div class="dropdown-content1">

                    <router-link to="/Description">Description</router-link>

                    <router-link to="/Design">Design</router-link>

                    <router-link to="/Hardware">Hardware</router-link>

                    <router-link to="/Safety">Safety</router-link>

                    <router-link to="/Results">Results</router-link>

                    <router-link to="/Future">Future</router-link>

                    

                  </div>

                </li>

                <li><router-link to="/Model" id="amodel">Modeling</router-link>

                </li>

                <li><router-link to="/HP" id="ahp">Human Practice</router-link>

                  <div class="dropdown-content2">

                    <router-link to="/HP">Human Practice</router-link>

                    <router-link to="/IHP">Integrated Human Practice</router-link>

                    <router-link to="/EAE">Education and Engagement</router-link>

                    <router-link to="/Inclusion">Inclusion</router-link>

                    <router-link to="/Bioethics">Bioethics</router-link>

                  </div>

                </li>

                <li><router-link to="/Team" id="ateam">Team</router-link>

                  <!-- <div class="dropdown-content3">
                  <router-link to="/Team">Team</router-link>
                  <router-link to="/Members">Members</router-link>
                  <router-link to="/Attributions">Attributions</router-link>
                </div>
                </div> -->

                </li>

            </ul>

      </div>

    </div>
    <br>
    <router-view id="insert" />
    <br style="background-color: white;">
    <myfooter> </myfooter>
    <!-- <myfooter v-bind:class="{'bottom-fix-footer': isnotFull}"> </myfooter> -->
    <div id="goup" style="display: inline;" v-if="isshow" title="Back to top">
      <img :src="up" style="width: 85%;transform: rotate(-30deg);" @click="backtop" />
    </div>
  </div>

</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  //background-color: #4F4F4F;
}

#nav{
  background-color: #009ACD;
  position: fixed;
  height: 105px;
  width: 100%;
  z-index: 100;
  margin:0;
  padding:0;
  opacity: 0.92;
}

#ahome{
  position: fixed;
  left:29%;
  top:21px;
  font-size: 1.5rem;
}

.aproject{
  position: fixed;
  left:40%;
  top:34px;
}

#amodel{
  position: fixed;
  left:50%;
  top:34px;
}

#ahp{
  position: fixed;
  left:72.5%;
  top:34px
}

#ateam{
  position: fixed;
  left:63%;
  top:34px;
}

#logo{
  float: left;
  left:0%;
  position: fixed;
  height: 130px;
}

#train{
  height:105px;
  width:70%;
  float: left;
  left: 20%;
  position: fixed;
}

h1{
  font-family: 'Comic Sans MS';
  font-weight: bold !important;
  font-size: 3rem !important;
}

h2{
  font-family: 'Comic Sans MS','微软雅黑';
  font-size: 1.9rem !important;
}

h3, h4{
  padding-top: 3%;
}

#insert{
  margin-top: 4%;
}

// .bottom-fix-footer{
//   position: fixed;
//   bottom: 0%;
// }

.header_bottom{
  margin:0 auto;
  padding: 0px;
  height:10%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.header_bottom ul{
  height:30px;
  line-height:5%;
  width:680px;
  color: #0f8f3c;
  display: flex;
}

.header_bottom ul li{
  float:left;
  display:inline;
}

.header_bottom ul li a{
  color:#afeeee;
  font-size:1.1rem;
  font-weight: bold;
  text-decoration: none;
}

.header_bottom ul li a:hover{ color:#1E90FF;}

.nav a{
   display: block;
   text-decoration: none;
   height: 50px;
   text-align: center;
   line-height: 50px;
   color: white;
   padding-left: 20px;
   padding-right: 20px;
}

.dropdown-content1{
  display: none;
  position: fixed;
  margin-top: 75px;
  margin-left: 22%;
  padding: 0;
  background-color: black;
}

.dropdown-content2{
  display: none;
  position: fixed;
  margin-top: 75px;
  margin-left: 54%;
  padding: 0;
  background-color: black;
}


.dropdown-content1 a,.dropdown-content2 a,.dropdown-content3 a{
  text-align: left;
}

.nav li:hover .dropdown-content1{
  display: block;
  z-index:10;
}

.nav li:hover .dropdown-content2{
  display: block;
  z-index:10;
}

.nav li:hover .dropdown-content3{
  display: block;
  z-index:10;
}

.dropdown-content1 :hover a{
  background-color: #FFFFFF;
}

#goup{
  position: fixed;
  z-index: 90;
  right: 30px;
  bottom: 31px;
  display: none;
  width: 53px;
  height: 53px;
  line-height:50px;
  border-radius: 50%;
  transition: all 0.5s;
  text-align: center;
  box-shadow: 0 0.9px 1px 0 rgba(0,0,0,0.16), 0 1px 3px 0 rgba(0,0,0,0.12);
}

</style>

<script>
import Vue from 'vue'
import myfooter from './components/Footer'
import router from './router/index.js'
import tabbar from './components/Tabbar'
import up from './assets/up.png'
import logo from './assets/home/logo.png'
import nav1 from './assets/home/nav3.png'
export default {
  components: {
    tabbar: tabbar,
    myfooter
  },
  router,

  data: function () {
    return {
      up: up,
      nav1: nav1,
      logo: logo,
      isshow: false,
      scrollTop: 0,
      bgImg: {
        backgroundImage: 'url(' + require('./assets/home/nav1.png') + ')',
        height: '100vh',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '70% 25%'
      }
    }
  },

  mounted () {
    window.addEventListener('scroll', this.handleScroll, true)
  },
  methods: {
    handleScroll () {
      const that = this
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      that.scrollTop = scrollTop
      if (that.scrollTop > 60) {
        that.isshow = true
      } else {
        that.isshow = false
      }
    },

    backtop () {
      const that = this
      const timer = setInterval(() => {
        const ispeed = Math.floor(-that.scrollTop / 5)
        document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed
        if (that.scrollTop === 0) {
          clearInterval(timer)
        }
      }, 10)
    }
  }
}

</script>
