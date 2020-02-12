<template>
<div class="description">
   <p> <u> Son ID est :</u> {{ id }}</p>
   <p> <u> Nom : </u>{{film.Title}}</p>
   <img :src="film.Poster">
   <p>  <u> Année de sortie :</u> {{film.Year}}</p>
   <p> <u>Distribution :</u> {{film.Actors}}</p>
   <p> <u> Description:</u> <br> {{film.Plot}}</p>
   </div>
</template>

<script>


const axios = require ('axios').default;
export default {
  name: 'Information',
  data(){
    return{
      film: null,
      id: this.$route.params.id
    }
  },
  mounted(){

    axios
  .get('http://www.omdbapi.com/?i='+ this.id +'&apikey=904eed5c')
  .then(response => (this.film = response.data))
  }
}
</script>

<style>

p{
    margin-left:5%;
}
</style>
