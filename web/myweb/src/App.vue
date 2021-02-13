<template>

  <div>
    <tabbar> </tabbar>
    <br>
    <div id="nav">
      <router-link to="/Home">Home</router-link> |
      <router-link to="/Project">Project</router-link> |
      <router-link to="/Model">Model</router-link> |
      <router-link to="/Team">Team</router-link>
    </div>
    <router-view/>
    <br>
    <myfooter v-bind:class="{'bottom-fix-footer': isnotFull}"> </myfooter>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  };
}
.bottom-fix-footer{
  position: fixed;
  bottom: 0%;
}
</style>

<script>
import Vue from 'vue'
import myfooter from './components/Footer'
import router from './router/index.js'
import tabbar from './components/Tabbar'
export default {
  components: {
    tabbar: tabbar,
    myfooter,
  },
  router, 
  data: function(){
    return{
      isnotFull: false
    }
  },
  mounted(){
    console.log(this.isnotFull)
    var _wh = window.innerHeight;
    // var _dh = $(document).height();
    var _bh = document.body.offsetHeight;
    this.isnotFull = _bh < _wh;
    // console.log(_bh, _wh, this.isnotFull)
  },
  methods:{

  }
}
</script>
