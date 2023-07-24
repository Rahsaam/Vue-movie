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
import { inject, ref } from 'vue'
import { USER } from '@/components/utils/keys'
import { API_BASE_URL, API_VERSION, API_READ_ACCESS_TOKEN} from '@/components/ApiDetails/api-constant'
import { useToast } from 'vue-toastification'
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
console.log(res);
res.then(data => genreNames.value = data)


async function removeFromWatchList(movieId) {
  try {
    if (!user.value) {
      alert('please login to the page first')
    }
    const url = `${API_BASE_URL}${API_VERSION}/account/${user.value.id}/watchlist`
    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        Authorization: `Bearer ${API_READ_ACCESS_TOKEN}`
      },
      body: JSON.stringify({
        media_type: 'movie',
        media_id: movieId,
        watchlist: false
      })
    }

    const response = await fetch(url, options)
    const data = await response.json()
    toast.success('remove from watch list')
    console.log(data)
  } catch (err) {
    console.log(err)
  }
}


</script>
