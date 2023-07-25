<template>
  <navbar/>
  <div v-if="loading">

  </div>
  <main-poster 
  :src="`${API_IMAGE_BASE_URL}${API_IMAGE_SIZE_2XLG}${movieActive.poster_path}`"
  :title="movieActive.original_title"
  />

  <middleNavbar/>
  <div class="md:h-32 h-16"></div>
  <section id="trend" class=" mx-auto mt-10 container max-w-sm sm:max-w-2xl md:max-w-5xl lg:max-w-7xl scroll-mt-16">
            <div class="flex justify-between">
                <h2 class="text-yellow-400 text-2xl">Trend movies</h2>
                <button class="btn-secodary">more...</button>
            </div>
            <div class="w-full overflow-x-scroll whitespace-no-wrap mx-auto mt-5">
                <div class="flex flex-row space-x-3 mx-auto [&::-webkit-scrollbar]:hidden" v-if="popularMovies.length">
                  
                    <trend-movies 
                    v-for="movie in popularMovies" 
                    :key="movie.id"
                    :rating="movie.vote_count"
                    :release-date="movie.release_date"
                    :src="`${API_IMAGE_BASE_URL}${API_IMAGE_SIZE_XLG}${movie.poster_path}`"
                    :title="movie.original_title"
                    :imdb="movie.vote_average"
                    /> 
                 
                </div>
                <div v-else>
                    <sppiner v-if="loading"/>
                    <p v-else>{{ error }}</p>
                  </div>
            </div>
  </section>
      <div v-if="mainMovies.length"> 
        <movie-list 
        :mainMovies="mainMovies"
        :upComings="upComings"
        :oldMovies="oldMovies"
        :tvShows="tvShows"
        :series="series"/>
      </div>
      <div class="text-white" v-else>
        <sppiner v-if="loading"/>
        <p v-else>{{ error }}</p>
      </div>
      <footer-content/>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import trendMovies from '@/components/dls/TrendMovies.vue';
import {
  API_IMAGE_BASE_URL,
  API_IMAGE_SIZE_MD,
  API_IMAGE_SIZE_XLG,
  API_IMAGE_SIZE_2XLG,
  API_BASE_URL,
  API_VERSION
  } from '@/components/ApiDetails/api-constant';
import {
  TREND_MOVIES_URL,
  MOVIES_URL,
  GENRE_MOVIES_URL,
  GENRE_SERIES_URL,
  UPCOMING_MOVIES_URL,
  OLD_MOVIES_URL,
  TVSHOWS_URL,
  SERIES_URL
} from '@/components/ApiDetails/endPoints'
import {client} from '@/components/utils/client'
import mainPoster from '@/components/dls/MainPoster.vue'
import sppiner from '@/components/dls/Sppiner.vue'
import middleNavbar from '@/components/dls/MiddleNavbar.vue'
import movieList from '@/components/dls/MovieList.vue'
import footerContent from '@/components/dls/FooterContent.vue'
import Navbar from '@/components/Navbar/Navbar.vue'

// import useFetch from '@/composables/useFetch.js'

// data arrays
const popularMovies = ref([])
const mainMovies = ref([])
const upComings = ref([])
const oldMovies = ref([])
const tvShows = ref([])
const series = ref([])
const loading = ref(true)
const error = ref(null)
const movieActive = ref('')
// const {doFetch, data, error, loading} = useFetch()

let counter = 0

const fetchTrendMovies = async () => {
    const response = await client(`${API_BASE_URL}${API_VERSION}${TREND_MOVIES_URL}?language=en-US`)
    popularMovies.value = response.results.slice(0, 8);
    movieActive.value = popularMovies.value[counter]
};

 const fetchMovies = async () => {
    const data = await client(`${API_BASE_URL}${API_VERSION}${MOVIES_URL}?language=en-US`)
    mainMovies.value = data.results; 
};

const fetchUpcomings = async () => {
    const data = await client(`${API_BASE_URL}${API_VERSION}${UPCOMING_MOVIES_URL}?language=en-US&page=1`)
    upComings.value = data.results
};

const fetchOldMovies = async () => {
    const data = await client(`${API_BASE_URL}${API_VERSION}${OLD_MOVIES_URL}?language=en-US&page=1`)
    oldMovies.value = data.results
}

const fetchTvShows = async () => {
    const data = await client(`${API_BASE_URL}${API_VERSION}${TVSHOWS_URL}?language=en-US`)
    tvShows.value = data.results
}

const fetchSeries = async () => {
    const data = await client(`${API_BASE_URL}${API_VERSION}${SERIES_URL}?language=en-US`)
    series.value = data.results; 
};


let interval;
onMounted(() => {
  fetchTrendMovies();
  interval = setInterval(function() {
        // updating active movei
        movieActive.value = popularMovies.value[(counter++) % 9];
    }, 4000);
  fetchMovies();
  fetchUpcomings();
  fetchOldMovies();
  fetchTvShows();
  fetchSeries();
});
onUnmounted(() => {
  clearInterval(interval)
})

</script>

<style scoped>
 
</style>
