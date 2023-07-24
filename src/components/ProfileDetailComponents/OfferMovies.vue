<template>
  <li class="for-you-movie" aria-selected="true">
    <div class="flex items-center">
      <img :src="`${API_IMAGE_BASE_URL}${API_IMAGE_SIZE_XLG}/${src}`" class="w-10 md:h-auto rounded-full" alt="" />
      <h6 class="ml-3">{{ title }}</h6>
    </div>
    <div class="flex flex-col">
      <small>IMDB: {{ imdb }}</small>
      <small v-for="genre in favGenres" :key="genre">{{ genre }}</small>
      <small>{{ year }}</small>
    </div>
  </li>
</template>

<script setup>
import {getGenreNamesFavorite} from '@/components/utils/genres'
import { computed, ref } from 'vue'
import {
  API_IMAGE_BASE_URL,
  API_IMAGE_SIZE_MD,
  API_IMAGE_SIZE_XLG,
  API_IMAGE_SIZE_2XLG,
  API_BASE_URL,
  API_VERSION
  } from '@/components/ApiDetails/api-constant';
const favGenres = ref([])
const props = defineProps({
  src: String,
  title: String,
  imdb: String,
  genres: Array,
  release: String
})
const res = getGenreNamesFavorite(props.genres)
res.then(data => (favGenres.value = data.slice(0, 1)))

const year = computed(() => new Date(props.release).getFullYear())

</script>
