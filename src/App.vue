<template>
  <div id="app">
    <div class="nav">
    <div class="logo">
    <img alt="Vue logo" src="./assets/logo.png">
  </div>
  <div class="link">
    <router-link to="/">Home</router-link>
    <router-link to="/Information">Information</router-link>
    </div>
    
    <router-view></router-view>
    </div>
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
.logo img{
  width: 10%;
}
.link a{
  text-decoration: none;
  display: flex;
}
</style>

