<template>
  <div class="relative">
    <router-link :to="{ name: 'SingleMovie', params: { id } }">
      <img :src="src" alt="" class="w-full mx-auto h-full rounded-md" />
      <div
        class="text-overlay text-center absolute inset-0 flex flex-col justify-center items-center w-full h-full overflow-hidden bg-black bg-opacity-70 p-6 rounded-md backdrop-blur-lg opacity-0 duration-300 text-xl hover:opacity-90"
      >
        <span class="text-sm md:text-md" v-for="genre in genreNames" :key="genre">{{ genre }}</span>
        <div class="like-box text-sm md:text-md">
          <i class="fas fa-heart"></i>
          <span>{{ liked }}</span>
        </div>
      </div>
    </router-link>
  </div>
  <p class="mt-2">{{ title }}</p>
</template>

<script setup>
const props = defineProps({
  genres: Array,
  id: Number,
  src: String,
  liked: Number,
  title: String
})

const genersNames = ref([])

import { getWatchGenreNames } from '@/components/utils/genres'
import { ref } from 'vue'

const res = getWatchGenreNames(props.genres)
res.then((data) => (genersNames.value = data))
</script>
