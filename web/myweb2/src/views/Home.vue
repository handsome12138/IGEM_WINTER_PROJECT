<template>
    <div>
        <img :src="load" id="load" />
    </div>
</template>

<style>

#load{
	height: 10%;
}

</style>

<script>

import loading from '../assets/home/loading.gif'

export default {
  data: function(){
    return{
    	load: loading
    }
  }
}

</script>
