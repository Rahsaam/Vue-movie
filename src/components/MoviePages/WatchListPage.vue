<template>
  <navbar/>
  <div class="mt-20" v-if="loading">
    <sppiner/>
  </div>
  <div v-else-if="!ListMovies.length">
    <h2 class="text-white text-center text-xl mt-20">there is no movie in watch list</h2>
  </div>
  
  <section v-else class="grid lg:grid-cols-4 sm:grid-cols-2 container max-w-sm sm:max-w-2xl md:max-w-5xl lg:max-w-7xl mx-auto px-5 sm:p-0 m-6">
    <watch-list-movies v-for="movie in ListMovies" :key="movie.id"
    :id="movie.id"
    :src="`${API_IMAGE_BASE_URL}${API_IMAGE_SIZE_XLG}${movie.poster_path}`"
    :genres="movie.genres_ids"
    :title="movie.title"
    :release="movie.release_date"
    :liked="movie.popularity"
    @change="showOnTop"/>
  </section>
</template>

<script setup>
import WatchListMovies from '@/components/MovieDetailComponents/WatchListMovies.vue'
import { client } from '@/components/utils/client.js'
import { API_BASE_URL, API_VERSION } from '@/components/ApiDetails/api-constant'
import { inject, onMounted, ref } from 'vue'
import { USER } from "@/components/utils/keys";
import { API_IMAGE_BASE_URL, API_IMAGE_SIZE_XLG} from '@/components//ApiDetails/api-constant'
import Navbar from '@/components/Navbar/Navbar.vue'
import Sppiner from '@/components/dls/Sppiner.vue'
const loading = ref(false)
const error = ref(null)
const user = inject(USER)
const ListMovies = ref([])
async function getWatchList() {
  try{
    error.value = null
    loading.value = true
    const response = await client(`${API_BASE_URL}${API_VERSION}/account/${user.value.id}/watchlist/movies`)
    ListMovies.value = response.results
  } catch (err) {
    error.value = err.massage
  } finally {
    loading.value = false
  }
}

onMounted(() => {
    getWatchList()
})
</script>


