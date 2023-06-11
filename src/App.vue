<template>
  <div class="h-100 w-full bg-my-color-primary-gray">
    <main-poster/>
    <middle-navbar/>
    <trend-movies :data="trendmovies"/>
  </div>
</template>

<script setup>
import trendMovies from './components/TrendMovies.vue';
import mainPoster from './components/MainPoster.vue'
import middleNavbar from './components/MiddleNavbar.vue'

    // trend movies data
    import movie1 from './assets/movie-1.png';
    import movie2 from './assets/movie-2.png';
    import movie3 from './assets/movie-3.png';
    import movie4 from './assets/movie-4.png';
    import movie5 from './assets/movie-5.png';
    import movie6 from './assets/movie-6.png';
    


    const trendmovies = [
        {
            img: movie1,
            imdb: 8.2,
            genere: "Animation",
            liked: "90%",
            name: "Sonic",
            id: 1
        },
        {
            img: movie2,
            imdb: 7.2,
            genere: "Action",
            liked: "85%",
            name: "Morbius",
            id: 2
        },
        {
            img: movie3,
            imdb: 7.6,
            genere: "fantacy",
            liked: "92%",
            name: "Adam project",
            id: 3
        },
        {
            img: movie4,
            imdb: 7.9,
            genere: "Comedy",
            liked: "92%",
            name: "Free guy",
            id: 4
        },
        {
            img: movie5,
            imdb: 7.7,
            genere: "Action",
            liked: "88%",
            name: "Batman",
            id: 5
        },
        {
            img: movie6,
            imdb: 7.8,
            genere: "Action",
            liked: "87%",
            name: "Unchrted",
            id: 6
        },
    ]
 
</script>

<style scoped>

</style>