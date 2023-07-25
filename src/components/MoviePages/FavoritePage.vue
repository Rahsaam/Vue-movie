<template>
  <navbar />
  <div v-if="loading" class="mt-40">
    <sppiner />
  </div>
  <div v-else-if="error">
    <p class="text-white text-5xl text-center">oops fetch data failed...</p>
  </div>
  <div v-else>
    <section class="relative h-[400px] w-full">
      <DetailImage
        :src="`${API_IMAGE_BASE_URL}${API_IMAGE_SIZE_2XLG}${data.poster_path}`"
        :genres="data.genres"
        :title="data.title"
        :actorsName="getTwoActors"
      />

      
      <div
        class="absolute sm:grid sm:grid-cols-2 gap-2 sm:-bottom-60 max-w-7xl mx-auto px-5 md:flex md:-bottom-16 md:gap-x-3 left-0 right-0 justify-around w-full"
      >
        <playBtnBox />
        <director-box :directorName="getDirectorName" />
        <lengthBox :length="data.runtime" />
        <releaseBox :year="data.release_date" />
      </div>
    </section>
    <div class="md:h-36 sm:h-72 h-96"></div>
    <div class="md:h-0 sm:h-0 h-28"></div>

    <main class="w-full max-w-7xl mx-auto px-5">
      <div class="flex justify-between">
        <overviewBox :overview="data.overview" />
        <moreInfoBox
          :imdb="data.vote_average.toFixed(1)"
          :budget="data.budget"
          :likes="data.vote_count"
        />
      </div>

      <article class="mt-14 w-full">
        <h2 class="section-title">Casts</h2>
        <div class="flex justify-between overflow-x-scroll w-full">
          <actors-box
            v-for="cast in casts"
            :key="cast.id"
            :actorName="cast.name"
            :src="`${API_IMAGE_BASE_URL}${API_IMAGE_SIZE_MD}${cast.profile_path}`"
          />
        </div>
      </article>
    </main>
    <footer-content/>
  </div>
</template>

<script setup>
    import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { client } from '@/components/utils/client.js'

import { API_BASE_URL, API_VERSION } from '@/components/ApiDetails/api-constant'
import {
  API_IMAGE_BASE_URL,
  API_IMAGE_SIZE_XLG,
  API_IMAGE_SIZE_2XLG,
  API_IMAGE_SIZE_MD
} from '@/components/ApiDetails/api-constant'
import { useFetch } from '@/composables/useFetch'
import DetailImage from '@/components/MovieDetailComponents/DetailImage.vue'
import playBtnBox from '@/components/MovieDetailComponents/PlayBtnBox.vue'
import directorBox from '@/components/MovieDetailComponents/DirectorBox.vue'
import lengthBox from '@/components/MovieDetailComponents/LengthBox.vue'
import releaseBox from '@/components/MovieDetailComponents/releaseBox.vue'
import overviewBox from '@/components/MovieDetailComponents/OverviewBox.vue'
import moreInfoBox from '@/components/MovieDetailComponents/MoreInfoBox.vue'
import actorsBox from '@/components/MovieDetailComponents/ActorsBox.vue'
import Sppiner from '@/components/dls/Sppiner.vue'
import navbar from '@/components/Navbar/Navbar.vue'
import footerContent from '@/components/dls/FooterContent.vue'
const { data, doFetch, loading, error } = useFetch()

const route = useRoute()
const crewsAndCasts = ref([])
const casts = ref([])
const getDirectorName = ref('')
const getTwoActors = ref([])

const getCrewsAndCastsData = async (movie_id) => {
  const data = await client(
    `${API_BASE_URL}${API_VERSION}/movie/${movie_id}/credits?language=en-US`
  )
  crewsAndCasts.value = data
  const crewsArr = data.crew
  const castsArr = data.cast
  casts.value = castsArr
  crewsArr.forEach((crew) => {
    if (crew.job === 'Director') {
      let directorName = crew.name
      getDirectorName.value = directorName
    }
    const twoActors = castsArr.slice(0, 2).map((cast) => cast.name)
    getTwoActors.value = twoActors
  })
}
watch(
  () => route.params.id,
  (newValue) => {
    doFetch(`${API_BASE_URL}${API_VERSION}/movie/${newValue}?language=en-US`)
    getCrewsAndCastsData(newValue)
  },
  {
    immediate: true
  }
)


</script>

<style></style>
