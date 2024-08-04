<template>
  <router-link
        :to="{ name: 'SingleMovie', params: { id: movie.id } }"
      >
        <div class="text-white relative " aria-selected="true">
          <div class="relative min-w-[150px] cursor-pointer">
            <div class="absolute flex items-center justify-between left-2 right-2 top-1 z-20">
              <img src="@/assets/IMDB_Logo.png" class="w-10 h-4" alt="imdb-img" />
              <span class="imdb-point">{{ movie.vote_average }}</span>
            </div>
            <img
              :src="`${API_IMAGE_BASE_URL}${API_IMAGE_SIZE_XLG}${movie.poster_path}`"
              :alt="movie.original_title"
              class="w-full h-full rounded-md"
              :class="{ selected: movie.id === activeId }"
            />
            <div class="overlay-img">
              <i class="fas fa-play"></i>
            </div>
          </div>
          <span>{{ movie.original_title }}</span>
        </div>
      </router-link>
</template>

<script setup>
import {
  API_IMAGE_BASE_URL,
  API_IMAGE_SIZE_XLG,
} from '@/components/ApiDetails/api-constant'
defineProps(['movie', 'activeId'])
</script>

<style scoped>
.selected {
  border: 2px solid red;
}
</style>