<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">

    <router-link to="/">Home</router-link>
    <router-link to="/Information">Information</router-link>
    
    <router-view></router-view>
    </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  
  },
  data(){
    }
  }

</script>

<style>
</style>

