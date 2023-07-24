<template>
  <div class="flex bg-my-color-dark-orange rounded-3xl relative ">
    <li class="for-you-movie" aria-selected="true">
      <div class="flex items-center">
        <img
          :src="`${API_IMAGE_BASE_URL}${API_IMAGE_SIZE_XLG}/${src}`"
          class="w-10 md:h-auto rounded-full"
          alt=""
        />
        <h6 class="ml-3">{{ title }}</h6>
      </div>
      <div class="flex flex-col">
        <small>IMDB: {{ imdb }}</small>
        <small v-for="genre in favGenres" :key="genre">{{ genre }}</small>
        <small>{{ year }}</small>
      </div>
    </li>
    <button @click="addToFavorite(id)" class="absolute right-2 top-1 ">
      <i class="fa-solid text-xl text-white fa-circle-xmark hover:text-red-500 cursor-pointer"></i>
    </button>
  </div>
</template>

<script setup>
import { getGenreNamesFavorite } from '@/components/utils/genres'
import { computed, inject, ref } from 'vue'
import {
  API_IMAGE_BASE_URL,
  API_IMAGE_SIZE_XLG,
  API_BASE_URL,
  API_VERSION,
  API_READ_ACCESS_TOKEN

} from '@/components/ApiDetails/api-constant'
import { USER } from '@/components/utils/keys'
import { useToast } from 'vue-toastification'
const toast = useToast()
const user = inject(USER)
const favGenres = ref([])
const props = defineProps({
  src: String,
  title: String,
  imdb: String,
  genres: Array,
  release: String,
  id: Number
})
const res = getGenreNamesFavorite(props.genres)
res.then((data) => (favGenres.value = data.slice(0, 1)))
const year = computed(() => new Date(props.release).getFullYear())

async function addToFavorite(movieId) {
  const url = `${API_BASE_URL}${API_VERSION}/account/${user.value.id}/favorite`
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      Authorization:
        `Bearer ${API_READ_ACCESS_TOKEN}`
    },
    body: JSON.stringify({ media_type: 'movie', media_id: movieId, favorite: false })
  }

  fetch(url, options)
    .then((response) => response.json())
    toast.success('remove from favorite list')
    window.location.reload()
    .catch((err) => console.error(err))
}



</script>
