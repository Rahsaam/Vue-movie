<template>
  <h2 class="text-yellow-400 text-2xl">Casts</h2>
  <p class="text-white" v-if="loading">Loading...</p>
  <p class="text-white" v-else-if="error">these is something wrong try again :(</p>
  <div class="flex flex-wrap justify-between" v-else>
    <people-card v-for="person in showResult.slice(0, 6)" :key="person.id" :person="person"/>
  </div>
</template>

<script setup>
import {useSearch} from '@/composables/useSearch.js'
import PeopleCard from '@/components/General/PeopleCard.vue'
import {
  API_BASE_URL,
  API_VERSION
} from '@/components/ApiDetails/api-constant'
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
let {query} = route.query
const showResult = ref([])
const showPage = ref(1)

const {data, error, loading, resultCount, doSearch} = useSearch()


watch(route, (newRoute) => {
    query = newRoute.query.query
    showResult.value = [];
    showPage.value = 1
    doSearch(`${API_BASE_URL}${API_VERSION}/search/person`, query,  showPage.value)
},{immediate: true})

watch(data, () => {
    if(!loading.value) {
        showResult.value.push(...(data.value.results))
    }
})
</script>

<style>

</style>