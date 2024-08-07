<template>
  <div>
  <Navbar />
  <search-loader :endpoint="`${API_BASE_URL}/3/search/movie`">
    <template #loaded="{data}">
      <div v-for="movie in data.slice(0, 1)" :key="movie.id">
        <main-poster
        :src="`${API_IMAGE_BASE_URL}${API_IMAGE_SIZE_2XLG}${movie.poster_path}`"
        :title="movie.original_title"
        :id="movie.id"
        />
      </div>
    </template>
  </search-loader>
  <middleNavbar />
  <div class="h-16"></div>
  <div class="container 2xl mx-auto max-w-7xl">
    <section
      class="mx-auto mt-10 container max-w-sm sm:max-w-2xl md:max-w-5xl lg:max-w-7xl scroll-mt-16"
    >
      <PeopleResultSection />
      <MovieResultSection />
      <TvShowResultSection />
    </section>
  </div>
</div>
</template>

<script setup>
import { API_BASE_URL, API_IMAGE_BASE_URL, API_IMAGE_SIZE_2XLG } from '@/components/ApiDetails/api-constant'
import Navbar from '@/components/Navbar/Navbar.vue'
import mainPoster from '@/components/HomePage/MainPoster.vue'
import middleNavbar from '@/components/HomePage/MiddleNavbar.vue'
import SearchLoader from '@/components/General/SearchLoader.vue'
import MovieResultSection from '@/components/SearchResult/MovieResultSection.vue'
import PeopleResultSection from '@/components/SearchResult/PeopleResultSection.vue'
import TvShowResultSection from '@/components/SearchResult/TvShowResultSection.vue'
</script>

<style></style>
