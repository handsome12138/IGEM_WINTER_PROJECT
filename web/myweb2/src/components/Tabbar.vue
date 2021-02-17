<template>
    <div>
        <div class="tabbar" :style="{ 'background-image':'url('+ urltabbar +')' }">
            <router-link to="/Home">Home</router-link> 
            <router-link to="/Project">Project</router-link> 
            <router-link to="/Model">Model</router-link> 
            <router-link to="/Team">Team</router-link>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.tabbar{
    // background: url("https://www.baidu.com/link?url=Lb6DEJ3hREkBnuLr9qVoveOeyK4ePCSLTJlk4nwMoaFAOn8x_Zf5kBXegS6JxS7mLsnQVBdy-mzqItW9Tuqoea&wd=&eqid=8c0f1d1f0002239900000006602cfc3b");
    // background: url(require('~@/assets/tabbar.png'));
    background-size:100% 100%;
    height:200px;
    width:400px;
    margin:auto;
    background-repeat:no-repeat;
    background-position-y: -1cm;
    padding-top:55px;
    padding-left:90px;
    a{
        padding: 11px;
        font-weight: bold;
        color:blue;
        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>

<script>
export default {
    data(){
        return{
            urltabbar: require('@/assets/tabbar.png')
        }
    }
}
</script>