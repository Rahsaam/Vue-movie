<template>
  <SearchLoader :endpoint="`${API_BASE_URL}/3/search/person`">
    <template #loaded="{ data, resultCount, totalPages, showPage }">
      <people-rows :persons="data.slice(startIndex, endIndex)">
        <template #title>Casts</template>
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
      </people-rows>
    </template>
  </SearchLoader>
</template>

<script setup>
import PeopleRows from '@/components/General/PeopleRows.vue'
import Pagination from '@/components/General/Pagination.vue'
import SearchLoader from '@/components/General/SearchLoader.vue'
import { API_BASE_URL } from '@/components/ApiDetails/api-constant'
import { computed, ref } from 'vue'
const itemsPerPage = ref(5)
const currentPage = ref(0)
const startIndex = computed(() => currentPage.value * itemsPerPage.value)
const endIndex = computed(() => (currentPage.value + 1) * itemsPerPage.value)
</script>
