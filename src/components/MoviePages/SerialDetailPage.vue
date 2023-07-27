<template>
  <navbar/>
  <section class="relative h-[400px] w-full">
    <DetailImage
      :src="`${API_IMAGE_BASE_URL}${API_IMAGE_SIZE_2XLG}${seriesDetail.poster_path}`"
      :genres="seriesDetail.genres"
      :title="seriesDetail.name"
      :actorsName="getTwoActors"
    />

    <!-- boxes -->
    <div
      class="absolute sm:grid sm:grid-cols-2 gap-2 sm:-bottom-60 max-w-7xl mx-auto px-5 md:flex md:-bottom-16 md:gap-x-3 left-0 right-0 justify-around w-full"
    >
      <playBtnBox />

      <lengthBoxSerial :length="seriesDetail.number_of_seasons" />
      <releaseBox :year="seriesDetail.first_air_date" />
    </div>
  </section>
  <div class="md:h-36 sm:h-72 h-96"></div>
  <div class="md:h-0 sm:h-0 h-28"></div>
  <!-- description -->
  <main class="w-full max-w-7xl mx-auto px-5">
    <div class="flex justify-between">
      <overviewBox :overview="seriesDetail.overview" />
      <more-info-series
        :imdb="seriesDetail.vote_average.toFixed(1)"
        :likes="seriesDetail.vote_count"
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
    <footerContent/>
  </main>
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

import DetailImage from '@/components/MovieDetailComponents/DetailImage.vue'
import playBtnBox from '@/components/MovieDetailComponents/PlayBtnBox.vue'

import lengthBoxSerial from '@/components/MovieDetailComponents/LengthBoxSerial.vue'
import releaseBox from '@/components/MovieDetailComponents/releaseBox.vue'
import overviewBox from '@/components/MovieDetailComponents/OverviewBox.vue'
import moreInfoSeries from '@/components/MovieDetailComponents/MoreInfoSeries.vue'
import actorsBox from '@/components/MovieDetailComponents/ActorsBox.vue'
import footerContent from '@/components/dls/FooterContent.vue'
import Navbar from '@/components/Navbar/Navbar.vue'
const seriesDetail = ref([])
const crewsAndCasts = ref([])
const casts = ref([])
const getTwoActors = ref([])
const route = useRoute()

const getSerialDetail = async (series_id) => {
  const data = await client(`${API_BASE_URL}${API_VERSION}/tv/${series_id}?language=en-US`)
  seriesDetail.value = data
}
const getCrewsAndCastsData = async (series_id) => {
  const data = await client(`${API_BASE_URL}${API_VERSION}/tv/${series_id}/credits?language=en-US`)
  crewsAndCasts.value = data
  const castsArr = data.cast
  casts.value = castsArr
  const twoActors = castsArr.slice(0, 2).map((cast) => cast.name)
  getTwoActors.value = twoActors
}

// const getDirectorName
watch(
  () => route.params.id,
  (newValue) => {
    getSerialDetail(newValue)
    getCrewsAndCastsData(newValue)
  },
  {
    immediate: true
  }
)
</script>

<style></style>
