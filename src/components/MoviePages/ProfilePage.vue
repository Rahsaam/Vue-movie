<template>
  <navbar />
  <div class="w-full max-w-screen-2xl mx-auto">
    <main class="mt-28 max-w-6xl mx-auto px-4">
      <!-- prof pic & calender col -->
      <section class="flex flex-col w-full justify-between md:flex-row">
        <profile-image :avatar="accountImage.avatar_path" :userName="accountData.username" />

        <div class="w-full mt-10 md:mt-0 flex flex-col items-center">
          <div class="w-80% md:ml-auto mt-4 bg-black p-3 rounded-3xl">
            <h2 class="text-white text-left text-2xl mt-3">ّFavorite:</h2>
            <div class="mt-4">
              <div class="flex w-full justify-between">
                <div v-if="loading">
                  <sppiner/>
                </div>
                <div v-else-if="!favoriteMovies.length">
                  <p class="text-xl text-white">there is no favorite movie :(</p>
                </div>
                <div v-else class="h-60 w-full overflow-y-scroll">
                <ul class="flex flex-col gap-y-2 justify-between w-full">
                  <offer-movies
                    v-for="movie in favoriteMovies"
                    :key="movie.id"
                    :id="movie.id"
                    :src="movie.poster_path"
                    :title="movie.title"
                    :imdb="movie.vote_average.toFixed(1)"
                    :genres="movie.genre_ids"
                    :release="movie.release_date"
                  />
                </ul>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- movies -->
    </main>
  </div>
  
</template>

<script setup>
import ProfileImage from '@/components/ProfileDetailComponents/ProfileImage.vue'
import OfferMovies from '@/components/ProfileDetailComponents/OfferMovies.vue'
import Navbar from '@/components/Navbar/Navbar.vue'
import { client } from '../utils/client'
import { inject, onMounted, ref } from 'vue'
import { USER } from '@/components/utils/keys'
import { API_BASE_URL, API_VERSION } from '@/components/ApiDetails/api-constant'
import Sppiner from '@/components/dls/Sppiner.vue'

const accountData = ref([])
const accountImage = ref('')
const favoriteMovies = ref([])
const user = inject(USER)
const loading = ref(false)
const error = ref(null)
const sessionId = sessionStorage.getItem('session_id')

async function getUserData() {
  const response = await client(`${API_BASE_URL}${API_VERSION}/account/${user.value.id}`)
  accountData.value = response
  accountImage.value = response.avatar.tmdb
}
async function getFavoriteMovies() {
  try {
    error.value = null
    loading.value = true
    const response = await client(
      `${API_BASE_URL}${API_VERSION}/account/${user.value.id}/favorite/movies?session_id=${sessionId}`
    )
    favoriteMovies.value = response.results
  } catch (err) {
    error.value = err.message
  } finally {
    loading.value = false
  }
}
getFavoriteMovies()

onMounted(() => {
  getUserData()
})
</script>

<style></style>
