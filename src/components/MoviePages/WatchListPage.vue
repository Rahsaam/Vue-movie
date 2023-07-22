<template>
  <!-- <section class="relative">
    <detail-image v-for="movie in ListMovies" :key="movie.id"
    />
    <div class="absolute z-100 sm:grid sm:grid-cols-2 gap-2 sm:-bottom-60 max-w-7xl mx-auto px-5 md:flex md:-bottom-16 md:gap-x-3 left-0 right-0 justify-around w-full">
      <playBtnBox />
      <director-box />
      <length-box />
      <release-box />
    </div>
  </section>
  <div class="md:h-36 sm:h-72 h-96"></div>
  <div class="md:h-0 sm:h-0 h-28"></div> -->

  <section class="grid lg:grid-cols-4 sm:grid-cols-2 container max-w-sm sm:max-w-2xl md:max-w-5xl lg:max-w-7xl mx-auto px-5 sm:p-0 m-6">
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
// import DetailImage from '@/components/MovieDetailComponents/DetailImage.vue'
// import playBtnBox from '@/components/MovieDetailComponents/PlayBtnBox.vue'
// import directorBox from '@/components/MovieDetailComponents/DirectorBox.vue'
// import lengthBox from '@/components/MovieDetailComponents/LengthBox.vue'
// import releaseBox from '@/components/MovieDetailComponents/releaseBox.vue'
import WatchListMovies from '@/components/MovieDetailComponents/WatchListMovies.vue'
import { client } from '@/components/utils/client.js'
import { API_BASE_URL, API_VERSION } from '@/components/ApiDetails/api-constant'
import { inject, onMounted, ref } from 'vue'
import { USER } from "@/components/utils/keys";
import { API_IMAGE_BASE_URL, API_IMAGE_SIZE_XLG} from '@/components//ApiDetails/api-constant'

const user = inject(USER)
const ListMovies = ref([])
async function getWatchList() {
    const response = await client(`${API_BASE_URL}${API_VERSION}/account/${user.value.id}/watchlist/movies`)
    ListMovies.value = response.results
    console.log('hello' ,response);
}

onMounted(() => {
    getWatchList()
})
</script>


