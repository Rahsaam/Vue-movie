<template>
  <!-- <h2 class="text-yellow-400 text-2xl">Casts</h2> -->
  <p class="text-white" v-if="loading">Loading...</p>
  <p class="text-white" v-else-if="error">these is something wrong try again :(</p>
  <div class="flex flex-wrap justify-between" v-else>
    <people-rows :persons="showResult.slice(0, showCount)">
      Casts
    </people-rows>
  </div>
  <div class="text-center">
    <button @click.prevent="showCount+=5" class="bg-yellow-400 mt-5 p-1 rounded-lg">Load more...</button>
  </div>
</template>

<script setup>
import { useSearch } from '@/composables/useSearch.js'
import PeopleRows from '@/components/General/PeopleRows.vue'
import { API_BASE_URL, API_VERSION } from '@/components/ApiDetails/api-constant'
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
let { query } = route.query
const showResult = ref([])
const showPage = ref(1)
const showCount = ref(5)

const { data, error, loading, resultCount, doSearch } = useSearch()

watch(showPage, () => {
  
})

watch(route, (newRoute) => {
    query = newRoute.query.query
    showResult.value = []
    showPage.value = 1
    doSearch(`${API_BASE_URL}${API_VERSION}/search/person`, query, showPage.value)
  },
  { immediate: true }
)

watch(data, () => {
  if (!loading.value) {
    showResult.value.push(...data.value.results)
  }
})
</script>

<style></style>
