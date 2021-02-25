<template>
    <div class="mynav" id="mynav">
        <ul class="leftnav">
            <li v-for="nav in navs" class="nav-item" v-bind:key="nav.name">
                <!-- <a class="nav-link" :href="'#' + nav.id">{{nav.name}}</a> -->
                <div class="rail">
                    <!-- <img :src="side" style="width: 20%;" /> -->
                    <img :src="time" style="height: 40px;width: auto;" />
                    <a class="nav-link" @click="jump_anchor(nav.id)">{{nav.name}}</a>
                </div>            
                
            </li>
        </ul>
        <!-- a标签会使得浏览器url变化 -->
        <!-- <div v-for="nav in navs" v-bind:key="nav">
            <a :href="'#' + nav.id">{{nav.name}}</a>
        </div> -->
    </div>
</template>

<style lang="scss" scoped>
.mynav{
    flex: 0 0 20%;
    padding-top:5%;
    -ms-flex: 0 0 20%;
    -moz-flex: 0 0 20%;/* Firefox */
    -webkit-flex: 0 0 20%; /* Safari and Chrome */
    -o-flex: 0 0 20%; /* Opera */
    .leftnav{
        font-family: 'Sansita',sans-serif;
        list-style-type: none;
        position:fixed;
        padding-top: 2%;
        padding-left: 2%;
        a{
            text-align: left;
            font-size: 1rem;
            color: #767676;
            cursor: pointer;
            // position: absolute;
            top: 30%;
            left: 0.8%;
            &:link, &:visited{
                color:black
            }
            &:hover, &:active{
                color: yellowgreen;
                font-weight: bold;               
            }
        }
    }
}

.rail{
    position: relative;
    display: flex;
    height: 40px;
}

</style>

<script>
import time0 from '../assets/time0.png'
export default {
  props: [
    'navs'
  ],
  data () {
    return {
        time: time0
    }
  },
  methods: {
    jump_anchor (id) {
      console.log(id)
      const downloadEle = document.querySelector('#mynav')
      if (downloadEle) {
        downloadEle.scrollIntoView({behavior: "smooth"}) // true 是默认的
      }
      document.querySelector('#' + id).scrollIntoView({behavior: "smooth"})  
    }
  }

}
</script>
