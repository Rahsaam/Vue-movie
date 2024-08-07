<template>
    <div class="w-full text-center">
      <div class="flex justify-between mb-3 items-center">
        <h2 class="text-yellow-400 text-2xl">
          <slot name="title"></slot>
        </h2>
      </div>
      <div class="flex justify-between flex-wrap w-full">
        <div v-for="movie in movies" :key="movie.id">
          <movie-card :movie="movie" />
        </div>
      </div>
        <slot name="pagination"></slot>
    </div>
  </template>
  
  <script setup>
  import MovieCard from '@/components/General/MovieCard.vue'
  
  defineProps(['movies'])
  </script>