<template>
  <navbar/>
  <div v-if="loading" class="mt-40">
    <sppiner />
  </div>
  <div v-else-if="error">
    <p class="text-white text-5xl text-center">oops fetch data failed...</p>
  </div>
  <div v-else>
    <DetailImage
      :src="`${API_IMAGE_BASE_URL}${API_IMAGE_SIZE_2XLG}${data.backdrop_path}`"
      :movie="`${API_IMAGE_BASE_URL}${API_IMAGE_SIZE_2XLG}${data.poster_path}`"
      :genres="data.genres"
      :title="data.title"
      :overview="data.overview"
      :imdb="data.vote_average"
    />
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useFetch } from '@/composables/useFetch'
import { watch } from 'vue'
import {
  API_BASE_URL,
  API_VERSION,
  API_IMAGE_BASE_URL,
  API_IMAGE_SIZE_2XLG
} from '@/components/ApiDetails/api-constant'
import Sppiner from '@/components/dls/Sppiner.vue'
import DetailImage from '@/components/MovieDetailComponents/DetailImage.vue'
import Navbar from '@/components/Navbar/Navbar.vue'
const { data, doFetch, loading, error } = useFetch()

const route = useRoute()
watch(
  () => route.params.id,
  (newValue) => {
    doFetch(`${API_BASE_URL}${API_VERSION}/movie/${newValue}?language=en-US`)
  },
  {
    immediate: true
  }
)
console.log('movie-data' ,data);
</script>

<style></style>
