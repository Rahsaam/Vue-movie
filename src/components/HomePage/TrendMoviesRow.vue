<template>
  <div class="flex justify-between">
    <h2 class="text-yellow-400 text-2xl">
      <slot></slot>
    </h2>
    <button class="btn-secodary">more...</button>
  </div>
  <div class="w-full overflow-x-scroll whitespace-no-wrap mx-auto mt-5 [&::-webkit-scrollbar]:hidden">
    <div class="flex flex-row space-x-3 mx-auto">
      <trend-movies v-for="movie in movies" :key="movie.id" :movie="movie" :activeId="activeId"/>
    </div>
  </div>
</template>

<script setup>
import TrendMovies from './TrendMovies.vue'


const props = defineProps({
  movies: Object,
  activeId: Number
})

</script>

<style scoped>

</style>
