<template>
  <article class="flex lg:flex-row flex-col lg:mt-14 mt-4">
    <div class="relative lg:w-72 text-white cursor-pointer">
      <button @click="addTowatchList(id)" class="absolute top-2 left-2 z-20 border-none">
        <i class="fa-regular fa-bookmark text-xl hover:font-bold"></i>
      </button>
      <router-link :to="{ name: 'movieDetail', params: { id } }">
        <img :src="src" class="w-full rounded-2xl" :alt="title" />
        <div
          class="text-overlay text-center absolute inset-0 flex flex-col justify-center items-center lg:w-full h-full overflow-hidden bg-black bg-opacity-70 p-6 rounded-xl backdrop-blur-lg opacity-0 duration-300 text-xl hover:opacity-90"
        >
          <i class="fas fa-play"></i>
        </div>
      </router-link>
    </div>
    <div class="lg:ml-3 p-2 w-full">
      <div class="flex justify-between w-full font-bold">
        <h2 class="text-white">{{ title }}</h2>
        <span class="hidden lg:block text-white"
          ><span class="text-yellow-500 font-bold text-2xl">{{ imdb }}</span
          >/10</span
        >
      </div>
      <div class="flex mt-4">
        <small class="text-my-color-hover-gray text-2sm hidden lg:block"
          >{{ year }} ,{{ language }}</small
        >
      </div>
      <div class="gap-x-4 mt-4 hidden lg:flex text-white">
        <span
          class="border-2 py-2 px-3 rounded-full flex"
          v-for="genere in genreNames"
          :key="genere"
          >{{ genere }}</span
        >
      </div>
      <div class="mt-4 border-b-2 border-my-color-secodary-gray pb-2 hidden lg:block">
        <div class="text-sm">
          <span class="text-my-color-hover-gray">rated:</span>
          <span class="ml-3 text-white">{{ rating }}<i class="fas fa-heart"></i></span>
        </div>
        <div class="text-sm mt-2">
          <span class="text-my-color-hover-gray">Casts:</span>
          <span class="ml-3 text-2sm text-blue-500">{{ casts }}</span>
        </div>
      </div>
      <div class="border-b border-my-color-secodary-gray pb-1 hidden lg:block">
        <span class="desc-movie text-white text-3sm">{{ overview }}</span>
        <a href="" class="text-yellow-500 text-2sm">more</a>
      </div>
    </div>
  </article>
</template>

<script setup>
import { computed, inject, ref } from 'vue'
import { getGenreNames } from '@/components/utils/genres'
import { USER } from '@/components/utils/keys'
import { client } from '@/components/utils/client'
import { API_BASE_URL } from '@/components/ApiDetails/api-constant.js'
import { API_VERSION } from '@/components/ApiDetails/api-constant.js'
import { API_READ_ACCESS_TOKEN } from '@/components/ApiDetails/api-constant.js'

const genreNames = ref([])
const props = defineProps({
  mediaType: String,
  language: String,
  title: String,
  overview: String,
  src: String,
  releaseDate: String,
  imdb: String,
  casts: String,
  rating: Number,
  generes: Array,
  id: Number
})
const res = getGenreNames(props.generes)
res.then((data) => (genreNames.value = data))
const year = computed(() => new Date(props.releaseDate).getFullYear())
const user = inject(USER)
async function addTowatchList(movieId) {
  try {
    if (!user.value) {
      alert('please login to the page first')
    }
    const sessionId = sessionStorage.getItem('session_id')
    const url = `${API_BASE_URL}${API_VERSION}/account/${user.value.id}/watchlist?session_id=${sessionId}`
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
        watchlist: true
      })
    }

    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
  } catch (err) {
    console.log(err)
  }
}
</script>
