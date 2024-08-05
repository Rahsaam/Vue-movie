<template>
  <div>
    <div v-if="loading">
      <slot name="loading">
        <Sppiner />
      </slot>
    </div>
    <slot v-else-if="error" name="error" class="text-white">{{ error }}</slot>
    <slot v-else name="loaded" :data="data.results" :resultCount="resultCount" />
    <pre class="text-white">data: {{ resultCount }}</pre>
  </div>
</template>

<script setup>
const props = defineProps({
  endpoint: {
    required: true,
    type: String
  },
  method: {
    default: 'GET',
    type: String
  }
})
import {useSearch} from '@/composables/useSearch.js'
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
let { query } = route.query
const showPage = ref(1)
const { data, loading, error, resultCount, doSearch } = useSearch()


watch(
    route,
    (newRoute) => {
    query = newRoute.query.query
    showPage.value = 1
    doSearch(props.endpoint, query, showPage.value)
  },
  {immediate: true}
)

</script>

<style></style>
