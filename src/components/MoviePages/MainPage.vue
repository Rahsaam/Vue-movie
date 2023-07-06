<template>
  <main-poster/>
  <div class="md:h-32 h-16"></div>
  <section id="trend" class=" mx-auto mt-10 container max-w-sm sm:max-w-2xl md:max-w-5xl lg:max-w-7xl scroll-mt-16">
            <div class="flex justify-between">
                <h2 class="text-yellow-400 text-2xl">Trend movies</h2>
                <button class="btn-secodary">more...</button>
            </div>
            <div class="w-full overflow-x-scroll whitespace-no-wrap mx-auto mt-5">
                <div class="flex flex-row space-x-3 mx-auto [&::-webkit-scrollbar]:hidden">
                    <trend-movies 
                    v-for="movie in popularMovies" 
                    :key="movie.id"
                    :rating="movie.vote_count"
                    :release-date="movie.release_date"
                    :src="`${API_IMAGE_BASE_URL}${API_IMAGE_SIZE}${movie.poster_path}`"
                    :title="movie.original_title"
                    :imdb="movie.vote_average"/>  
                </div>
            </div>
  </section>
       <movie-list :mainMovies="mainMovies"/>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import trendMovies from '../dls/TrendMovies.vue';
import {API_IMAGE_BASE_URL, API_IMAGE_SIZE} from '../ApiDetails/api-constant';
import mainPoster from '../dls/MainPoster.vue'
// import middleNavbar from './components/dls/MiddleNavbar.vue'
import movieList from '../dls/MovieList.vue'

// data arrays
const popularMovies = ref([])
const mainMovies = ref([])

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YjZjMDBlZWVmYzdlZTk0OWFmNGU2MDcyNTU2ZjZhOCIsInN1YiI6IjY0YTJjZDFlOGUyMGM1MDEwZDRlMTc5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZkW2-Er08cN1FMrSp1vVZIwbMwJc0QIyWQY1WxJrx7s'
  }
};

onMounted(() => {
  fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
  .then(response => response.json())
  .then(response =>  {
    popularMovies.value = response.results
  })
  .catch(err => console.error(err));


  fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
  .then(response => response.json())
  .then(response => {
    mainMovies.value = response.results
  })
  .catch(err => console.error(err));
})
</script>

<style>

</style>