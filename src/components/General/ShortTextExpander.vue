<template>
    <span class="text-white">
      {{ isExpanded ? title : shortText }}
      <span v-if="props.title.length > len">...</span>
    </span>
  </template>
  
  <script setup>
  import { computed, ref } from "vue"
  
  const props = defineProps({
      title: String
  })
  
  const isExpanded = ref(false)
  const len = ref(16)
  
  const shortText = computed(() => {
      return props.title.substring(0, len.value)
  })
  </script>
