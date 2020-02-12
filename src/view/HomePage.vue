<template>
  <div>
    <h1 class="page"> Liste de films sur Batman :</h1>
    <div class="affiche">
    <div v-for="film in films"
    :key="film.imdbID">
        <div class="carte">
        <h1>{{film.Title}}</h1>
        <img :src="film.Poster">
        <a :href="`#/Information/${film.imdbID}`">Lire plus</a>
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
.page{
    margin-left: 37%;
    text-decoration:underline;
}
.affiche{
    display: flex;
}
.carte{
    margin: 15px;
    width:300px;
    border: solid 1px black;
    background-color: grey;
}
.carte img{
    width: 300px;
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

