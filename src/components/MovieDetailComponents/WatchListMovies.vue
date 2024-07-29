<template>
  <div class="text-white w-80% mx-auto relative mt-10">
    <div class="relative" aria-selected="true">
      <div class="w-full absolute flex items-center justify-between right-1 left-1 top-1 z-20">
        <button @click="removeFromWatchList(id)">
          <i class="fas fa-bookmark text-2xl hover:text-gray-400"></i>
        </button>
      </div>
      <router-link :to="{name: 'WatchListDetail', params: {id}}">
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
  </div>
</template>

<script setup>
import {getWatchGenreNames} from '@/components/utils/genres'
import { inject, ref, watch } from 'vue'
import { USER } from '@/components/utils/keys'
import { API_BASE_URL, API_VERSION, API_READ_ACCESS_TOKEN} from '@/components/ApiDetails/api-constant'
import { useToast } from 'vue-toastification'
import { useFetch } from '@/composables/useFetch.js'

const {data, loading, error, doFetch} = useFetch();
const toast = useToast()
const genreNames = ref([])
const user = inject(USER)

const props = defineProps({
  src: String,
  genres: Array,
  title: String,
  liked: Number,
  release: String,
  id: Number
})
let res = getWatchGenreNames(props.genres)
res.then(data => genreNames.value = data)


function removeFromWatchList(movieId) {
  doFetch(
    `${API_BASE_URL}${API_VERSION}/account/${user.value.id}/watchlist`,
    { media_type: 'movie', media_id: movieId, watchlist: false },
    'POST'
  )
  toast.success('movie removed')
}


</script>
