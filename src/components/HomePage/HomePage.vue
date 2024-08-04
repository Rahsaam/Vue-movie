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
    <DataLoader :endpoint="`${API_BASE_URL}/3/movie/popular?language=en-US`">
      <template #loaded="{data}">
        <trend-movies-row :movies="data.slice(0, 6)" :active-id="movieActive.id">
          Trend movies
        </trend-movies-row>
      </template>
    </DataLoader>
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
import {
  API_IMAGE_BASE_URL,
  API_IMAGE_SIZE_2XLG,
} from '@/components/ApiDetails/api-constant'
import { API_BASE_URL } from '@/components/ApiDetails/api-constant'
import mainPoster from '@/components/HomePage/MainPoster.vue'
import sppiner from '@/components/dls/Sppiner.vue'
import middleNavbar from '@/components/HomePage/MiddleNavbar.vue'
import movieList from '@/components/HomePage/MovieList.vue'
import footerContent from '@/components/dls/FooterContent.vue'
import TrendMoviesRow from '@/components/HomePage/TrendMoviesRow.vue'
import DataLoader from '@/components/General/DataLoader.vue'
import Navbar from '@/components/Navbar/Navbar.vue'
import {useMovies} from '@/composables/useMovies.js'

const { popularMovies, mainMovies, upComings, oldMovies, tvShows, series, loading, error, movieActive } = useMovies();
</script>

<style scoped>
.selected {
  border: 2px solid red;
}

::-webkit-scrollbar {
  display: none;
}
</style>
