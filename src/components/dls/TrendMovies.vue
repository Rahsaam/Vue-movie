<template>
  <router-link :to="{name: 'Trend', params: {id}}">
    <div class="text-white relative" aria-selected="true">
      <div class="relative min-w-[150px] cursor-pointer">
        <div class="absolute flex items-center justify-between left-2 right-2 top-1 z-20">
          <img src="../../assets/IMDB_Logo.png" class="w-10 h-4" alt="imdb-img" />
          <span class="imdb-point">{{ imdb }}</span>
        </div>
        <img :style="movieActiveStyle" :src="src" :alt="title" class="w-full h-full rounded-md" />
        <div
          class="text-overlay text-center absolute inset-0 flex flex-col justify-center items-center w-full h-full overflow-hidden bg-black bg-opacity-70 p-6 rounded-md backdrop-blur-lg opacity-0 duration-300 text-xl hover:opacity-90"
        >
          <span class="text-sm md:text-md">{{ year }}</span>
          <div class="like-box text-sm md:text-md">
            <i class="fas fa-heart"></i>
            <span>{{ rating }}</span>
          </div>
        </div>
      </div>
      <span>{{ title }}</span>
    </div>
  </router-link>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  rating: Number,
  src: String,
  title: String,
  releaseDate: String,
  imdb: Number,
  movieActiveStyle: Object,
  id: Number
})

const year = computed(() => new Date(props.releaseDate).getFullYear())
</script>

<style scoped>
.activeImage {
  border: 1px solid rgb(250 204 21);
}
</style>
