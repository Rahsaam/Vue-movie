<template>
  <SearchLoader :endpoint="`${API_BASE_URL}/3/search/person`">
    <template #loaded="{data, resultCount}" >
      <people-rows :persons="data.slice(0, showCount)">
        <template #title>Casts</template>
        <template #pagination>
          <Pagination :total-results="resultCount"/>
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
import { ref } from 'vue'
const showCount = ref(5)

</script>
