<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/> -->
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
  }
}
</style>

<script>
// import Vue from 'vue'
import tabbar from './components/Tabbar'
export default {
  components: {
    tabbar: tabbar
  }
}
</script>script
