<template>
  <div>
    <div v-if="loading">
        <slot name="loading">
            <Sppiner />
        </slot>
        <slot name="loading-msg">
            Loading your data...
        </slot>
    </div>
        <slot v-else-if="error" name="error" class="text-white">{{ error }}</slot>
        <slot v-else name="loaded" :data="getDataArr" />
  </div>
</template>

<script setup>
import Sppiner from '@/components/dls/Sppiner.vue'
import { useFetch } from '@/composables/useFetch.js'
import { ref, watch } from 'vue';

const props = defineProps({
    endpoint: {
        type: String,
        required: true,
    },
    options: {
        type: Object,
        default: () => ({}),
    },
    method: {
        type: String,
        default: 'GET'
    }
})
const getDataArr = ref([]);
const {data, loading, error, doFetch} = useFetch();


watch(
  () => props.endpoint,
  (url) => {
    doFetch(url);
  },
  { immediate: true }
);

watch(data, (newValue) => {
  if (newValue) {
    getDataArr.value = newValue.results;
  }
});
</script>