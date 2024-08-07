<template>
  <SearchLoader :endpoint="`${API_BASE_URL}/3/search/movie`">
    <template #loading>
      <Sppiner />
    </template>
    <template #loaded="{ data, resultCount, totalPages, showPage }">
      <movie-rows :movies="data.slice(startIndex, endIndex)">
        <template #title>Movies</template>
        <template #pagination>
          <Pagination
            :total-results="resultCount"
            :items-per-page="itemsPerPage"
            :total-pages="totalPages"
            :current-Page="currentPage"
            :show-page="showPage"
            :movies="data.length"
            @pageChanged="(pageNum) => currentPage = pageNum"
          />
        </template>
      </movie-rows>
    </template>
  </SearchLoader>
</template>

<script setup>
import Sppiner from '@/components/dls/Sppiner.vue'
import MovieRows from '@/components/General/MovieRows.vue'
import Pagination from '@/components/General/Pagination.vue'
import SearchLoader from '@/components/General/SearchLoader.vue'
import { API_BASE_URL } from '@/components/ApiDetails/api-constant'
import { computed, ref } from 'vue'
const itemsPerPage = ref(5)
const currentPage = ref(0)
const startIndex = computed(() => currentPage.value * itemsPerPage.value)
const endIndex = computed(() => (currentPage.value + 1) * itemsPerPage.value)
</script>

<style>

</style>