<template>
  <div>
    <h1>Home Page</h1>
    <div class="affiche">
    <div v-for="film in films"
    :key="film.imdbID">
        <div class="carte">
        <h1>{{film.Title}}</h1>
        <h2>{{film.Year}}</h2>
        <img :src="film.Poster">
        </div>
    </div>
    </div>
    </div>
</template>

<script>
const axios = require ('axios').default;
export default {
  name: 'HomePage',
  data(){
    return{
      films: null
    }
  },
  mounted(){

    axios
  .get('http://www.omdbapi.com/?s=batman&apikey=904eed5c')
  .then(response => (this.films = response.data.Search))
  }
}
</script>

<style>
.affiche{
    display: flex;
    width: 10O% !important;
}
.carte{
    border: solid 1px black;
    background-color: red;
}
.carte h1{
    font-size: 1.3rem;
    display: flex;
    justify-content: center;
}
.carte h2{
    display: flex;
    justify-content: center;
}
</style>

