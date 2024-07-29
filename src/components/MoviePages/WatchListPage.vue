<template>
  <navbar />
  <div class="h-14"></div>
  <DataLoader :endpoint="`${API_BASE_URL}3/account/${user.id}/watchlist/movies`">
    <template #loaded="{data}">
      <div v-if="!data.length">
        <h2 class="text-white text-center text-xl mt-20">there is no movie in watch list</h2>
      </div>
      <div v-else>
        <section
          class="grid lg:grid-cols-4 sm:grid-cols-2 container max-w-sm sm:max-w-2xl md:max-w-5xl lg:max-w-7xl mx-auto px-5 sm:p-0 m-6"
        >
          <watch-list-movies
            v-for="movie in data"
            :key="movie.id"
            :id="movie.id"
            :src="`${API_IMAGE_BASE_URL}${API_IMAGE_SIZE_XLG}${movie.poster_path}`"
            :genres="movie.genres_ids"
            :title="movie.title"
            :release="movie.release_date"
            :liked="movie.popularity"
            @change="showOnTop"
          />
        </section>
      </div>
    </template>
  </DataLoader>
  <footerContent />
</template>

<script setup>
import WatchListMovies from '@/components/MovieDetailComponents/WatchListMovies.vue'
import { API_BASE_URL } from '@/components/ApiDetails/api-constant'
import { inject } from 'vue'
import { USER } from '@/components/utils/keys'
import { API_IMAGE_BASE_URL, API_IMAGE_SIZE_XLG } from '@/components//ApiDetails/api-constant'
import Navbar from '@/components/Navbar/Navbar.vue'
import DataLoader from '@/components/General/DataLoader.vue'
import footerContent from '@/components/dls/FooterContent.vue'
const user = inject(USER)
</script>
