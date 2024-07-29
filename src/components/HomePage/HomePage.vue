<template>
  <navbar />
  <main-poster
    :src="`${API_IMAGE_BASE_URL}${API_IMAGE_SIZE_2XLG}${movieActive.poster_path}`"
    :title="movieActive.original_title"
    :id="movieActive.id"
  />
  <middleNavbar />
  <div class="h-16"></div>
  <section
    id="trend"
    class="mx-auto mt-10 container max-w-sm sm:max-w-2xl md:max-w-5xl lg:max-w-7xl scroll-mt-16"
  >
    <div class="flex justify-between">
      <h2 class="text-yellow-400 text-2xl">Trend movies</h2>
      <button class="btn-secodary">more...</button>
    </div>
    <div class="w-full overflow-x-scroll whitespace-no-wrap mx-auto mt-5">
      <div
        class="flex flex-row space-x-3 mx-auto [&::-webkit-scrollbar]:hidden"
        v-if="popularMovies.length"
      >
        <!-- Trend Movies Row -->
        <router-link
          :to="{ name: 'SingleMovie', params: { id: movie.id } }"
          v-for="movie in popularMovies"
          :key="movie.id"
        >
          <div class="text-white relative" aria-selected="true">
            <div class="relative min-w-[150px] cursor-pointer">
              <div class="absolute flex items-center justify-between left-2 right-2 top-1 z-20">
                <img src="../../assets/IMDB_Logo.png" class="w-10 h-4" alt="imdb-img" />
                <span class="imdb-point">{{ movie.vote_average }}</span>
              </div>
              <img
                :src="`${API_IMAGE_BASE_URL}${API_IMAGE_SIZE_XLG}${movie.poster_path}`"
                :alt="movie.original_title"
                class="w-full h-full rounded-md"
                :class="{ selected: movie.id === movieActive.id }"
              />
              <div
                class="overlay-img"
              >
                <i class="fas fa-play"></i>
              </div>
            </div>
            <span>{{ movie.original_title }}</span>
          </div>
        </router-link>
      </div>
      <div v-else>
        <sppiner v-if="loading" />
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
      :series="series"
    />
  </div>
  <div class="text-white" v-else>
    <sppiner v-if="loading" />
    <p v-else>{{ error }}</p>
  </div>
  <footer-content />
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import {
  API_IMAGE_BASE_URL,
  API_IMAGE_SIZE_XLG,
  API_IMAGE_SIZE_2XLG,
} from '@/components/ApiDetails/api-constant'
import {
  fetchTrendMovies,
  fetchMovies,
  fetchUpcomings,
  fetchOldMovies,
  fetchTvShows,
  fetchSeries
} from '@/components/utils/api/homeFetch'
import mainPoster from '@/components/HomePage/MainPoster.vue'
import sppiner from '@/components/dls/Sppiner.vue'
import middleNavbar from '@/components/HomePage/MiddleNavbar.vue'
import movieList from '@/components/HomePage/MovieList.vue'
import footerContent from '@/components/dls/FooterContent.vue'
import Navbar from '@/components/Navbar/Navbar.vue'

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

let counter = 0

let interval

const updateActiveMovie = () => {
  movieActive.value = popularMovies.value[counter++ % 6]
}

onMounted(async () => {
  try {
    popularMovies.value = await fetchTrendMovies()
    movieActive.value = popularMovies.value[counter]
    interval = setInterval(updateActiveMovie, 3000)
    mainMovies.value = await fetchMovies()
    upComings.value = await fetchUpcomings()
    oldMovies.value = await fetchOldMovies()
    tvShows.value = await fetchTvShows()
    series.value = await fetchSeries()
  } catch (err) {
    error.value = err.message
  } finally {
    loading.value = false
  }
})
onUnmounted(() => {
  clearInterval(interval)
})
</script>

<style scoped>
.selected {
  border: 2px solid red;
}

::-webkit-scrollbar {
  display: none;
}
</style>
