<template>

  <div id="app">

    <div id="nav" >

      <img :src="logo" id="logo" />

      <img :src="nav1" id="train" />

      <div class="header_bottom">

            <ul class="nav">

                <li><router-link to="/Home" id="ahome">Home</router-link></li>

                <li><router-link to="/Description" class="aproject">Project</router-link>

                  <div class="dropdown-content1">

                    <router-link to="/Description">Description</router-link>

                    <router-link to="/Design">Design</router-link>

                    <router-link to="/Safety">Safety</router-link>

                    <router-link to="/Results">Results</router-link>

                    <router-link to="/Future">Future</router-link>

                    <router-link to="/Hardware">Hardware</router-link>

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

                <div class="dropdown-content3">

                  <router-link to="/Team">Team</router-link>

                  <router-link to="/Members">Members</router-link>

                  <router-link to="/Attributions">Attributions</router-link>

                </div>

                </li>

            </ul>

      </div>

    </div>
    <br>
    <router-view id="insert" />
    <br style="background-color: white;">
    <myfooter> </myfooter>
    <!-- <myfooter v-bind:class="{'bottom-fix-footer': isnotFull}"> </myfooter> -->
    <div id="goup" style="display: inline;" v-if="isshow">
      <img :src="up" style="width: 90%;transform: rotate(-30deg);" @click="backtop" />
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
  background-color: #4F4F4F;
}

#nav{
  background-color: #87CEEB;
  position: fixed;
  height: 85px;
  width: 100%;
  z-index: 100;
}

#ahome{
  position: fixed;
  left:33%;
  top:3%;
  font-size: 21px;
}

.aproject{
  position: fixed;
  left:42%;
  top:4.5%;
}

#amodel{
  position: fixed;
  left:51%;
  top:4.5%;
}

#ahp{
  position: fixed;
  left:70.5%;
  top:4.5%;
}

#ateam{
  position: fixed;
  left:62%;
  top:4.5%;
}

#logo{
  height:20%;
  width:13%;
  float: left;
  left:0%;
  position: fixed;
}

#train{
  height:16%;
  width:60%;
  float: left;
  left: 25%;
  position: fixed;
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
  font-size:17px;
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
  margin-top: 5.5%;
  margin-left: 19%;
  padding: 0;
  background-color: black;
}

.dropdown-content2{
  display: none;
  position: fixed;
  margin-top: 5.5%;
  margin-left: 48%;
  padding: 0;
  background-color: black;
}

.dropdown-content3{
  display: none;
  position: fixed;
  margin-top: 5.5%;
  margin-left: 38%;
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
  right: 3%;
  bottom: 5%;
  display: none;
  width: 4%;
  height: 9%;
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
