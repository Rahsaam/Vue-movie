<template>
  <div class="container 2xl mx-auto max-w-7xl">
    <Navbar />>
    <!-- <main-poster
    :src="`${API_IMAGE_BASE_URL}${API_IMAGE_SIZE_2XLG}${movieActive.poster_path}`"
    :title="movieActive.original_title"
    :id="movieActive.id"
    /> -->
    <div class="h-16"></div>
    <searchbar />
    <section class="mx-auto mt-10 container max-w-sm sm:max-w-2xl md:max-w-5xl lg:max-w-7xl scroll-mt-16">
      <PeopleResultSection />
      <MovieResultSection />
      <TvShowResultSection />
    </section>
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar/Navbar.vue'
import searchbar from '@/components/General/searchbar.vue'
import middleNavbar from '@/components/HomePage/middleNavbar.vue'
import MovieResultSection from '@/components/SearchResult/MovieResultSection.vue'
import PeopleResultSection from '@/components/SearchResult/PeopleResultSection.vue'
import TvShowResultSection from '@/components/SearchResult/TvShowResultSection.vue'
</script>

<style></style>
