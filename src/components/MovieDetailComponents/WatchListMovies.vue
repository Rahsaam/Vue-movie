<template>
  <div class="text-white w-80% mx-auto relative h-36">
    <div class="relative" aria-selected="true">
      <div class="w-full absolute flex items-center justify-between right-1 left-1 top-1 z-20">
        <button>
          <i class="fas fa-bookmark text-2xl hover:text-gray-400"></i>
        </button>
      </div>
      <router-link :to="{name: 'WatchListDetail', params: {id}}">
        <img :src="src" alt="" class="w-full mx-auto h-full rounded-md" />
        <div
          class="text-overlay text-center absolute inset-0 flex flex-col justify-center items-center w-full h-full overflow-hidden bg-black bg-opacity-70 p-6 rounded-md backdrop-blur-lg opacity-0 duration-300 text-xl hover:opacity-90"
        >
          <span class="text-sm md:text-md">Fantacy</span>
          <div class="like-box text-sm md:text-md">
            <i class="fas fa-heart"></i>
            <span>90%</span>
          </div>
        </div>
      </router-link>
    </div>
    <span>Uncharted</span>
  </div>
</template>

<script setup>
const genreNames = ref([])
import {getWatchGenreNames} from '@/components/utils/genres'
import { ref } from 'vue'
const props = defineProps({
  src: String,
  genres: Array,
  title: String,
  liked: Number,
  release: String,
  id: Number
})
let res = getWatchGenreNames(props.genres)
console.log(res);
res.then(data => console.log('genres' ,data))
</script>
