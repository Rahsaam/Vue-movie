<template>
    <Navbar />
    <!-- <main-poster
    :src="`${API_IMAGE_BASE_URL}${API_IMAGE_SIZE_2XLG}${movieActive.poster_path}`"
    :title="movieActive.original_title"
    :id="movieActive.id"
  /> -->
  <div class="h-16"></div>
  <middleNavbar />
  <PeopleResultSection />
  <MovieResultSection />
  <TvShowResultSection />
</template>

<script setup>
    import Navbar from '@/components/Navbar/Navbar.vue'
    import middleNavbar from '@/components/HomePage/middleNavbar.vue'
    import MovieResultSection from '@/components/SearchResult/MovieResultSection.vue'
    import PeopleResultSection from '@/components/SearchResult/PeopleResultSection.vue'
    import TvShowResultSection from '@/components/SearchResult/TvShowResultSection.vue'
</script>

<style>

</style>