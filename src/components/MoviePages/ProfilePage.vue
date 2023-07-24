<template>
  <navbar/>
  <div class="w-full max-w-screen-2xl mx-auto">
    <main class="mt-28 max-w-6xl mx-auto px-4">
      <!-- prof pic & calender col -->
      <section class="flex flex-col w-full justify-between md:flex-row">
        <profile-image 
        :avatar="accountImage.avatar_path"
        :userName="accountData.username"/>

        <div class="w-full mt-10 md:mt-0 flex flex-col items-center">
          <div class="w-80% md:ml-auto mt-4 bg-black p-3 rounded-3xl">
            <h2 class="text-white text-left text-2xl mt-3">ّFavorite:</h2>
            <div class="mt-4">
              <div class="flex w-full justify-between">
                <ul class="flex flex-col gap-y-2 justify-between w-full">
                  <offer-movies v-for="movie in favoriteMovies" :key="movie.id"
                  :src="movie.poster_path"
                  :title="movie.title"
                  :imdb="movie.vote_average.toFixed(1)"
                  :genres="movie.genre_ids"
                  :release="movie.release_date"/>
                </ul>
                <next-btn />
              </div>
              <genres-btn />
            </div>
          </div>
        </div>
      </section>


      <!-- movies -->
      <section class="mx-auto mt-14">
        <div class="flex justify-between">
          <h2 class="text-red-900 text-2xl">Watched</h2>
          <button class="btn-secodary">more...</button>
        </div>
        <div class="w-full overflow-x-scroll whitespace-no-wrap mx-auto mt-5 lg:max-w-7xl">
          <div class="flex flex-row space-x-3 w-[1200px] mx-auto [&::-webkit-scrollbar]:hidden">
            <rated-movies/>
            <div class="text-white relative">
              <div class="relative min-w-[150px]" aria-selected="true">
                <img src="../images/movie-2.png" alt="" class="w-full h-full rounded-md" />
                <div
                  class="text-overlay text-center absolute inset-0 flex flex-col justify-center items-center w-full h-full overflow-hidden bg-black bg-opacity-70 p-6 rounded-md backdrop-blur-lg opacity-0 duration-300 text-xl hover:opacity-90"
                >
                  <span class="text-sm md:text-md">imdb: 8.4</span>
                  <div class="like-box text-sm md:text-md">
                    <i class="fas fa-heart"></i>
                    <span>90%</span>
                  </div>
                </div>
              </div>
              <span>morbius</span>
            </div>
            <div class="text-white relative">
              <div class="relative min-w-[150px]" aria-selected="true">
                <img src="../images/movie-3.png" alt="" class="w-full h-full rounded-md" />
                <div
                  class="text-overlay text-center absolute inset-0 flex flex-col justify-center items-center w-full h-full overflow-hidden bg-black bg-opacity-70 p-6 rounded-md backdrop-blur-lg opacity-0 duration-300 text-xl hover:opacity-90"
                >
                  <span class="text-sm md:text-md">imdb: 8.4</span>
                  <div class="like-box text-sm md:text-md">
                    <i class="fas fa-heart"></i>
                    <span>90%</span>
                  </div>
                </div>
              </div>
              <span>Adam project</span>
            </div>
            <div class="text-white relative">
              <div class="relative min-w-[150px]" aria-selected="true">
                <img src="../images/movie-4.png" alt="" class="w-full h-full rounded-md" />
                <div
                  class="text-overlay text-center absolute inset-0 flex flex-col justify-center items-center w-full h-full overflow-hidden bg-black bg-opacity-70 p-6 rounded-md backdrop-blur-lg opacity-0 duration-300 text-xl hover:opacity-90"
                >
                  <span class="text-sm md:text-md">imdb: 8.4</span>
                  <div class="like-box text-sm md:text-md">
                    <i class="fas fa-heart"></i>
                    <span>90%</span>
                  </div>
                </div>
              </div>
              <span>Free Guy</span>
            </div>
            <div class="text-white relative">
              <div class="relative min-w-[150px]" aria-selected="true">
                <img src="../images/movie-5.png" alt="" class="w-full h-full rounded-md" />
                <div
                  class="text-overlay text-center absolute inset-0 flex flex-col justify-center items-center w-full h-full overflow-hidden bg-black bg-opacity-70 p-6 rounded-md backdrop-blur-lg opacity-0 duration-300 text-xl hover:opacity-90"
                >
                  <span class="text-sm md:text-md">imdb: 8.4</span>
                  <div class="like-box text-sm md:text-md">
                    <i class="fas fa-heart"></i>
                    <span>90%</span>
                  </div>
                </div>
              </div>
              <span>Batman</span>
            </div>
            <div class="text-white relative">
              <div class="relative min-w-[150px]" aria-selected="true">
                <img src="../images/movie-6.png" alt="" class="w-full h-full rounded-md" />
                <div
                  class="text-overlay text-center absolute inset-0 flex flex-col justify-center items-center w-full h-full overflow-hidden bg-black bg-opacity-70 p-6 rounded-md backdrop-blur-lg opacity-0 duration-300 text-xl hover:opacity-90"
                >
                  <span class="text-sm md:text-md">imdb: 8.4</span>
                  <div class="like-box text-sm md:text-md">
                    <i class="fas fa-heart"></i>
                    <span>90%</span>
                  </div>
                </div>
              </div>
              <span>Uncharted</span>
            </div>
          </div>
        </div>
      </section>
      <section class="mx-auto mt-14">
        <div class="flex justify-between">
          <h2 class="text-red-900 text-2xl">Favourite</h2>
          <button class="btn-secodary">more...</button>
        </div>
        <!-- <div class=" sm:grid sm:grid-cols-3 md:flex gap-6 mt-7"></div> -->
        <div class="w-full overflow-x-scroll whitespace-no-wrap mx-auto mt-5 lg:max-w-7xl">
          <div class="flex flex-row space-x-3 w-[1200px] mx-auto [&::-webkit-scrollbar]:hidden">
            <div class="text-white relative">
              <div class="relative min-w-[150px]" aria-selected="true">
                <img src="../images/movie-1.png" alt="" class="w-full h-full rounded-md" />
                <div
                  class="text-overlay text-center absolute inset-0 flex flex-col justify-center items-center w-full h-full overflow-hidden bg-black bg-opacity-70 p-6 rounded-md backdrop-blur-lg opacity-0 duration-300 text-xl hover:opacity-90"
                >
                  <span class="text-sm md:text-md">imdb: 8.4</span>
                  <div class="like-box text-sm md:text-md">
                    <i class="fas fa-heart"></i>
                    <span>90%</span>
                  </div>
                </div>
              </div>
              <span>Sonic</span>
            </div>
            <div class="text-white relative">
              <div class="relative min-w-[150px]" aria-selected="true">
                <img src="../images/movie-2.png" alt="" class="w-full h-full rounded-md" />
                <div
                  class="text-overlay text-center absolute inset-0 flex flex-col justify-center items-center w-full h-full overflow-hidden bg-black bg-opacity-70 p-6 rounded-md backdrop-blur-lg opacity-0 duration-300 text-xl hover:opacity-90"
                >
                  <span class="text-sm md:text-md">imdb: 8.4</span>
                  <div class="like-box text-sm md:text-md">
                    <i class="fas fa-heart"></i>
                    <span>90%</span>
                  </div>
                </div>
              </div>
              <span>morbius</span>
            </div>
            <div class="text-white relative">
              <div class="relative min-w-[150px]" aria-selected="true">
                <img src="../images/movie-3.png" alt="" class="w-full h-full rounded-md" />
                <div
                  class="text-overlay text-center absolute inset-0 flex flex-col justify-center items-center w-full h-full overflow-hidden bg-black bg-opacity-70 p-6 rounded-md backdrop-blur-lg opacity-0 duration-300 text-xl hover:opacity-90"
                >
                  <span class="text-sm md:text-md">imdb: 8.4</span>
                  <div class="like-box text-sm md:text-md">
                    <i class="fas fa-heart"></i>
                    <span>90%</span>
                  </div>
                </div>
              </div>
              <span>Adam project</span>
            </div>
            <div class="text-white relative">
              <div class="relative min-w-[150px]" aria-selected="true">
                <img src="../images/movie-4.png" alt="" class="w-full h-full rounded-md" />
                <div
                  class="text-overlay text-center absolute inset-0 flex flex-col justify-center items-center w-full h-full overflow-hidden bg-black bg-opacity-70 p-6 rounded-md backdrop-blur-lg opacity-0 duration-300 text-xl hover:opacity-90"
                >
                  <span class="text-sm md:text-md">imdb: 8.4</span>
                  <div class="like-box text-sm md:text-md">
                    <i class="fas fa-heart"></i>
                    <span>90%</span>
                  </div>
                </div>
              </div>
              <span>Free Guy</span>
            </div>
            <div class="text-white relative">
              <div class="relative min-w-[150px]" aria-selected="true">
                <img src="../images/movie-5.png" alt="" class="w-full h-full rounded-md" />
                <div
                  class="text-overlay text-center absolute inset-0 flex flex-col justify-center items-center w-full h-full overflow-hidden bg-black bg-opacity-70 p-6 rounded-md backdrop-blur-lg opacity-0 duration-300 text-xl hover:opacity-90"
                >
                  <span class="text-sm md:text-md">imdb: 8.4</span>
                  <div class="like-box text-sm md:text-md">
                    <i class="fas fa-heart"></i>
                    <span>90%</span>
                  </div>
                </div>
              </div>
              <span>Batman</span>
            </div>
            <div class="text-white relative">
              <div class="relative min-w-[150px]" aria-selected="true">
                <img src="../images/movie-6.png" alt="" class="w-full h-full rounded-md" />
                <div
                  class="text-overlay text-center absolute inset-0 flex flex-col justify-center items-center w-full h-full overflow-hidden bg-black bg-opacity-70 p-6 rounded-md backdrop-blur-lg opacity-0 duration-300 text-xl hover:opacity-90"
                >
                  <span class="text-sm md:text-md">imdb: 8.4</span>
                  <div class="like-box text-sm md:text-md">
                    <i class="fas fa-heart"></i>
                    <span>90%</span>
                  </div>
                </div>
              </div>
              <span>Uncharted</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import ProfileImage from '@/components/ProfileDetailComponents/ProfileImage.vue'
import OfferMovies from '@/components/ProfileDetailComponents/OfferMovies.vue'
import Navbar from '@/components/Navbar/Navbar.vue'
import { client } from '../utils/client'
import { inject, onMounted, ref } from 'vue'
import { USER } from "@/components/utils/keys";
import { API_BASE_URL, API_VERSION } from '@/components/ApiDetails/api-constant'
import NextBtn from '@/components/ProfileDetailComponents/NextBtn.vue'
const accountData = ref([])
const accountImage = ref('')
const favoriteMovies = ref([])
const user = inject(USER)

async function getUserData() {
  const response = await client(`${API_BASE_URL}${API_VERSION}/account/${user.value.id}`)
  accountData.value = response
  accountImage.value = response.avatar.tmdb
}
async function getFavoriteMovies() {
  const response = await client(`${API_BASE_URL}${API_VERSION}/account/${user.value.id}/favorite/movies`)
  console.log(response.results);
  favoriteMovies.value = response.results.slice(0,3)
}
getFavoriteMovies()

onMounted(() => {
  getUserData()
})

</script>

<style></style>
